import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Card, Button, Form } from 'react-bootstrap'
import { addUser } from '../../features/user/userAPI'

export const AddUser = () => {
  const history = useHistory()
  const [form, setForm] = useState({
    id: null, 
    userName: '',
    password: '', 
	firstName: '', 
	secondName: '', 
	emailId: '', 
	mobile: '', 
	location: '', 
	designation: '', 
    experience: null, 
	primarySkills: '', 
	secondarySkills: '', 
	role: '', 
    createdOn: '', 
    lastLogin: ''
  })


  const handleIdChange = (e) => {
    setForm({
      ...form,
      id: e.target.value
    })
  }
 
  const handleUserNameChange = (e) => {
    setForm({
      ...form,
      userName: e.target.value
    })
  }

  const handlePasswordChange = (e) => {
    setForm({
      ...form,
      password: e.target.value
    })
  }

    const handleFirstNameChange = (e) => {
    setForm({
      ...form,
      firstName: e.target.value
    })
  }

  const handleSecondNameChange = (e) => {
    setForm({
      ...form,
      secondName: e.target.value
    })
  }

  const handleEmailIdChange = (e) => {
    setForm({
      ...form,
      emailId: e.target.value
    })
  }

  const handleMobileChange = (e) => {
    setForm({
      ...form,
      mobile: e.target.value
    })
  }

  const handleLocationChange = (e) => {
    setForm({
      ...form,
      location: e.target.value
    })
  }


  const handleDesignationChange = (e) => {
    setForm({
      ...form,
      designation: e.target.value
    })
  }

  const handleExperienceChange = (e) => {
    setForm({
      ...form,
      experience: e.target.value
    })
  }

  const handlePrimarySkillsChange = (e) => {
    setForm({
      ...form,
      primarySkills: e.target.value
    })
  }

  const handleSecondarySkillsChange = (e) => {
    setForm({
      ...form,
      secondarySkills: e.target.value
    })
  }

  const handleRoleChange = (e) => {
    setForm({
      ...form,
      role: e.target.value
    })
  }

  const handleCreatedOnChange = (e) => {
    setForm({
      ...form,
      createdOn: e.target.value
    })
  }

  const handleLastLoginChange = (e) => {
    setForm({
      ...form,
      lastLogin: e.target.value
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

   // if (!Number(experience)) {
   //     alert("experience must be a number");
   //   }

    try {
      await addUser(form)

      history.push('/user/all')
    } catch (error) {
      console.error(error)
    }
  }
  return (
    <Card>
      <Card.Body>
        <Card.Title>Add User</Card.Title>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicUserId">
            <Form.Label>Id</Form.Label>
            <Form.Control value={form.id} type="text" placeholder="Enter User Id" onChange={handleIdChange} />
            <Form.Text className="text-muted">
              Add User data 
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicUserName">
            <Form.Label>User Name</Form.Label>
            <Form.Control value={form.userName} type="text" placeholder="Enter Username" size="sm" onChange={handleUserNameChange} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control value={form.password} type="text" placeholder="Enter Password" size="sm" onChange={handlePasswordChange} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicFirstName">
            <Form.Label>First Name</Form.Label>
            <Form.Control value={form.firstName} type="text" placeholder="Enter First Name" size="sm" onChange={handleFirstNameChange} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicSecondName">
            <Form.Label>Second Name</Form.Label>
            <Form.Control value={form.secondName} type="text" placeholder="Enter Second Name" size="sm" onChange={handleSecondNameChange} />
          </Form.Group>          
          <Form.Group className="mb-3" controlId="formBasicEmailId">
            <Form.Label>EmailId</Form.Label>
            <Form.Control value={form.emailId} type="text" placeholder="Enter EmailId" size="sm" onChange={handleEmailIdChange} />
          </Form.Group>            
          <Form.Group className="mb-3" controlId="formBasicMobile">
            <Form.Label>Mobile</Form.Label>
            <Form.Control value={form.mobile} type="text" placeholder="Enter Mobile" size="sm" onChange={handleMobileChange} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicLocation">
            <Form.Label>Location</Form.Label>
            <Form.Control value={form.location} type="text" placeholder="Enter Location" size="sm" onChange={handleLocationChange} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicDesignation">
            <Form.Label>Designation</Form.Label>
            <Form.Control value={form.designation} type="text" placeholder="Enter Designation" size="sm" onChange={handleDesignationChange} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicExperience">
            <Form.Label>Experience</Form.Label>
            <Form.Control value={form.experience} type="text" placeholder="Enter Experience" size="sm" onChange={handleExperienceChange} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPrimarySkills">
            <Form.Label>PrimarySkills</Form.Label>
            <Form.Control value={form.primarySkills} type="text" placeholder="Enter PrimarySkills" size="sm" onChange={handlePrimarySkillsChange} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicSecondarySkills">
            <Form.Label>SecondarySkills</Form.Label>
            <Form.Control value={form.secondarySkills} type="text" placeholder="Enter SecondarySkills" size="sm" onChange={handleSecondarySkillsChange} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicRole">
            <Form.Label>Role</Form.Label>
            <Form.Control value={form.role} type="text" placeholder="Enter Role" size="sm" onChange={handleRoleChange} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCreatedOn">
            <Form.Label>CreatedOn</Form.Label>
            <Form.Control value={form.createdOn} type="datetime-local" placeholder="Enter CreatedOn" size="sm" onChange={handleCreatedOnChange} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicLastLogin">
            <Form.Label>LastLogin</Form.Label>
            <Form.Control value={form.lastLogin} type="datetime-local" placeholder="Enter LastLogin" size="sm" onChange={handleLastLoginChange} />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Card.Body>
    </Card>
  )
}