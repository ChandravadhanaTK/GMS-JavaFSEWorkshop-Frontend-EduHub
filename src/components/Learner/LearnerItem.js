import { useHistory } from 'react-router-dom'
import { Card, Button } from 'react-bootstrap'
import { useState } from 'react';


export const LearnerItem = (props) => {
  
  const { learnerDataItem } = props;
  // const [learnerData, setLearnerData] = useState(learnerDataItem);
  const history = useHistory();

  // console.log("props: " + JSON.stringify(props));
  // console.log("learnerDataItem: "+JSON.stringify(learnerDataItem));
  // console.log("learnerData: " +JSON.stringify(learnerData));

  return (
    <Card>
      <div className="container">
            <table className="table">
                <thead>
                  <tr>
                    <th>Request Id</th>
                    <th>User Id</th>
                    <th>Role</th>
                    <th>Course Id</th>
                    <th>Approval Status</th>
                    <th>Assignment Id</th>
                    <th>Score</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{props.learnerData.requestId}</td>
                    <td>{props.learnerData.userId}</td>
                    <td>{props.learnerData.role}</td>
                    <td>{props.learnerData.courseId}</td>
                    <td>{props.learnerData.approvalStatus}</td>
                    <td>{props.learnerData.assignmentId}</td>
                    <td>{props.learnerData.learnerScore}</td>
                  </tr>
                </tbody>
                <div>            
                  <Button variant="warning" style={{ marginRight: 10 }} onClick={() => history.push(`/learner/edit/${props.learnerData.requestId}`)}>
                    Edit
                  </Button>
                  <Button variant="danger" onClick={() => props.onDelete(props.learnerData.requestId)}>
                    Delete
                  </Button>
                </div>
                  
            </table>
      </div>
    </Card>
    
    





    
                            // <td>{props.learnerData.requestId}</td>
                            // <td>{props.learnerData.userId}</td>
                            // <td>{props.learnerData.role}</td>
       
  )
}