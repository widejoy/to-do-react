import { Card } from "react-bootstrap";

export default function ToDo({title,body})
{
    return <Card style={{textAlign:"center"}}>
        <Card.Header>{title}</Card.Header>
        <Card.Body>{body}
        </Card.Body>
        </Card>

}