import { useState, useEffect } from 'react'
import { useParams, useHistory } from 'react-router'
import { Card, Button, Form } from 'react-bootstrap'

import { getDemoById, updateDemo } from '../../features/demo/demoAPI'

export const EditDemo = () => {
  const { demoId } = useParams()
  const history = useHistory()
  const [demoItem, setDemoItem] = useState({id: '', name: ''})

  useEffect(async () => {
    try {
      console.log(demoId)
      const demoData = await getDemoById(demoId)
      console.log(demoData)

      setDemoItem(demoData)
    } catch (error) {
      console.error(error)
    }
  }, [])

  const handleNameChange = (e) => {
    setDemoItem({
      ...demoItem,
      name: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(demoItem)
    try {
      await updateDemo(demoItem)

      history.push('/demo/all')
    } catch (error) {
      console.error(error)
    }
  }
  return (
    <Card>
      <Card.Body>
        <Card.Title>Edit Demo</Card.Title>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter name" value={demoItem.name} onChange={handleNameChange} />
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