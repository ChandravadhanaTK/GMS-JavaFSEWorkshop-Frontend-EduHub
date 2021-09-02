import React from 'react'
import { Link, useRouteMatch } from 'react-router-dom'
import { Container, Tab, Row, Col, Nav } from 'react-bootstrap'
import { ApproverRoutes } from '../../routes/approverRoutes'


export const Approver = () => {
  let { path } = useRouteMatch()
  console.log(useRouteMatch());

  console.log(path)
  return (
    <Container>
      <h1>Approver</h1>
      <Tab.Container id="left-tabs-example" defaultActiveKey={`${path}/all`} activeKey={`${path}/all`}>
        <Row>
          <Col sm={3}>
            <Nav variant="pills" className="flex-column">
              <Nav.Item>
                <Nav.Link as={Link} to={`${path}/all`}>View All</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={Link} to={`${path}/add`}>Add Approver</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={Link} to={`${path}/delete`}>Delete Approver</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={Link} to={`${path}/edit`}>Edit Approver</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={Link} to={`${path}/deleteall`}>Delete All Approver</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={6}>
            <ApproverRoutes path={path} />
          </Col>
        </Row>
      </Tab.Container>
    </Container>
  )
}