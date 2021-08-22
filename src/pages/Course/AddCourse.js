import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Card, Button, Form } from 'react-bootstrap'
import { addCourse } from '../../features/course/courseAPI'

export const AddCourse = () => {
  const history = useHistory()
  const [form, setForm] = useState({
    coursename: '' ,
    coursedesc: '' ,
    skillreqd:''

 })

  const handleInputCourseNameChange = (event) => {
    const updatedValue = event.target.value
    setForm({ coursename: updatedValue })
  }

  const handleInputCourseDescChange = (event) => {
    const updatedValue = event.target.value
    setForm({ coursedesc: updatedValue })
  }

  const handleInputSkillReqdChange = (event) => {
    const updatedValue = event.target.value
    setForm({ skillreqd: updatedValue })
  }
  const handleSubmit = async (event) => {
    event.preventDefault()

    try {
      await addCourse(form)

      history.push('/course/all')
    } catch (error) {
      console.error(error)
    }
  }
  return (
    <Card>
      <Card.Body>
        <Card.Title>Add Course</Card.Title>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Course Name</Form.Label>
            <Form.Control value={form.coursename} type="text" placeholder="Enter Course name" onChange={handleInputCourseNameChange} />

            <Form.Label>Course Description</Form.Label>
            <Form.Control value={form.coursedesc} type="text" placeholder="Enter Course Description" onChange={handleInputCourseDescChange} />

            <Form.Label>Skill Required</Form.Label>
            <Form.Control value={form.skillreqd} type="text" placeholder="Enter Skill Required" onChange={handleInputSkillReqdChange} />
            </Form.Group>
            
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Card.Body>
    </Card>
  )
}