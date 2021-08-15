import { Card, Button, Form } from 'react-bootstrap'

export const EditMentor = () => {
  return (
    <Card>
      <Card.Body>
        <Card.Title>Edit Mentor</Card.Title>
        <Card.Text>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="email" placeholder="Enter name" />
              <Form.Text className="text-muted">
                Mentor stuff :)
              </Form.Text>
            </Form.Group>
            <Button variant="primary">
              Submit
            </Button>
          </Form>
        </Card.Text>
      </Card.Body>
    </Card>
  )
}