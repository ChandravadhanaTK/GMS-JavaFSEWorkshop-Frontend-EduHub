import React, {useState} from 'react'
import { Container, Nav, Tab, Row, Col } from 'react-bootstrap'
import ViewLearner from './ViewLearner'
import AddLearner from './AddLearner'

export const Learner = () => {
  const [learnerList] = useState([
    {
      id: 1,
      name: 'Demo 1'
    },
    {
      id: 2,
      name: 'Demo 2'
    },
    {
      id: 3,
      name: 'Demo 3'
    }
  ])
  return (
    <Container>
      <h1>Learner</h1>
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row>
          <Col sm={3}>
            <Nav variant="pills" className="flex-column">
              <Nav.Item>
                <Nav.Link eventKey="first">View Learner</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second">Add new Learner</Nav.Link>
              </Nav.Item>
              {/* <Nav.Item>
                <Nav.Link eventKey="third">Search Learner</Nav.Link>
              </Nav.Item> */}
            </Nav>
          </Col>
        <Col sm={9}>
          <Tab.Content>
          <Tab.Pane eventKey="first">
            <ViewLearner/>
          </Tab.Pane>
        <Tab.Pane eventKey="second">
          <AddLearner/>
        </Tab.Pane>
        {/* <Tab.Pane eventKey="third">
          <AddLearner/>
        </Tab.Pane> */}
        </Tab.Content> 
        </Col>
          
        </Row>
      </Tab.Container>
    </Container>
  )
}