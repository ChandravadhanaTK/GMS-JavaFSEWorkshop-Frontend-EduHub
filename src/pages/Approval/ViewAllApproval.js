import React, { useEffect, useState } from 'react'
import { Card, Modal, Button } from 'react-bootstrap'
import { getAllApprovalsAPI, deleteApprovalByIdAPI } from '../../features/Approval/ApprovalAPI'
import { ApprovalItem } from '../../components/Approval/ApprovalItem'
import '../../components/Approval/ApprovalItem.css';

const localApprovalData = [
  {approvalId:"1",
   requestId:"501",
   rmId:"14530",
   approvalStatus:"Approved",
   approvalStatusMessage:"Approved", 
   createdOn: new Date('01/08/2021').toString(), 
   lastUpdatedOn: new Date('01/08/2021').toString()
  
  },  
  {approvalId:"2",
   requestId:"502",
   rmId:"18989",
   approvalStatus:"Rejected",
   approvalStatusMessage:"wrong request", 
   createdOn: new Date('01/08/2021').toString(), 
   lastUpdatedOn: new Date('09/08/2021').toString()
  },
  {approvalId:"3",
   requestId:"503",
   rmId:"15467",
   approvalStatus:"Pending",
   approvalStatusMessage:"Some message", 
   createdOn: new Date('01/08/2021').toString(), 
   lastUpdatedOn: new Date('01/09/2021').toString()
  }
]

export const ViewAllApproval = () => {
  const [Approval, setApproval] = useState(localApprovalData);
  const [showModal, setShowModal] = useState(false)
  const [toDelete, setToDelete] = useState('')

  //setApprover(localApprovalData);
  console.log('Approval Data = ', Approval);
  
  useEffect(() => {
    // fectch data from api and update the state
    console.log('Fetching approval details from localhost application api.')
    getApprovalData()
  }, [])

  const getApprovalData = async () => {
    try {
      console.log('in getApprovalData()');
      const ApprovalData = await getAllApprovalsAPI();
      console.log('Approval data = ', ApprovalData);
      // const ApproverData = [
      //   {approvalid:"451",requesterid:"781",rmId:"14530",approvalstatus:"Approved",asmessage:"Approved"},
      //   {approvalid:"452",requesterid:"782",rmId:"14531",approvalstatus:"Rejected",asmessage:"Wrong Request"},
      //   {approvalid:"453",requesterid:"783",rmId:"14532",approvalstatus:"Pending",asmessage:"WIP"},
      // ]
      //const ApproverData = {...localApprovalData};
      //console.log("approval data"+ ApproverData.name)
      setApproval(ApprovalData);
    } catch (error) {
      console.log(error);
    }
  }

  const handleModalOpen = (ApprovalId) => {
    setToDelete(ApprovalId)
    setShowModal(true)
  }

  const handleModalClose = () => {
    setShowModal(false)
  }

  const handleDelete = async () => {
    try {
      await deleteApprovalByIdAPI(toDelete)
      // clear toDelete
      setToDelete('')
      // close modal
      setShowModal(false)
      // refresh Approver data
      //await getApproverData()
    } catch (error) {

    }
  }

  return (
    <React.Fragment>
      <Card>
        <table className="styled-table">
          <thead>
          <tr>
            <th>Approval Id</th>
            <th>Requester Employee Id </th>
            <th>Reporting Manager Id</th>
            <th>Approval Status</th>
            <th>Requester Status Message</th>
            <th>Creation Date</th>
            <th>Last update Date</th>
          </tr>
          </thead>
          <tbody>
            {Approval.map(item => {return (<ApprovalItem key={item.approvalId} ApprovalData={item} onDelete={handleModalOpen} />)})}
          </tbody>
        </table>

      </Card>
      <Modal show={showModal} onHide={handleModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Approval</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleModalClose}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </React.Fragment>
  )

}