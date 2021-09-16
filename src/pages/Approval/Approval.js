import React from 'react'
import { Link, useRouteMatch } from 'react-router-dom'
import { Container, Tab, Row, Col, Nav } from 'react-bootstrap'
import { ApprovalRoutes } from '../../routes/approvalRoutes'

export const Approval = () => {  
  let { path } = useRouteMatch()
  console.log(useRouteMatch());

  console.log(path)
  return (
    <Container>
      <h1>Approval</h1>
      <Tab.Container id="left-tabs-example" defaultActiveKey={`${path}/all`} activeKey={`${path}/all`}>
        <Row>
          <Col sm={3}>
            <Nav variant="pills" className="flex-column">
              <Nav.Item>
                <Nav.Link as={Link} to={`${path}/all`}>View All</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={Link} to={`${path}/oneApproval`}>View One Approval</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={Link} to={`${path}/add`}>Add Approval</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={Link} to={`${path}/delete`}>Delete Approval</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={Link} to={`${path}/edit`}>Edit Approval</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={Link} to={`${path}/deleteall`}>Delete All Approvals</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={Link} to={`${path}/futureEnhancements`}>Future Enhancements</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={6}>
            <ApprovalRoutes path={path} />
          </Col>
        </Row>
      </Tab.Container>
    </Container>
  )
}