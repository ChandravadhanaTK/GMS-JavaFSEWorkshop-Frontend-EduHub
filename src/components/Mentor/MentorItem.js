import { useHistory } from 'react-router-dom'
import { Card, Button } from 'react-bootstrap'
import { useState } from 'react';

export const MentorItem = (props) => {
  
  const history = useHistory();

  console.log("props: " + JSON.stringify(props));

  return (
    <Card>
      <Card.Body>
        <div style={{ display: 'flex' }}>
          <div style={{ flex: 1 }}>
            <Card.Text>
              { 
                `${props.mentorData.userid} ` + 
                `${props.mentorData.mentoringskill} `
              }
            </Card.Text>
          </div>
          <div>
            <Button variant="warning" style={{ marginRight: 10 }} >
              Edit
            </Button>
            <Button variant="danger"  
                    onClick={() => props.onDelete(props.mentorData.userid)}>
              Delete
            </Button>
          </div>
        </div>
      </Card.Body>
    </Card>
  )
}