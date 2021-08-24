import { useHistory } from 'react-router-dom'
import { Card, Button } from 'react-bootstrap'

export const CourseItem = (props) => {
  const history = useHistory()
  return (
    <Card>
      <Card.Body>
        <div style={{ display: 'flex' }}>
          <div style={{ flex: 1 }}>
            <Card.Text>
              {props.courseData.courseid} +
              {props.courseData.coursename}+
              {props.courseData.coursedesc}+
              {props.courseData.skillreqd}

            </Card.Text>
          </div>
          <div>
            <Button variant="warning" style={{ marginRight: 10 }} onClick={() => history.push(`/course/edit/${props.courseData.courseid}`)}>
              Edit
            </Button>
            <Button variant="danger" onClick={() => props.onDelete(props.courseData.courseid)}>
              Delete
            </Button>
          </div>
        </div>
      </Card.Body>
    </Card>
  )
}