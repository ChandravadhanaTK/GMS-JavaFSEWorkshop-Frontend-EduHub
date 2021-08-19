import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Card, Button, Form } from 'react-bootstrap'
import { addDemo } from '../../features/demo/demoAPI'

export const AddDemo = () => {
  const history = useHistory()
  const [form, setForm] = useState({
    name: ''
  })

  const handleInputChange = (event) => {
    const updatedValue = event.target.value
    setForm({ name: updatedValue })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    try {
      await addDemo(form)

      history.push('/demo/all')
    } catch (error) {
      console.error(error)
    }
  }
  return (
    <Card>
      <Card.Body>
        <Card.Title>Add Demo</Card.Title>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control value={form.name} type="text" placeholder="Enter name" onChange={handleInputChange} />
            <Form.Text className="text-muted">
              Demo stuff :)
            </Form.Text>
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Card.Body>
    </Card>
  )
}