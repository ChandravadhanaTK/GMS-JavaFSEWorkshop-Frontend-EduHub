import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { Card, Button, Form } from 'react-bootstrap'

export const EditCourse = () => {
       const dispatch = useDispatch()
    const history = useHistory()
    const [form, setForm] = useState({
      name: ''
    })
  
    const handleInputCourseNameChange = (event) => {
      const updatedValue = event.target.value
      setForm({ coursename: updatedValue })
    }
  
    const handleInputCourseDescChange = (event) => {
      const updatedValue = event.target.value
      setForm({ courseDesc: updatedValue })
    }
  
    const handleInputSkillReqdChange = (event) => {
      const updatedValue = event.target.value
      setForm({ skillReqd: updatedValue })
    }
  
  
    const handleSubmit = (event) => {
      event.preventDefault()
      dispatch(EditCourse(form))
  
      history.push('/add/all')
    }
  return (
    <Card>
      <Card.Body>
        <Card.Title>Edit Course</Card.Title>
        <Card.Text>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicName" size="sm">
            <Form.Label>Course Name</Form.Label>
            <Form.Control value={form.coursename} type="text" placeholder="Enter Course name" size="sm" onChange={handleInputCourseNameChange} />
            {/* <Form.Text className="text-muted">
              Course stuff :)
            </Form.Text> */}
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCourseDesc">
            <Form.Label>Course Description</Form.Label>
            <Form.Control value={form.coursedesc} type="text" placeholder="Enter Course Desc" size="sm" onChange={handleInputCourseDescChange} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicSkillReqd">
            <Form.Label>Skill Required</Form.Label>
            <Form.Control value={form.skillReqd} type="text" placeholder="Enter Skill Required" size="sm" onChange={handleInputSkillReqdChange} />
          </Form.Group>
          
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
        </Card.Text>
      </Card.Body>
    </Card>
  )
}