import React from 'react'
import { Link, useRouteMatch } from 'react-router-dom'
import { Container, Tab, Row, Col, Nav } from 'react-bootstrap'
import { Route, Switch } from 'react-router'

//import { MentorRoutes } from '../../routes/mentorRoutes'
import { ViewAllMentor } from './ViewAllMentor'
import { AddMentor } from './AddMentor'
import { EditMentor } from './EditMentor'

export const Mentor = () => {
  let { path } = useRouteMatch()
  console.log(path)
  return (
    <Container>
      <h1>Mentor</h1>
      <Tab.Container id="left-tabs-example" defaultActiveKey={`${path}/all`} activeKey={`${path}/all`}>
        <Row>
          <Col sm={3}>
            <Nav variant="pills" className="flex-column">
              <Nav.Item>
                <Nav.Link as={Link} to={`${path}/all`}>View all</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={Link} to={`${path}/add`}>Add Mentor</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={Link} to={`${path}/edit`}>Edit Mentor</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={9}>
            {/* <MentorRoutes path={path} /> */}
            <Switch>
              <Route path="/mentor/all" exact component={ViewAllMentor} />
              <Route path="/mentor/add" exact component={AddMentor} />
              <Route path="/mentor/edit" exact component={EditMentor} />
            </Switch>
          </Col>
        </Row>
      </Tab.Container>
    </Container>
  )
}