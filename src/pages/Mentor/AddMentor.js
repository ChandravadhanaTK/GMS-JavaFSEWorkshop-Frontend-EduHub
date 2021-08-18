import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Card, Button, Form } from 'react-bootstrap'

//import { addDemo } from '../../features/demo/demoSlice'

export const AddMentor = () => {
  const history = useHistory()
  const [form, setForm] = useState({
    name: ''
  })

  const handleInputNameChange = (event) => {
    const updatedValue = event.target.value
    setForm({ name: updatedValue })
  }

  const handleInputSkillChange = (event) => {
    const updatedValue = event.target.value
    setForm({ mentoringSkill: updatedValue })
  }

  const handleInputHoursChange = (event) => {
    const updatedValue = event.target.value
    setForm({ mentoredHours: updatedValue })
  }

  const handleInputRatingChange = (event) => {
    const updatedValue = event.target.value
    setForm({ mentoredRating: updatedValue })
  }

  const handleAboutMentorChange = (event) => {
    const updatedValue = event.target.value
    setForm({ aboutMentor: updatedValue })
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    history.push('/add/all')
  }
  return (
    <Card>
      <Card.Body>
        <Card.Title>Add Mentor</Card.Title>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicName" size="sm">
            <Form.Label>Name</Form.Label>
            <Form.Control value={form.name} type="text" placeholder="Enter name" size="sm" onChange={handleInputNameChange} />
            <Form.Text className="text-muted">
              Mentor stuff :)
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicSkill">
            <Form.Label>Mentoring Skill</Form.Label>
            <Form.Control value={form.skill} type="text" placeholder="Enter skill" size="sm" onChange={handleInputSkillChange} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicStartDateTime">
            <Form.Label>Start Date / Time</Form.Label>
            <Form.Control value={form.startDateTime} type="date" placeholder="Enter skill" size="sm" onChange={handleInputSkillChange} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEndDateTime">
            <Form.Label>End Date / Time</Form.Label>
            <Form.Control value={form.endDateTime} type="date" placeholder="Enter skill" size="sm" onChange={handleInputSkillChange} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicHours">
            <Form.Label>Mentored Hours</Form.Label>
            <Form.Control value={form.hours} type="number" placeholder="Enter the number of Hours mentored" size="sm"  onChange={handleInputHoursChange} />
          </Form.Group>            
          <Form.Group className="mb-3" controlId="formBasicRating">
            <Form.Label>Mentor's Rating</Form.Label>
            <Form.Control value={form.rating} type="text" placeholder="Enter the rating of mentor" size="sm" onChange={handleInputRatingChange} />
          </Form.Group>              
          <Form.Group className="mb-3" controlId="formAboutMentor">
            <Form.Label>About Mentor</Form.Label>
            <Form.Control value={form.aboutMentor} type="text" placeholder="Enter details of mentor" onChange={handleAboutMentorChange} />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Card.Body>
    </Card>
  )
}