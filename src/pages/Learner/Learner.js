import React from 'react'
import { Container, Nav, Tab, Row, Col } from 'react-bootstrap'
// import ViewLearner from './ViewLearner'
// import AddLearner from './AddLearner'
// import EditLearner from './EditLearner'
import { Link, useRouteMatch } from 'react-router-dom'


import { LearnerRoutes } from '../../routes/LearnerRoutes'



export const Learner = () => {
  let { path } = useRouteMatch()
  console.log(useRouteMatch());

  console.log(path)
  return (
    <Container>
      <h1>Learner</h1>
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row>
          <Col sm={3}>
            <Nav variant="pills" className="flex-column">
              <Nav.Item>
                <Nav.Link as={Link} to={`${path}/view`}>View Learner</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={Link} to={`${path}/add`}>Add new Learner</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={Link} to={`${path}/futureUpdates`}>Future Updates </Nav.Link>
              </Nav.Item>

              
              {/* <Nav.Item>
                <Nav.Link as={Link} to={`${path}/edit`}>Edit Learner</Nav.Link>
              </Nav.Item> */}
            </Nav>
          </Col>
        <Col sm={9}>
        {/* <Switch>
              <Route path="/learner/view" exact component={ViewLearner} />
              <Route path="/learner/add" exact component={AddLearner} />
              <Route path="/learner/edit" exact component={EditLearner} />
            </Switch> */}

          <Col sm={9}>
            <LearnerRoutes path={path} />
          </Col>
        </Col>
          
        </Row>
      </Tab.Container>
    </Container>
  )
}