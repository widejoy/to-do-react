import { useRef, useState } from "react";
import { Container, Form, Button, Spinner, Alert } from "react-bootstrap";
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../lib/firebase';

export default function Signup() {
  const emailRef = useRef();
  const usernameRef = useRef();
  const passRef = useRef();
  const [isLoading, setisLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleSignUp = () => {
    setisLoading(true);
    setError(null);
    setSuccess(null);

    createUserWithEmailAndPassword(auth, emailRef.current.value, passRef.current.value)
      .then(() => {
        setSuccess("Account created successfully!");
      })
      .catch((err) => {
        setError("Error creating account: " + err.message);
      })
      .finally(() => {
        setisLoading(false);
      });
  };

  return (
    <Container>
      <h1>Sign Up</h1>
      <Form>
        <br />
        {error && <Alert variant="danger">{error}</Alert>}
        {success && <Alert variant="success">{success}</Alert>}
        <Form.Group className="mb-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" ref={emailRef} id="emailbox" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" ref={usernameRef} placeholder="Username" id="usernamebox" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" ref={passRef} placeholder="password" id="passbox" />
        </Form.Group>
        Already have an account? Click here to <a href="http://google.com">login</a>
        <br />
        <br />
        <Button
          variant="outline-primary"
          onClick={handleSignUp}
          disabled={isLoading}
        >
          {isLoading ? (
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          ) : (
            "Sign Up"
          )}
        </Button>
      </Form>
    </Container>
  );
}
