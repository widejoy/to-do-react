import { useRef } from "react";
import { Container,Form } from "react-bootstrap";


export default function App(){
  const emailRef = useRef()
  const usernameRef = useRef()
  const passRef = useRef()


  return <Container>
    <Form>
    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1" >
      <Form.Label>Email address</Form.Label>
      <Form.Control type="email" placeholder="name@example.com" ref={emailRef} />
    </Form.Group>
    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
      <Form.Label>Username</Form.Label>
      <Form.Control type="text" ref={usernameRef} placeholder="Username"/>
    </Form.Group>
    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" ref={passRef} placeholder="password"/>
    </Form.Group>

    </Form>
  </Container>

}