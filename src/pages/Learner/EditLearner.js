import React from 'react';
import './Learner.css' ;
import { useHistory } from 'react-router-dom'
import { useState } from 'react';

import { Card, Button, Form, Container, Col, Row } from 'react-bootstrap'
import { updateLearner } from '../../features/learner/learnerAPI';

export const EditLearner = (props) => {
  // console.log(`inside Edit Learner : ${props}`)
  console.log(props)
  
  const history = useHistory()
  console.log(history.location.state)
  const [requestid, setRequestId] = useState(history.location.state.requestId); 
  const [userid, setUserId] = useState(history.location.state.userId); 
  const [userrole, setUserRole] = useState(history.location.state.role); 
  const [courseid, setCourseId] = useState(history.location.state.courseId); 
  const [rmId, setRmId] = useState(history.location.state.rmid); 
  const [approvalid, setApprovalId] = useState(history.location.state.approvalId); 
  const [approvalstatus, setApprovalStatus] = useState(history.location.state.approvalStatus); 
  const [approvalstatusmessage, setApprovalStatusMessage] = useState(history.location.state.statusMessage); 
  const [assignmentid, setAssignmentId] = useState(history.location.state.assignmentId); 
  const [assignmentstatus, setAssignmentStatus] = useState(history.location.state.assignmentStatus); 
  const [assignmentstatusmessage, setAssignmentStatusMessage] = useState(history.location.state.assignmentStatusMessage); 
  const [learnerdescription, setLearnerDescription] = useState(history.location.state.learnerDescription); 
  const [learnerscore, setLearnerScore] = useState(history.location.state.learnerScore); 
  const [courseidtext, setCourseIdText] = useState(); 

  
  const courseIdvalue = () => {
    if (courseid === 1)
      { setCourseIdText("1. Core Java")}
    else
    if (courseid === 2)
    { setCourseIdText("2. Advance Java")}
    else
    if (courseid === 3)
      { setCourseIdText("3. React")}  
    
  }



  // option value="1">1. Core Java</option>
  //                       <option value="2">2. Advance Java</option>
  //                       <option value="3">3. React</option>

   const handelRmIdChange = (event) => {
    console.log(event.target.value)
    const updatedvalue = event.target.value
    setRmId(updatedvalue)
  }

  const handelRoleChange = (event) => {
    console.log(event.target.value)
    const updatedvalue = event.target.value
    setUserRole(updatedvalue)
  }

  const handelCourseIdChange = (event) => {
    console.log(event.target.value)
    const updatedvalue = event.target.value
    setCourseId(updatedvalue)
  }

  const handelApprovalIdChange = (event) => {
    console.log(event.target.value)
    const updatedvalue = event.target.value
    setApprovalId(updatedvalue)
  }

  const handelApprovalStatusChange = (event) => {
    console.log(event.target.value)
    const updatedvalue = event.target.value
    setApprovalStatus(updatedvalue)
  }

  const handelApprovalStatusMessageChange = (event) => {
    console.log(event.target.value)
    const updatedvalue = event.target.value
    setApprovalStatusMessage(updatedvalue)
  }

  const handelAssignmentIdChange = (event) => {
    console.log(event.target.value)
    const updatedvalue = event.target.value
    setAssignmentId(updatedvalue)
  }

  const handelAssignmentStatusChange = (event) => {
    console.log(event.target.value)
    const updatedvalue = event.target.value
    setAssignmentStatus(updatedvalue)
  }

  const handelAssignmentStatusMsgChange = (event) => {
    console.log(event.target.value)
    const updatedvalue = event.target.value
    setAssignmentStatusMessage(updatedvalue)
  }
  
  const handelLearnerDescChange = (event) => {
    console.log(event.target.value)
    const updatedvalue = event.target.value
    setLearnerDescription(updatedvalue)
  }

  const handelLearnetScoreChange = (event) => {
    console.log(event.target.value)
    const updatedvalue = event.target.value
    setLearnerScore(updatedvalue)
  }

  const editLearner = async (event) => {

    // event.preventDefault()
    const learnerdata = {  
                      
      requestId          : requestid,
      userId             : userid,
      role               : userrole,
      courseId           : courseid,
      rmid               : rmId,
      approvalId         : approvalid,
      approvalStatus     : approvalstatus,
      statusMessage      : approvalstatusmessage,
      assignmentId       :  assignmentid,
      assignmentStatus   :  assignmentstatus,
      assignmentStatusMessage  :   assignmentstatusmessage,
      learnerDescription  :  learnerdescription,
      learnerScore       :  learnerscore
  
     
    };

    console.log(learnerdata);
    console.log('before try');
    

      console.log('Update clicked')
      // console.log(`Request Id: ${requestId}`)
      // console.log(`User Id: ${userId}`)
      // console.log(`role: ${userRole}`)
      // console.log(`COurse Id: ${courseId}`)
      // console.log(`RM Id: ${rmId}`)
      // console.log(`Approval ID ${approvalId}`)
      // console.log(`Approval Status: ${approvalStatus}`)
      // console.log(`Approval Status Message: ${approvalStatusMessage}`)
      // console.log(`Assignment Id: ${assignmentId}`)
      // console.log(`Assignment Status: ${assignmentStatus}`)
      // console.log(`Assignment Status Message Id: ${assignmentStatusMessage}`)
      // console.log(`Learner Desc: ${learnerDescription}`)
      // console.log(`Learner Score Id: ${learnerScore}`)
    // event.preventDefault()

    try {
      await updateLearner(learnerdata)
      // console.log('Record added successfully')
      
    } catch (error) {
      console.error(error)
    }
  }

      return (
         
          <Card className="AddLearner">
            <Card.Body>
              <Card.Title>Update Learner</Card.Title>
              <Card.Text>
              <Form>
            <Form.Group className="mb-3" > 
              <Container>
                <Form.Group as={Row} className="mb-3" controlId="requestid">
                    <Form.Label column sm="6">Request Id</Form.Label>
                    <Col sm="5">
                      <Form.Control type="text" value={requestid} readOnly />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3" controlId="userid">
                    <Form.Label column sm="6">User Id</Form.Label>
                    <Col sm="5">
                      <Form.Control type="text"  value={userid} readOnly />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3" controlId="userrole">
                    <Form.Label column sm="6">Role</Form.Label>
                    <Col sm="5">
                      <Form.Control type="text" value={userrole} readOnly/>
                        {/* <option>Select</option>
                        <option value="Learner">Learner</option>
                        <option value="Mentor">Mentor</option>
                      </Form.Select> */}
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3" controlId="courseid">
                    <Form.Label column sm="6">Course ID / Name</Form.Label>
                    <Col sm="5">
                     
                      {courseid === 1 && <Form.Control value="1. Core Java" readOnly/>}
                      {courseid === 2 && <Form.Control value="2. Advance Java" readOnly/>}
                      {courseid === 3 && <Form.Control value="3. React" readOnly/>}
                      {/* {courseid !== [1,2,3] && <Form.Control value={courseid} readOnly/>} */}
                        {/* <option>Select</option>
                        <option value="1">1. Core Java</option>
                        <option value="2">2. Advance Java</option>
                        <option value="3">3. React</option> */}
                      {/* </Form.Select> */}
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3" controlId="rmId">
                    <Form.Label column sm="6">Reporting manager</Form.Label>
                    <Col sm="5">
                      <Form.Control type="text" value={rmId} readOnly />
                    </Col>
                </Form.Group>                 
                <Form.Group as={Row} className="mb-3" controlId="approvalid">
                    <Form.Label column sm="6">Approval ID</Form.Label>
                    <Col sm="5">
                      <Form.Control type="text" value={approvalid}  onChange={handelApprovalIdChange} />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3" controlId="approvalstatus">
                    <Form.Label column sm="6">Approval Status</Form.Label>
                    <Col sm="5">
                      <Form.Control type="text" value={approvalstatus} onChange={handelApprovalStatusChange} />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3" controlId="approvalstatusmessage">
                    <Form.Label column sm="6">Approval Status Message</Form.Label>
                    <Col sm="5">
                      <Form.Control type="text" value={approvalstatusmessage} onChange={handelApprovalStatusMessageChange}/>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3" controlId="assignmentid">
                    <Form.Label column sm="6">Assignment Id</Form.Label>
                    <Col sm="5">
                      <Form.Control type="text" value={assignmentid} onChange={handelAssignmentIdChange}/>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3" controlId="assignmentstatus">
                    <Form.Label column sm="6">Assignment Status</Form.Label>
                    <Col sm="5">
                      <Form.Control type="text" value={assignmentstatus}  onChange={handelAssignmentStatusChange} />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3" controlId="assignmentstatusmessage">
                    <Form.Label column sm="6">Assignment Status Message</Form.Label>
                    <Col sm="5">
                      <Form.Control type="text" value={assignmentstatusmessage} onChange={handelAssignmentStatusMsgChange}/>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3" controlId="learnerdescription">
                    <Form.Label column sm="6">Learner Description</Form.Label>
                    <Col sm="5">
                      <Form.Control type="text" value={learnerdescription}  onChange={handelLearnerDescChange}/>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3" controlId="learnerscore">
                    <Form.Label column sm="6">Learner Score</Form.Label>
                    <Col sm="5">
                      <Form.Control type="text" value={learnerscore} onChange={handelLearnetScoreChange}/>
                    </Col>
                </Form.Group>
              </Container>
            </Form.Group>
            <div className ="d-grid">
            <Button variant="primary" onClick={editLearner}>
              Update
            </Button>
            </div>
          </Form>
                
              
              </Card.Text>
            </Card.Body>
          </Card>
 
  )
}

// addNewLearner(){
//    return (
//     console.log('Add clicked')
//     //  <h1>
//     //  <div className="ViewLearnerList"> 
//     //    display details here      
//     //  </div>  
//     //  </h1>

  

//   )
  
// }

// validateUser(){
//   return (
//     console.log('Validate user')
//     //  <h1>
//     //  <div className="ViewLearnerList"> 
//     //    display details here      
//     //  </div>  
//     //  </h1>

  

//   )

// }
