import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <Container>
      <div className="d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
        <div className="text-center">
          <Link className="btn btn-primary mx-2" to="/signup">
            Signup
          </Link>
          <Link className="btn btn-primary mx-2" to="/login">
            Login
          </Link>
        </div>
      </div>
    </Container>
  );
}
