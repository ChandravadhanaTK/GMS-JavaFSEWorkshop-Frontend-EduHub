import { useHistory } from 'react-router-dom'
import { Card, Button } from 'react-bootstrap'
import { useState } from 'react';
import './ApprovalItem.css';

export const ApprovalItem = (props) => {
  
  // const { ApproverDataItem } = props;
  const [ApprovalData, setApprovalData] = useState(props.ApprovalData);
 
  //const history = useHistory();
  // console.log("props: " + JSON.stringify(props));
  // console.log("ApproverDataItem: "+JSON.stringify(ApproverDataItem));
  //console.log(ApproverData.ApproverData );

  return (
  //  <div>
  //   <form>           
  //     <div className="container">
  //           <table className="table">
  //                <tr>
  //                   <th>Approval Id</th>
  //                   <th>Requester Id</th>
  //                   <th>RM Id</th>
  //                   <th>Approval Status</th>
  //                   <th>Requester Status Message</th>
  //                   <th>Creation Date</th>
  //                   <th>Last update Date</th>
  //                 </tr>
  //               <tbody>
                  // <tr> no records to display </tr>
                  <tr >
                    <td>{ApprovalData.approvalId}</td> 
                    <td>{ApprovalData.requestId}</td>
                    <td>{ApprovalData.rmId}</td>
                    <td>{ApprovalData.approvalStatus}</td>
                    <td>{ApprovalData.approvalStatusMessage}</td>
                    <td>{ApprovalData.createdOn}</td>
                    <td>{ApprovalData.lastUpdatedOn}</td>
                  </tr> 
        //         </tbody>
        //     </table>
        // </div>
        // </form>
        // </div>
  )
}