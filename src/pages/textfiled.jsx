import React from 'react'
import { Button,ButtonGroup,} from "react-bootstrap";


export default function Textfiled() {
  return (
   <div aria-label="Basic example">
    <input type='text' className='form-control'placeholder='title'></input>
    <textarea className='form-control'></textarea>
    <Button variant="secondary">Right</Button>
  </div>

  )
}

