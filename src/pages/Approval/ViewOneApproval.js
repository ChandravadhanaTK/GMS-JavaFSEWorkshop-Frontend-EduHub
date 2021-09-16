import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Card, Button, Form } from 'react-bootstrap'
import { getApprovalByIdAPI } from '../../features/Approval/ApprovalAPI'
import {ApprovalId} from '../../components/Approval/ApprovalId'
import ApprovalDetails from '../../components/Approval/ApprovalDetails'

export const ViewOneApproval = () => {
  const history = useHistory()
  const [form, setForm] = useState({
    name: ''
  })

  //let resp = {name : 'name'};
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

  return (
    <Card>
      <Card.Body>
        {((displayApprovalIdEntryPanel === true) && <ApprovalId onApprovalIdSubmit={getApprovalDetails}/>)}
        {((displayApprovalIdEntryPanel === false) && <ApprovalDetails approvalDetails={approvalObject}/>)}
      </Card.Body>
    </Card>
  )
}