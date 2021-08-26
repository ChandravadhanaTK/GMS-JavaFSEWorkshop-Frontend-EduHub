import { useHistory } from 'react-router-dom'
import { Card, Button } from 'react-bootstrap'

export const CourseItem = (props) => {
  const history = useHistory()
  console.log("entered Course Item");
  console.log(props);
  console.log("before Return");
  return (
    <Card>
      <Card.Body>
        <div style={{ display: 'flex' }}>
          <div style={{ flex: 1 }}>
            <Card.Text>
               {props.courseData.courseId} 
               {'                     '}
               {props.courseData.courseName} 
               {'                     '}  
              {props.courseData.courseDesc} 
              {'                     '}
              {props.courseData.skillReqd} 
              {'                     '}
              {props.courseData.createdOn} 
              {'                     '}
              {props.courseData.lastUpdatedOn}

            </Card.Text>
          </div>
          <div>
            <Button variant="warning" style={{ marginRight: 10 }} onClick={() => history.push(`/course/edit/${props.courseData.courseId}`)}>
              Edit
            </Button>
            <Button variant="danger" onClick={() => props.onDelete(props.courseData.courseId)}>
            Delete
            </Button>
          </div>
        </div>
      </Card.Body>
    </Card>
  )
}