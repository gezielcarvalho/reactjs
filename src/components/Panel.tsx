import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

interface IPanelProps {
    children: JSX.Element,
}
const Panel = ({children}: IPanelProps) => {
    return (
        <Card style={{ width: '18rem' }}>
            {/* <Card.Img variant="top" src={image} /> */}
            <Card.Body>
                <Card.Title style={{ 
                    backgroundColor: 'lightgray'
                 }}>My Panel</Card.Title>
                <Card.Text>
                    {children}
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    )
}

export default Panel;