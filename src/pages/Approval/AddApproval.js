import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Card, Button, Form } from 'react-bootstrap'
import { addApprovalAPI } from '../../features/Approval/ApprovalAPI'

export const AddApproval = () => {
  const history = useHistory()
  const [form, setForm] = useState({
    name: ''
  })

  let requestorId = '';
  let reportingManagerId = '';
  let approvalStatusMessage = '';

  const requestorIdHandler = (event) => {
    requestorId = event.target.value;
    console.log('requestorId = ', requestorId);
  }
  const reportingManagerIdHandler = (event) => {
    reportingManagerId = event.target.value;
    console.log('reportingManagerId = ', reportingManagerId);
  }

  const approvalStatusMessageHandler  = (event) => {
    approvalStatusMessage = event.target.value;
    console.log('approvalStatusMessage = ', approvalStatusMessage);
  }

  // const handleInputNameChange = (event) => {
  //   const updatedValue = event.target.value
  //   setForm({ name: updatedValue })
  // }

  // const handleInputSkillChange = (event) => {
  //   const updatedValue = event.target.value
  //   setForm({ approveringSkill: updatedValue })
  // }

  // const handleInputHoursChange = (event) => {
  //   const updatedValue = event.target.value
  //   setForm({ approveredHours: updatedValue })
  // }

  // const handleInputRatingChange = (event) => {
  //   const updatedValue = event.target.value
  //   setForm({ approveredRating: updatedValue })
  // }

  // const handleAboutapproverChange = (event) => {
  //   const updatedValue = event.target.value
  //   setForm({ aboutapprover: updatedValue })
  // }


  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log('Button Clicked');
    const newApproval = {
      approvalId: Math.floor(Math.random() * 10001),
      requestId: parseInt(requestorId),
      rmId: parseInt(reportingManagerId),
      approvalStatus:"Initiated",
      approvalStatusMessage: approvalStatusMessage.toString(), 
      // createdOn: new Date().toString(), 
      // lastUpdatedOn: new Date().toString()
    };

    console.log('new Approval request = ', newApproval);

    try{
      await addApprovalAPI(newApproval)
      history.push('/approval/all')
     }catch(error){
      console.log(error)
    }
  }

  return (
    <Card>
      <Card.Body>
        <Card.Title>Add approval</Card.Title>
        <Form onSubmit={handleSubmit}>
          {/* <Form.Group className="mb-8" controlId="formBasicName" size="sm">
            <Form.Label>Approval id</Form.Label>
            <Form.Control value={form.name} type="text" placeholder="Enter id" size="sm" onChange={handleInputNameChange} />
            <Form.Text className="text-muted">
              approver stuff :)
            </Form.Text>
          </Form.Group> */}
          <Form.Group className="mb-3" controlId="formBasicSkill">
            <Form.Label>Requester ID </Form.Label>
            <Form.Control value={form.skill} type="text" placeholder="Enter requester ID" size="sm" onChange={requestorIdHandler} required='true' />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicSkill">
            <Form.Label>Reporting Manager ID </Form.Label>
            <Form.Control value={form.skill} type="text" placeholder="Enter Reporting manager  ID" size="sm" onChange={reportingManagerIdHandler} required='true'/>
          </Form.Group>
          {/* <Form.Group className="mb-3" controlId="formBasicSkill">
            <Form.Label>Approval Status </Form.Label>
            <Form.Control value={form.skill} type="text" placeholder="Enter Approval Status" size="sm" onChange={handleInputSkillChange} />
          </Form.Group> */}
          <Form.Group className="mb-3" controlId="formBasicSkill">
            <Form.Label>Approval Status Message </Form.Label>
            <Form.Control value={form.skill} type="text" placeholder="Enter Approval status message" size="sm" onChange={approvalStatusMessageHandler} required='true'/>
          </Form.Group>
          {/* <Form.Group className="mb-3" controlId="formBasicStartDateTime">
            <Form.Label>Create On date / Time</Form.Label>
            <Form.Control value={form.startDateTime} type="date" placeholder="Enter skill" size="sm" onChange={handleInputSkillChange} />
          </Form.Group> */}
          {/* <Form.Group className="mb-3" controlId="formBasicEndDateTime">
            <Form.Label>Last Updated On Date / Time</Form.Label>
            <Form.Control value={form.endDateTime} type="date" placeholder="Enter skill" size="sm" onChange={handleInputSkillChange} />
          </Form.Group>
            */}
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Card.Body>
    </Card>
  )
}