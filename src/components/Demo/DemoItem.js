import { useHistory } from 'react-router-dom'
import { Card, Button } from 'react-bootstrap'

export const DemoItem = (props) => {
  const history = useHistory()
  return (
    <Card>
      <Card.Body>
        <div style={{ display: 'flex' }}>
          <div style={{ flex: 1 }}>
            <Card.Text>
              {props.demoData.name}
            </Card.Text>
          </div>
          <div>
            <Button variant="warning" style={{ marginRight: 10 }} onClick={() => history.push(`/demo/edit/${props.demoData.id}`)}>
              Edit
            </Button>
            <Button variant="danger" onClick={() => props.onDelete(props.demoData.id)}>
              Delete
            </Button>
          </div>
        </div>
      </Card.Body>
    </Card>
  )
}