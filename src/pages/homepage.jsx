import React, { useEffect, useState } from 'react'
import { collection, getDocs } from "firebase/firestore"
import { firestore } from "../lib/firebase"
import ToDo from './todo'
import Textfiled from './textfiled'



function Homepage() {


    const [list, setList] = useState([])
    const [loading, setLoading] = useState(true)


    const fetchRecentPosts = async () => {
        try {
            const querySnapshot = await getDocs(collection(firestore, "list"));
            const listData = querySnapshot.docs.map(doc => doc.data());
            setList(listData);
            setLoading(false);
            console.log(listData);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }

    useEffect(
        function () {
            fetchRecentPosts()

        },[]
    )
  return (

    <div>
                    <Textfiled></Textfiled>

        {
            list.map((item)=>{
                return <div>
                    <br />
                    <ToDo title={item["title"]} body={"body"}></ToDo>
                    <br />
                </div>
            } )
        }
    </div>
  )
}

export default Homepage