import React, { useRef, useState } from 'react';
import { Button, Spinner } from 'react-bootstrap';
import { collection, addDoc } from 'firebase/firestore';
import { firestore } from '../lib/firebase';

export default function TextField({ getdata }) {
    const titleRef = useRef();
    const bodyRef = useRef();
    const [loading, setLoading] = useState(false);

    const handleSubmit = async () => {
        const title = titleRef.current.value;
        const body = bodyRef.current.value;

        if (title && body) {
            try {
                setLoading(true);

                await addDoc(collection(firestore, 'list'), {
                    title,
                    body,
                });

                titleRef.current.value = '';
                bodyRef.current.value = '';

                console.log('Document successfully written!');
                getdata();
            } catch (error) {
                console.error('Error writing document: ', error);
            } finally {
                setLoading(false);
            }
        } else {
            console.error('Title and Body are required');
        }
    };

    return (
        <div aria-label="Basic example" className="px-3 py-3 card">
            <br />
            <input type="text" className="form-control" placeholder="title" ref={titleRef}></input>
            <br />
            <textarea className="form-control" ref={bodyRef} placeholder="body"></textarea>
            <br />
            <Button variant="primary" onClick={handleSubmit} disabled={loading}>
                {loading ? (
                    <>
                        <Spinner animation="border" size="sm" />
                        {'  '}Submitting...
                    </>
                ) : (
                    'Submit'
                )}
            </Button>
        </div>
    );
}
