import { useState, useEffect } from 'react'
import { useParams, useHistory } from 'react-router'
import { Card, Button, Form } from 'react-bootstrap'

import { getUserById } from '../../features/user/userAPI'

export const ViewUser = () => {
  console.log('entered view user page')    
  const { id } = useParams()
  const history = useHistory()
  const [form, setForm] = useState({
    id: '', 
    userName: '',
    password: '', 
	firstName: '', 
	secondName: '', 
	emailId: '', 
	mobile: '', 
	location: '', 
	designation: '', 
    experience: '', 
	primarySkills: '', 
	secondarySkills: '', 
	role: '', 
    createdOn: '', 
    lastLogin: ''
  })

  useEffect(async () => {
    try {
      console.log(id)
      const userData = await getUserById(id)
      console.log(userData)

      setForm(userData)
    } catch (error) {
      console.error(error)
    }
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
      try {
              history.push('/user/all')
    } catch (error) {
      console.error(error)
    }
  }
  return (
    <Card>
      <Card.Body>
        <Card.Title>View User</Card.Title>
        <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicUserId">
            <Form.Label>Id</Form.Label>
            <Form.Control value={form.id} type="text"  readOnly />
            <Form.Text className="text-muted">
              View User data (Read only)
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicUserName">
            <Form.Label>User Name</Form.Label>
            <Form.Control value={form.userName} type="text" size="sm" readOnly/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control value={form.password} type="text" size="sm" readOnly />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicFirstName">
            <Form.Label>First Name</Form.Label>
            <Form.Control value={form.firstName} type="text" size="sm" readOnly />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicSecondName">
            <Form.Label>Second Name</Form.Label>
            <Form.Control value={form.secondName} type="text" size="sm" readOnly />
          </Form.Group>          
          <Form.Group className="mb-3" controlId="formBasicEmailId">
            <Form.Label>EmailId</Form.Label>
            <Form.Control value={form.emailId} type="text" size="sm" readOnly />
          </Form.Group>            
          <Form.Group className="mb-3" controlId="formBasicMobile">
            <Form.Label>Mobile</Form.Label>
            <Form.Control value={form.mobile} type="text" size="sm" readOnly />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicLocation">
            <Form.Label>Location</Form.Label>
            <Form.Control value={form.location} type="text" size="sm" readOnly />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicDesignation">
            <Form.Label>Designation</Form.Label>
            <Form.Control value={form.designation} type="text" size="sm" readOnly />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicExperience">
            <Form.Label>Experience</Form.Label>
            <Form.Control value={form.experience} type="text" size="sm" readOnly />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPrimarySkills">
            <Form.Label>PrimarySkills</Form.Label>
            <Form.Control value={form.primarySkills} type="text" size="sm" readOnly />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicSecondarySkills">
            <Form.Label>SecondarySkills</Form.Label>
            <Form.Control value={form.secondarySkills} type="text" size="sm" readOnly />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicRole">
            <Form.Label>Role</Form.Label>
            <Form.Control value={form.role} type="text" size="sm" readOnly />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCreatedOn">
            <Form.Label>CreatedOn</Form.Label>
            <Form.Control value={form.createdOn} type="text"  size="sm" readOnly />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicLastLogin">
            <Form.Label>LastLogin</Form.Label>
            <Form.Control value={form.lastLogin} type="text"  size="sm" readOnly />
          </Form.Group>
          <Button variant="primary" type="submit">
            Back
          </Button>
        </Form>
      </Card.Body>
    </Card>
  )
}