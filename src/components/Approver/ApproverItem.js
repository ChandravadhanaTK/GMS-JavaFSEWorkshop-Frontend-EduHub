import { useHistory } from 'react-router-dom'
import { Card, Button } from 'react-bootstrap'
import { useState } from 'react';
import './ApproverItem.css';

export const ApproverItem = (props) => {
  
  // const { ApproverDataItem } = props;
  const [ApproverData, setApproverData] = useState(props.ApproverData);
 
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
                    <td>{ApproverData.approvalId}</td> 
                    <td>{ApproverData.requestId}</td>
                    <td>{ApproverData.rmId}</td>
                    <td>{ApproverData.approvalStatus}</td>
                    <td>{ApproverData.approvalStatusMessage}</td>
                    <td>{ApproverData.createdOn}</td>
                    <td>{ApproverData.lastUpdatedOn}</td>
                  </tr> 
        //         </tbody>
        //     </table>
        // </div>
        // </form>
        // </div>
  )
}