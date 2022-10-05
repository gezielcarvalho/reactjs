import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../app/store';
import { createCard } from '../features/counter/counterSlice';
import {v4} from 'uuid';

interface IPanelProps {
    children: JSX.Element,
}
const Panel = ({ children }: IPanelProps) => {

    const dispatch = useDispatch<AppDispatch>();

    const handleCreate = () => {
        dispatch(createCard({
            id: v4(),
            isEditing: true,
            text: "New Task"
        }))
    }

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
                <Button
                    variant="primary"
                    onClick={handleCreate}>Go somewhere</Button>
            </Card.Body>
        </Card>
    )
}

export default Panel;