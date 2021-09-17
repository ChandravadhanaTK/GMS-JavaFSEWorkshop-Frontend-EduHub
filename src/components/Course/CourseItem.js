import { useHistory } from 'react-router-dom'
import { Card, Button } from 'react-bootstrap'

export const CourseItem = (props) => {
  const history = useHistory()
  console.log("entered Course Item");
  console.log(props);
  console.log("before Return");
  return (
                  <tr>
                    <td xs={6}>{props.courseData.courseId}</td>
                    <td xs={6}>{props.courseData.courseName}</td>
                    <td xs={6}>{props.courseData.courseDesc}</td>
                  <td>
                    <Button variant="warning" style={{ marginRight: 10 }} onClick={() => history.push(`/course/view/${props.courseData.courseId}`)}>
                        View
                    </Button>
                    <Button variant="warning" style={{ marginRight: 10 }} onClick={() => history.push(`/course/edit/${props.courseData.courseId}`)}>
                        Edit
                    </Button>
                    <Button variant="danger" onClick={() => props.onDelete(props.courseData.courseId)}>
                    Delete
                    </Button>
                  </td> 
                </tr>  

          
      )
}