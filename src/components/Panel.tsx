import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaBeer } from 'react-icons/fa';

const Panel = () => {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the
                    <h3> Lets go for a <FaBeer />? </h3>
                    bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    )
}

export default Panel;