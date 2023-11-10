import { useRef, useState } from "react";
import { Container, Form, Button, Spinner, Alert } from "react-bootstrap";
import { signInWithEmailAndPassword} from 'firebase/auth';
import { auth } from '../lib/firebase';

export default function Login() {
  const emailRef = useRef();
  const passRef = useRef();
  const [isLoading, setisLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleLogin = () => {
    setisLoading(true);
    setError(null);
    setSuccess(null);

    signInWithEmailAndPassword(auth, emailRef.current.value, passRef.current.value)
      .then(() => {
        setSuccess("Login successful!");
      })
      .catch((err) => {
        setError("Error logging in: " + err.message);
      })
      .finally(() => {
        setisLoading(false);
      });
  };

  return (
    <Container>
      <h1>Login</h1>
      <Form>
        <br />
        {error && <Alert variant="danger">{error}</Alert>}
        {success && <Alert variant="success">{success}</Alert>}
        <Form.Group className="mb-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" ref={emailRef} id="emailbox" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" ref={passRef} placeholder="password" id="passbox" />
        </Form.Group>
        Don't have an account? Click here to <a href="/signup">sign up</a>
        <br />
        <br />
        <Button
          variant="outline-primary"
          onClick={handleLogin}
          disabled={isLoading}
        >
          {isLoading ? (
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          ) : (
            "Login"
          )}
        </Button>
      </Form>
    </Container>
  );
}
