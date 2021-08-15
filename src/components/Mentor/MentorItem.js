import { useHistory } from 'react-router-dom'
import { Card, Button } from 'react-bootstrap'
import { useState } from 'react';

export const MentorItem = (props) => {
  
  const { mentorDataItem } = props;
  const [mentorData, setMentorData] = useState(mentorDataItem);
  const history = useHistory();

  console.log("props: " + JSON.stringify(props));
  console.log("mentorDataItem: "+JSON.stringify(mentorDataItem));
  console.log("mentorData: " +JSON.stringify(mentorData));

  return (
    <Card>
      <Card.Body>
        <div style={{ display: 'flex' }}>
          <div style={{ flex: 1 }}>
            <Card.Text>
              {mentorData.name}
            </Card.Text>
          </div>
          <div>
            <Button variant="warning" style={{ marginRight: 10 }} >
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