import React from 'react'
import { Link, useRouteMatch } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Container, Tab, Row, Col, Nav } from 'react-bootstrap'
import { CourseRoutes } from '../../routes/courseRoutes'

export const Course = () => {
  let { path } = useRouteMatch()

    console.log(useRouteMatch());
    console.log(path)
    
  return (
    <Container>
      <h1>Course</h1>
      <Tab.Container id="left-tabs-example" defaultActiveKey={`${path}/all`} activeKey={`${path}/all`}>
        <Row>
          <Col sm={3}>
            <Nav variant="pills" className="flex-column">
              <Nav.Item>
                <Nav.Link as={Link} to={`${path}/all`}>View Courses</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={Link} to={`${path}/add`}>Add Course</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={Link} to={`${path}/futuredev`}>Future Developments</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={9}>
            <CourseRoutes path={path} />
          </Col>
        </Row>
      </Tab.Container>
    </Container>
  )
}