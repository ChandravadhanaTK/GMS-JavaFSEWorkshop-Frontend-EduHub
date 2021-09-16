import { useState, useEffect } from 'react'
import { useParams, useHistory } from 'react-router'
import { Card, Button, Form } from 'react-bootstrap'

import { getApprovalByIdAPI, updateApprovalAPI } from '../../features/Approval/ApprovalAPI'
import {ApprovalId} from '../../components/Approval/ApprovalId'
import ApprovalDetails from '../../components/Approval/ApprovalDetails'
import {ApprovalEditOptions} from '../../components/Approval/ApprovalEditOptions'

export const EditApproval = () => {
  const history = useHistory()
  const [form, setForm] = useState({
    name: ''
  })

  let resp = {};

  const [displayApprovalIdEntryPanel, setDisplayApprovalIdEntryPanel] = useState(true);
  const [approvalObject, setApprovalObject] = useState({});

  const getApprovalDetails = async (approvalNumber) => {
    console.log('Approval id entered is = ', approvalNumber);
    try{
      resp = await getApprovalByIdAPI(approvalNumber);
      console.log('retrieved object = ', resp);
      setApprovalObject(resp);
      console.log('Approval object = ', approvalObject);
      setDisplayApprovalIdEntryPanel(false);
    } catch(error){
      console.log(error);
    }
  }

  const displayApprovalEditPage = () => {
    return(
      <div>
        <div>Edit Approval</div>
        <hr></hr>
        <div>
            <ApprovalDetails approvalDetails={approvalObject}/>
        </div>
        <hr></hr>
        <div>
          <ApprovalEditOptions onCancel={displayApprovalIdEntryPanelHandler} onAction={updateApprovalDetails}/>
        </div>
      </div>
      );
  }

  const updateApprovalDetails = async (decision, comment) => {
    console.log('in updateApprovalDetails function');
    console.log('decision = ', decision);
    console.log('comment = ', comment);
    console.log('Approval id = ', approvalObject.approvalId);
    console.log('request id = ', approvalObject.requestId);
    console.log('rmid = ', approvalObject.rmId);
    console.log('old status = ', approvalObject.approvalStatus);
  
    const updatedApproval = {
      approvalId: approvalObject.approvalId,
      requestId: approvalObject.requestId,
      rmId: approvalObject.rmId,
      approvalStatus: decision,
      approvalStatusMessage: comment, 
    };

    console.log('updated object = ', updatedApproval);
    try{
      let response = await updateApprovalAPI(updatedApproval)
      console.log('approval update response = ', response);
      displayApprovalIdEntryPanelHandler();
      history.push('/approval/all')
     }catch(error){
      console.log(error)
    }
  }

  const displayApprovalIdEntryPanelHandler = () =>{
    setDisplayApprovalIdEntryPanel(!displayApprovalIdEntryPanel);
  }

  return (
    <Card>
    <Card.Body>
      {((displayApprovalIdEntryPanel === true) && <ApprovalId onApprovalIdSubmit={getApprovalDetails}/>)}
      {/* {((displayApprovalIdEntryPanel === 'false') && <ApprovalDetails approvalDetails={approvalObject}/>)} */}
      {((displayApprovalIdEntryPanel === false) && <div>{displayApprovalEditPage()}</div>)}
    </Card.Body>
  </Card>
  )
}