import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Card, Button, Form } from 'react-bootstrap'
import { deleteApprovalByIdAPI } from '../../features/Approval/ApprovalAPI'
import {ApprovalId} from '../../components/Approval/ApprovalId'
import ApprovalDetails, {} from '../../components/Approval/ApprovalDetails'

export const DeleteApproval = () => {
  const history = useHistory()

  let resp = {};

  const [displayApprovalIdEntryPanel, setDisplayApprovalIdEntryPanel] = useState('true');
  const [approvalDeleteResponse, setApprovalDeleteResponse] = useState('');
  //let approvalDeleteResponse = '';

  const getApprovalDetails = async (approvalNumber) => {
    console.log('Approval id entered is = ', approvalNumber);
    try{
      resp = await deleteApprovalByIdAPI(approvalNumber);
      console.log('retrieved object = ', resp);
      setApprovalDeleteResponse(resp);
    // approvalDeleteResponse = await deleteApprovalByIdAPI(approvalNumber);
      // console.log('retrieved object = ', approvalDeleteResponse);
    //  console.log('Approval object = ', approvalDeleteResponse);
      setDisplayApprovalIdEntryPanel('false');
    } catch(error){
      console.log(error);
    }
  }

  const displayDeleteMessage = () => {
      return(
          <div>
              <div>
                  {approvalDeleteResponse}
              </div>
              <div>
                  <button type='button' onClick={buttonClickedHandler}>OK</button>
              </div>              
          </div>
      );
  };

  const buttonClickedHandler = () => {
    setDisplayApprovalIdEntryPanel('true');
  }

  return (
    <Card>
      <Card.Body>
        {((displayApprovalIdEntryPanel === 'true') && <ApprovalId onApprovalIdSubmit={getApprovalDetails}/>)}
        {/* {((displayApprovalIdEntryPanel === 'false') && (<div>{approvalDeleteResponse}</div>))} */}
        {((displayApprovalIdEntryPanel === 'false') && (<div>{displayDeleteMessage()}</div>))}
      </Card.Body>
    </Card>
  )
}