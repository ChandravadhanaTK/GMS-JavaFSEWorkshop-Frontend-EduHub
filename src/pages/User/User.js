import React from 'react'
import { Link, useRouteMatch } from 'react-router-dom'
import { Container, Tab, Row, Col, Nav } from 'react-bootstrap'

import { UserRoutes } from '../../routes/userRoutes'

export const User = () => {
  let { path } = useRouteMatch()
  console.log(useRouteMatch());

  console.log(path)
  return (
    <Container>
      <h1>User</h1>
      <Tab.Container id="left-tabs-example" defaultActiveKey={`${path}/all`} activeKey={`${path}/all`}>
        <Row>
          <Col sm={3}>
            <Nav variant="pills" className="flex-column">
              <Nav.Item>
                <Nav.Link as={Link} to={`${path}/all`}>View all</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={Link} to={`${path}/add`}>Add User</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={9}>
            <UserRoutes path={path} />
          </Col>
        </Row>
      </Tab.Container>
    </Container>
  )
}