import { Card, Button, Form } from 'react-bootstrap'
import { MentorItem } from '../../components/Mentor/MentorItem'

export const EditMentor = () => {
  return (
    <Card>
      <Card.Body>
        <Card.Title>Edit Mentor</Card.Title>
        <Card.Text>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Mentor Name</Form.Label>
              <Form.Control type="text" placeholder="Enter name" />
              <Form.Text className="text-muted">
                Mentor stuff :)
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Availability ID</Form.Label>
              <Form.Control input type="number" placeholder="Enter ID" />
            </Form.Group>
            <Button variant="warning" type="edit">
              Edit
            </Button>
          </Form>
        </Card.Text>
      </Card.Body>
    </Card>
  )
}