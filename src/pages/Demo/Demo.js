import React, { useState } from 'react'
import { Container, Tab, Row, Col, Nav } from 'react-bootstrap'

import { ViewAllDemo } from './ViewAllDemo'
import { AddDemo } from './AddDemo'

export const Demo = () => {
  const [demoList, setDemoList] = useState([
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
      <h1>Demo</h1>
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row>
          <Col sm={3}>
            <Nav variant="pills" className="flex-column">
              <Nav.Item>
                <Nav.Link eventKey="first">View all</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second">Add Demo</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={9}>
            <Tab.Content>
              <Tab.Pane eventKey="first">
                <ViewAllDemo demoList={demoList} />
              </Tab.Pane>
              <Tab.Pane eventKey="second">
                <AddDemo />
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </Container>
  )
}