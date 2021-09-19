import React from 'react';
import './Learner.css' ;
import { useHistory } from 'react-router-dom'
import { useState } from 'react';

import { Card, Button, Form, Container, Col, Row, Modal } from 'react-bootstrap'
import { addLearner } from '../../features/learner/learnerAPI';
import { getUserById } from '../../features/user/userAPI'

export const AddLearner = () => {
  const history = useHistory()
  const [requestid, setRequestId] = useState(); 
  const [userid, setUserId] = useState(); 
  const [username, setUserName] = useState(); 
  const [userrole, setUserRole] = useState(); 
  const [courseid, setCourseId] = useState(); 
  const [rmId, setRmId] = useState(); 
  const [approvalid, setApprovalId] = useState('001'); 
  const [approvalstatus, setApprovalStatus] = useState('Initiated'); 
  const [approvalstatusmessage, setApprovalStatusMessage] = useState('Initiated'); 
  const [assignmentid, setAssignmentId] = useState('000'); 
  const [assignmentstatus, setAssignmentStatus] = useState('00'); 
  const [assignmentstatusmessage, setAssignmentStatusMessage] = useState('NA'); 
  const [learnerdescription, setLearnerDescription] = useState('New Learner'); 
  const [learnerscore, setLearnerScore] = useState('0'); 
  const [addStatus, setaddStatus] = useState(false); 
  const [addClicked, setaddClicked] = useState(false); 
  const [showModal, setShowModal] = useState(false);
  const [validUser, setValidUser] = useState(false);

  const [showInvalidUserModal, setShowInvalidUserModal] = useState(false);
  

   
  const handleModalOpen = () => {
      setShowModal(true)
  }

  const handleModalClose = () => {
    setShowModal(false)
  }

  const handleInvalidUserModalClose = () => {

    setShowInvalidUserModal(false)
  }
  const handelRequestIdChange = (event) => {
    console.log(event.target.value)
    const inputRequestId = event.target.value
    setRequestId(inputRequestId)
    setaddClicked(false)
  }

  const handelUserIdChange = (event) => {
    console.log(event.target.value)
    const inputUserId = event.target.value
    setUserId(inputUserId)
    setValidUser(false)
    setUserName('')
    setaddClicked(false)
  }

  const handelRmIdChange = (event) => {
    console.log(event.target.value)
    const inputRmId = event.target.value
    setRmId(inputRmId)
    setaddClicked(false)
  }

  const handelRoleChange = (event) => {
    console.log(event.target.value)
    const inputRole = event.target.value
    setUserRole(inputRole)
    setaddClicked(false)
  }

  const handelCourseIdChange = (event) => {
    console.log(event.target.value)
    const inputCourse = event.target.value
    setCourseId(inputCourse)
    setaddClicked(false)
  }

  const handleValidateUser = async () => {
    console.log("Validate user clicked")
    console.log(userid )
      try {
        console.log(userid)
        const userData = await getUserById(userid)
        console.log(userData)
        setUserName(userData.firstName + ' ' + userData.secondName)
        setValidUser(true)
      } catch (error) {
        console.error(error)
        setShowInvalidUserModal(true)

  }
}

  
  const addNewLearner = async (event) => {
    setShowModal(false)
    event.preventDefault()

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
    setaddClicked(true)
    

      console.log('Add clicked')
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
      const ResStatus = await addLearner(learnerdata)
      // console.log('Record added successfully')

      if (ResStatus.data === "Successfull")
        {
          console.log('Add Successfull')
          setaddStatus(true)

        }
      else
      {
        console.log('Add Failed')
        setaddStatus(false)

      }
    
      
      
    } catch (error) {
      console.error(error)
      setaddStatus(false)
    }
  }

      return (
          <Card className="AddLearner">
            <Card.Body>
              <Card.Title>Add New Learner</Card.Title>
              {  addClicked &&
              <>
              { addStatus && <div className="alert alert-warning">Learner record added Successfully</div>}
              { !addStatus && <div className="alert alert-warning">Add Failed</div>}
              </>
              }
              <Card.Text>
              <Form>
            <Form.Group className="mb-3" > 
              <Container>
                <Form.Group as={Row} className="mb-3" controlId="requestid">
                    <Form.Label column sm="6">Request Id</Form.Label>
                    <Col sm="5">
                      <Form.Control type="text" placeholder="Enter Request Id" value={requestid} onChange={handelRequestIdChange} />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3" controlId="userid">
                    <Form.Label column sm="6">User Id</Form.Label>
                    <Col sm="3">
                      <Form.Control type="text" placeholder="Enter User Id"  value={userid} onChange={handelUserIdChange} />
                    </Col>
                    <Col sm="3">
                        <Button variant="primary" onClick={handleValidateUser}>Validate</Button>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3" controlId="username">
                    <Form.Label column sm="6">User Name</Form.Label>
                    <Col sm="5">
                      
                      <Form.Control type="text" value={username} readOnly/>
                      
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3" controlId="userrole">
                    <Form.Label column sm="6">Role</Form.Label>
                    <Col sm="5">
                      <Form.Select defaultValue="Select"  onChange={handelRoleChange}>
                        <option>Select</option>
                        <option value="Learner">Learner</option>
                        <option value="Mentor">Mentor</option>
                      </Form.Select>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3" controlId="courseid">
                    <Form.Label column sm="6">Course ID / Name</Form.Label>
                    <Col sm="5">
                      <Form.Select defaultValue="Select" onChange={handelCourseIdChange}>
                        <option>Select</option>
                        <option value="001">1. Core Java</option>
                        <option value="002">2. Advance Java</option>
                        <option value="003">3. React</option>
                      </Form.Select>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3" controlId="rmId">
                    <Form.Label column sm="6">Reporting manager</Form.Label>
                    <Col sm="5">
                      <Form.Control type="text" placeholder="Enter RM Id/Name"  value={rmId} onChange={handelRmIdChange} />
                    </Col>
                </Form.Group>                 
                <Form.Group as={Row} className="mb-3" controlId="approvalId">
                    <Form.Label column sm="6">Approval ID</Form.Label>
                    <Col sm="5">
                      <Form.Control type="text" value="01" readOnly/>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3" controlId="approvalStatus">
                    <Form.Label column sm="6">Approval Status</Form.Label>
                    <Col sm="5">
                      <Form.Control type="text" value="Initiated" readOnly/>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3" controlId="statusMessage">
                    <Form.Label column sm="6">Approval Status Message</Form.Label>
                    <Col sm="5">
                      <Form.Control type="text" value="Initiated" readOnly/>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3" controlId="assignmentId">
                    <Form.Label column sm="6">Assignment Id</Form.Label>
                    <Col sm="5">
                      <Form.Control type="text" value="000" readOnly/>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3" controlId="assignmentStatus">
                    <Form.Label column sm="6">Assignment Status</Form.Label>
                    <Col sm="5">
                      <Form.Control type="text" value="00" readOnly/>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3" controlId="assignmentStatusMessage">
                    <Form.Label column sm="6">Assignment Status Message</Form.Label>
                    <Col sm="5">
                      <Form.Control type="text" value="NA" readOnly/>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3" controlId="learnerDescription">
                    <Form.Label column sm="6">Learner Description</Form.Label>
                    <Col sm="5">
                      <Form.Control type="text" value="New Learner" readOnly/>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3" controlId="learnerScore">
                    <Form.Label column sm="6">Learner Score</Form.Label>
                    <Col sm="5">
                      <Form.Control type="text" value="0" readOnly/>
                    </Col>
                </Form.Group>
              </Container>
            </Form.Group>
            <div className="container">
            {/* <Button variant="primary" onClick={addNewLearner}> */}
            <Button variant="primary" disabled={!validUser} onClick={handleModalOpen}>
              Submit
            </Button>
            <Modal show={showModal} onHide={handleModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Learner</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure to Add new Learner in EduHub?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleModalClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={addNewLearner}>Add</Button>
        </Modal.Footer>
      </Modal>
      <Modal show={showInvalidUserModal} onHide={handleInvalidUserModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>User not found in EduHub</Modal.Title>
        </Modal.Header>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleInvalidUserModalClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
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
