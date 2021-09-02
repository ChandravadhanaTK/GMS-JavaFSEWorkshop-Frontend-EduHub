import { useState, useEffect } from 'react'
import { useParams, useHistory } from 'react-router'
import { Card, Button, Form } from 'react-bootstrap'

import { getApproverById, updateApprover } from '../../features/Approver/ApproverAPI'

export const EditApprover = () => {
  const { ApproverId } = useParams()
  const history = useHistory()
  const [ApproverItem, setApproverItem] = useState({ id: '', name: '' })

  useEffect(async () => {
    try {
      console.log(ApproverId)
      const ApproverData = await getApproverById(ApproverId)
      console.log(ApproverData)

      setApproverItem(ApproverData)
    } catch (error) {
      console.error(error)
    }
  }, [])

  const handleNameChange = (e) => {
    setApproverItem({
      ...ApproverItem,
      name: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(ApproverItem)
    try {
      await updateApprover(ApproverItem)

      history.push('/Approver/all')
    } catch (error) {
      console.error(error)
    }
  }
  return (
    <Card>
      <Card.Body>
        <Card.Title>Edit Approver</Card.Title>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter name" value={ApproverItem.name} onChange={handleNameChange} />
            <Form.Text className="text-muted">
              Approver stuff :)
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