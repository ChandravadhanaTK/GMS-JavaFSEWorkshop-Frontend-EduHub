import { useHistory } from 'react-router-dom'
import { Card, Button } from 'react-bootstrap'
import { EditLearner } from '../../pages/Learner/EditLearner';



export const LearnerItem = (props) => {
  
  // const { learnerDataItem } = props;
  // // const [learnerData, setLearnerData] = useState(learnerDataItem);
  const history = useHistory();

  // console.log("props: " + JSON.stringify(props));
  // console.log("learnerDataItem: "+JSON.stringify(learnerDataItem));
  // console.log("learnerData: " +JSON.stringify(learnerData));

  return (
    <Card>
      <div className="container" >
            <table className="table">
                <thead>
                  <tr>
                    <th>Request Id</th>
                    <th>User Id</th>
                    <th>Role</th>
                    <th>Course Id</th>
                    <th>Approval Status</th>
                    <th>Assignment Id</th>
                    <th>Assignment Status</th>
                    <th>Score</th>
                    {/* <th>Approval Status</th> */}
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
                    <td>{props.learnerData.assignmentStatus}</td>
                    <td>{props.learnerData.learnerScore}</td>
                    {/* <td>{props.learnerData.approvalStatus}</td> */}
                    
                  </tr>
                </tbody>
            </table>
             <div>            
                  <Button variant="warning" style={{ marginRight: 10 }} onClick={  () => history.push({pathname: `/learner/edit/${props.learnerData.requestId}`, state : props.learnerData}) }>
                  {/* <Button variant="warning" style={{ marginRight: 10 }} onClick={() => props.onEdit(props.learnerData)}> */}
                    Edit
                  </Button>
                  <Button variant="danger" onClick={() => props.onDelete(props.learnerData.requestId)}>
                    Delete
                  </Button>
                </div>
          
      </div>
    </Card>
    
    





    
                            // <td>{props.learnerData.requestId}</td>
                            // <td>{props.learnerData.userId}</td>
                            // <td>{props.learnerData.role}</td>
       
  )
}