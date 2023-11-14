import { Button, Card, CloseButton } from "react-bootstrap";

export default function ToDo({ title, body,del}) {
  return (
    <Card style={{ textAlign: "center" }}>
      <Card.Footer> 
          <Button style={{backgroundColor: "rgba(0,0,0,0)", color: "red", border: "none"}} onClick={()=>del()}>X</Button>
      </Card.Footer>
      <Card.Header>{title}</Card.Header>
      <Card.Body>{body}</Card.Body>
    </Card>
  );
}
