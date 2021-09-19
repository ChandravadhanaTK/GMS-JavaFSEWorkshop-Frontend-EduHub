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
    <tr>
                    
                    <td xs={6}>{props.learnerData.requestId}</td>
                    <td xs={6}>{props.learnerData.userId}</td>
                    <td xs={6}>{props.learnerData.role}</td>
                    <td xs={6}>{props.learnerData.courseId}</td>
                    <td xs={6}>{props.learnerData.approvalStatus}</td>
                    <td xs={6}>{props.learnerData.assignmentId}</td>
                    {/* <td xs={6}>{props.learnerData.assignmentStatus}</td> */}
                    <td xs={6}>{props.learnerData.learnerScore}</td>
                  <td>
                  <Button variant="warning" style={{ marginRight: 10 }} onClick={  () => history.push({pathname: `/learner/edit/${props.learnerData.requestId}`, state : props.learnerData}) }>
                 
                 View/Edit
               </Button>
               <Button variant="danger" onClick={() => props.onDelete(props.learnerData.requestId)}>
                    Delete
                  </Button>
                    
                  </td> 
                </tr>  
       
  )
}