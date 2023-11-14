import React, { useEffect, useState } from 'react'
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore"
import { firestore } from "../lib/firebase"
import ToDo from './todo'
import Textfiled from './textfiled'



function Homepage() {


    const [list, setList] = useState([])
    const [loading, setLoading] = useState(true)



    const fetchRecentPosts = async () => {
        try {
            const querySnapshot = await getDocs(collection(firestore, "list"));
            const listData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setList(listData);
            setLoading(false);
            console.log(listData);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
        
    }

    const deleteItem = async (itemId) => {
        try {
            await deleteDoc(doc(firestore, 'list', itemId));
            console.log('Document successfully deleted!');
            fetchRecentPosts(); // Refresh the list after deletion
        } catch (error) {
            console.error('Error deleting document:', error);
        }
    };


    useEffect(
        function () {
            fetchRecentPosts()

        },[]
    )
  return (
    
    <div className='container'>
      <Textfiled getdata={fetchRecentPosts}></Textfiled>

        {
            list.map((item)=>{
                return <div>
                    <br />
                    <ToDo title={item["title"]} body={item["body"]} del={()=>deleteItem(item.id)}></ToDo>
                    <br />
                </div>
            } )
        }
    </div>
  )
}

export default Homepage