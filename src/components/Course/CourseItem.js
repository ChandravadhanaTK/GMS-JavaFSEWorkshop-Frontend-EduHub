import { useHistory } from 'react-router-dom'
import { Card, Button } from 'react-bootstrap'
import { useState } from 'react';

export const CourseItem = (props) => {
  
  const { courseDataItem } = props;
  const [courseData, setCourseData] = useState(courseDataItem);
  const history = useHistory();

  console.log("props: " + JSON.stringify(props));
  console.log("courseDataItem: "+JSON.stringify(courseDataItem));
  console.log("courseData: " +JSON.stringify(courseData));

  return (
    <Card>
      <Card.Body>
        <div style={{ display: 'flex' }}>
          <div style={{ flex: 1 }}>
            <Card.Text>
            {courseData.name}
            </Card.Text>
          </div>
          <div>
           {/* <Button variant="warning" style={{ marginRight: 10 }} > */}
            <Button variant="warning" style={{ marginRight: 10 }} onClick={() => history.push(`/course/edit/${courseData.name}`)}>
              Edit
            </Button>
            <Button variant="danger">
              Delete
            </Button>
          </div>
        </div>
      </Card.Body>
    </Card>
  )
}