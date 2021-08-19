import React, {Component} from 'react';
// import { Card, Form ,Row, Col, Button} from 'react-bootstrap'
// import { Dropdown } from 'react-bootstrap';
import './Learner.css' ;

import { Card, Button, Form, Container, Col, Row, Dropdown, ProgressBar } from 'react-bootstrap'
// import DropdownToggle from 'react-bootstrap/esm/DropdownToggle'

export default class AddLearner extends Component {
    render () { 
      return (
          <Card className="AddLearner">
            <Card.Body>
              <Card.Title>Add Learner</Card.Title>
              <Card.Text>
              <Form>
            <Form.Group className="mb-3" controlId="formBasicName"> 
              <Container>
                <Row>
                  <Col><font color="Green"><Form.Label>Request Identification Number</Form.Label></font></Col>
                  <Col><Form.Control type="requestId" placeholder="Enter Request Id" /></Col>
                </Row>
                <Row>
                  <Col><font color="Green"><Form.Label>User Identification Number </Form.Label></font></Col>
                  <Col><Form.Control type="userId" placeholder="Enter User/Learner Id" /></Col>
                </Row>
                <Row>
                  <Col><font color="Green"><Form.Label>Role</Form.Label></font></Col>
                  <Col><Dropdown>
                    <Dropdown.Toggle variant="Success" role="dropdown-basic">
                      Select Role of Learner
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-1">Learner</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">Mentor</Dropdown.Item>
                    </Dropdown.Menu>

                  </Dropdown>
                  </Col>
                </Row>
                <Row>
                  <Col><font color="Green"><Form.Label>Course Identification Number</Form.Label></font></Col>
                  <Col><Form.Control type="courseId" placeholder="Enter Course Id of Learner" /></Col>
                </Row>
                <Row>
                  <Col><font color="Green"><Form.Label>Reporting Manager Identification Number</Form.Label></font></Col>
                  <Col><Form.Control type="rmid" placeholder="Enter Reporting Manager Id of Learner" /></Col>
                </Row>
                <Row>
                  <Col><font color="Green"><Form.Label>Approval Identification Number</Form.Label></font></Col>
                  <Col><Form.Control type="approvalId" placeholder="Enter Approval Id of Learner" /></Col>
                </Row>
                <Row>
                  <Col><font color="Green"><Form.Label>Approval Status</Form.Label></font></Col>
                  <Col><Dropdown>
                    <Dropdown.Toggle variant="Success" approvalStatus="dropdown-basic">
                      Select Approval Status of Learner
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-1">Initiated</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">Approved</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">Rejected</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                  </Col>
                </Row>
                <Row>
                  <Col><font color="Green"><Form.Label>Assignment Identification Number</Form.Label></font></Col>
                  <Col><Form.Control type="assignmentId" placeholder="Enter Assignment Id of Learner" /></Col>
                </Row>
                <Row>
                  <Col><font color="Green"><Form.Label>Assignment Status</Form.Label></font></Col>
                  <Col><Dropdown>
                    <Dropdown.Toggle variant="Success" assignmentStatus="dropdown-basic">
                      Select Assignment Status of Learner
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-1">Initiated</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">Approved</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">Rejected</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                  </Col>
                </Row>
                <Row>
                  <Col><font color="Green"><Form.Label>Assignment Status Message</Form.Label></font></Col>
                  <Col><Form.Control type="assignmentStatusMessage" placeholder="Enter Assignment Status Message of Learner" /></Col>
                </Row>
                <Row>
                  <Col><font color="Green"><Form.Label>Learner Description</Form.Label></font></Col>
                  <Col><Form.Control type="learnerDescription" placeholder="Enter Learner Description" /></Col>
                </Row>
                <Row>
                  <Col><font color="Green"><Form.Label>Learner Score</Form.Label></font></Col>
                  <Col><Form.Control type="learnerScore" placeholder="Enter Learner Score" /></Col>
                </Row>
              </Container>
              <Form.Text className="text-muted">
                Learner stuff :)
              </Form.Text>
            </Form.Group>
            <div className ="d-grid">
            <Button variant="primary" size="lg" onClick="addNewLearner">
              Submit
            </Button>
            </div>
          </Form>
                {/* <button onClick={this.addNewLearner}>
                    Add learner
                </button> */}
              
              </Card.Text>
            </Card.Body>
          </Card>
 
  )
}

addNewLearner(){
   return (
    console.log('Add clicked')
    //  <h1>
    //  <div className="ViewLearnerList"> 
    //    display details here      
    //  </div>  
    //  </h1>

  

  )
  
}

validateUser(){
  return (
    console.log('Validate user')
    //  <h1>
    //  <div className="ViewLearnerList"> 
    //    display details here      
    //  </div>  
    //  </h1>

  

  )

}
}