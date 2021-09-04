import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { Card, Button, Form } from 'react-bootstrap'

import { addUser } from '../../features/user/userSlice'

export const AddUser = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const [form, setForm] = useState({
        userName: '',
        password: '',
        firstName: '',
        secondName : '',
        emailId: '',
        mobile:'',
        location: '',
        designation: '',
        experience: '',
        primarySkills: '',
        secondarySkills: '',
        role: '',
        createdOn: '',
        lastLogin:''
  })

  const handleInputUserNameChange = (event) => {
    const updatedValue = event.target.value
    setForm({ userName: updatedValue })
  }

  const handleInputPasswordChange = (event) => {
    const updatedValue = event.target.value
    setForm({ password: updatedValue })
  }

  const handleInputFirstNameChange = (event) => {
    const updatedValue = event.target.value
    setForm({ firstName: updatedValue })
  }

  const handleInputSecondNameChange = (event) => {
    const updatedValue = event.target.value
    setForm({ secondName: updatedValue })
  }

  const handleInputEmailIDChange = (event) => {
    const updatedValue = event.target.value
    setForm({ emailId: updatedValue })
  }

  const handleInputMobileChange = (event) => {
    const updatedValue = event.target.value
    setForm({ mobile: updatedValue })
  }

  const handleInputLocationChange = (event) => {
    const updatedValue = event.target.value
    setForm({ location: updatedValue })
  }

  const handleInputDesignationChange = (event) => {
    const updatedValue = event.target.value
    setForm({ designation: updatedValue })
  }

  const handleInputExperienceChange = (event) => {
    const updatedValue = event.target.value
    setForm({ experience: updatedValue })
  }

  const handleInputPrimarySkillsChange = (event) => {
    const updatedValue = event.target.value
    setForm({ primarySkills: updatedValue })
  }

  const handleInputSecondarySkillsChange = (event) => {
    const updatedValue = event.target.value
    setForm({ secondarySkills: updatedValue })
  }

  const handleInputRoleChange = (event) => {
    const updatedValue = event.target.value
    setForm({ role: updatedValue })
  }

  const handleInputCreatedOnChange = (event) => {
    const updatedValue = event.target.value
    setForm({ createdOn: updatedValue })
  }


  const handleInputLastLoginChange = (event) => {
    const updatedValue = event.target.value
    setForm({ lastLogin: updatedValue })
  }

  
   const handleSubmit = (event) => {
    event.preventDefault()
    dispatch(addUser(form))

    history.push('/user/all')
  }
  return (
    <Card>
      <Card.Body>
        <Card.Title>Add User</Card.Title>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>User Name</Form.Label>
            <Form.Control value={form.userName} type="text" placeholder="Enter Username" size="sm" onChange={handleInputUserNameChange} />
            <Form.Text className="text-muted">
              User stuff :)
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control value={form.password} type="text" placeholder="Enter Password" size="sm" onChange={handleInputPasswordChange} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicFirstName">
            <Form.Label>FirstName</Form.Label>
            <Form.Control value={form.firstName} type="text" placeholder="Enter FirstName" size="sm" onChange={handleInputFirstNameChange} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicSecondName">
            <Form.Label>SecondName</Form.Label>
            <Form.Control value={form.secondName} type="text" placeholder="Enter SecondName" size="sm" onChange={handleInputSecondNameChange} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmailid">
            <Form.Label>EmailID</Form.Label>
            <Form.Control value={form.emailId} type="text" placeholder="Enter EmailID" size="sm" onChange={handleInputEmailIDChange} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicMobile">
            <Form.Label>Mobile</Form.Label>
            <Form.Control value={form.mobile} type="text" placeholder="Enter Mobile" size="sm" onChange={handleInputMobileChange} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicLocation">
            <Form.Label>Location</Form.Label>
            <Form.Control value={form.location} type="text" placeholder="Enter Location" size="sm" onChange={handleInputLocationChange} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicDesignation">
            <Form.Label>Designation</Form.Label>
            <Form.Control value={form.designation} type="text" placeholder="Enter Designation" size="sm" onChange={handleInputDesignationChange} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicExperience">
            <Form.Label>Experience</Form.Label>
            <Form.Control value={form.experience} type="text" placeholder="Enter Experience" size="sm" onChange={handleInputExperienceChange} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPrimarySkills">
            <Form.Label>PrimarySkills</Form.Label>
            <Form.Control value={form.primarySkills} type="text" placeholder="Enter PrimarySkills" size="sm" onChange={handleInputPrimarySkillsChange} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicSecondarySkills">
            <Form.Label>SecondarySkills</Form.Label>
            <Form.Control value={form.secondarySkills} type="text" placeholder="Enter SecondarySkills" size="sm" onChange={handleInputSecondarySkillsChange} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicRole">
            <Form.Label>Role</Form.Label>
            <Form.Control value={form.role} type="text" placeholder="Enter Role" size="sm" onChange={handleInputRoleChange} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicCreatedOn">
            <Form.Label>CreatedOn</Form.Label>
            <Form.Control value={form.CreatedOn} type="datetime-local" placeholder="Enter CreatedOn" size="sm" onChange={handleInputCreatedOnChange} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicLastLogin">
            <Form.Label>LastLogin</Form.Label>
            <Form.Control value={form.lastLogin} type="datetime-local" placeholder="Enter LastLogin"size="sm" onChange={handleInputLastLoginChange} />
          </Form.Group>
          
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Card.Body>
    </Card>
  )
}