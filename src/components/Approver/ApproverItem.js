import { useHistory } from 'react-router-dom'
import { Card, Button } from 'react-bootstrap'
import { useState } from 'react';

export const ApproverItem = (props) => {
  
  // const { ApproverDataItem } = props;
  const [ApproverData, setApproverData] = useState(props);
 
  const history = useHistory();

  console.log("props: " + JSON.stringify(props));
  // console.log("ApproverDataItem: "+JSON.stringify(ApproverDataItem));
  console.log(ApproverData.ApproverData );

  return (
   <div>
    <form>           
      <div className="container">
            <table className="table">
                 <tr>
                    <th>Approval Id</th>
                    <th>Requester Id</th>
                    <th>RM Id</th>
                    <th>Approval Status</th>
                    <th>Requester Status Message</th>
                    <th>Creation Date</th>
                    <th>Last update Date</th>
                  </tr>
                
                <tbody>
                 
                          <tr >
                            <td>{ApproverData.ApproverData.approvalid}</td> 
                            <td>{ApproverData.ApproverData.requesterid}</td>
                            <td>{ApproverData.ApproverData.rmid}</td>
                            <td>{ApproverData.ApproverData.approvalstatus}</td>
                            <td>{ApproverData.ApproverData.asmessage}</td>
                          </tr>
                  
                    
                </tbody>
            </table>
          
        </div>
        </form>

        </div>
  )
}