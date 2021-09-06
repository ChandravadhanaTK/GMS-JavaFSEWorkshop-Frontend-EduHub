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
            <table className="table" size="sm">                
                  <tr>
                    <td xs={6}>{props.courseData.courseId}</td>
                    <td xs={6}>{props.courseData.courseName}</td>
                    <td xs={6}>{props.courseData.courseDesc}</td>
                    {/* <td xs={6}>{props.courseData.skillReqd}</td>
                    <td>{props.courseData.createdOn}</td>
                    <td>{props.courseData.lastUpdatedOn}</td> */}
                  </tr>              
          </table>
          </Card.Text>
          </div>
       
            {/* </div>                  */}
            {/* <Card.Text>
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

            </Card.Text> */}   
              
     
          <div>
            <Button variant="warning" style={{ marginRight: 10 }} onClick={() => history.push(`/course/view/${props.courseData.courseId}`)}>
            View
            </Button>
            <Button variant="warning" style={{ marginRight: 10 }} onClick={() => history.push(`/course/edit/${props.courseData.courseId}`)}>
            {/* <Button variant="warning" style={{ marginRight: 10 }} onClick={() => history.push(`/edit/${props.courseData.courseId}`)}> */}
            {/* <Button variant="warning" style={{ marginRight: 10 }} onClick={() => props.onEdit(props.courseData.courseId)}> */}
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