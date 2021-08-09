import { Card, Button } from 'react-bootstrap'

export const DemoItem = (props) => {
  return (
    <Card>
      <Card.Body>
        <Card.Text>
          <div style={{ display: 'flex' }}>
            <div style={{ flex: 1 }}>
              <p>{props.demoData.name}</p>
            </div>
            <div>
              <Button variant="warning" style={{ marginRight: 10 }}>
                Edit
              </Button>
              <Button variant="danger">
                Delete
              </Button>
            </div>
          </div>
        </Card.Text>
      </Card.Body>
    </Card>
  )
}