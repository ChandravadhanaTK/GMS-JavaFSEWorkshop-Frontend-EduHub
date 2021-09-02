import React, { useEffect, useState } from 'react'
import { Card, Modal, Button } from 'react-bootstrap'

import { getAllApprover, deleteApprover } from '../../features/Approver/ApproverAPI'

import { ApproverItem } from '../../components/Approver/ApproverItem'

export const ViewAllApprover = () => {
  const [Approver, setApprover] = useState([])
  const [showModal, setShowModal] = useState(false)
  const [toDelete, setToDelete] = useState('')

  useEffect(() => {
    // fectch data from api and update the state
    getApproverData()
  }, [])

  const getApproverData = async () => {
    try {
      // const ApproverData = await getAllApprover()
 
      const ApproverData = [
        {approvalid:"451",requesterid:"781",rmid:"14530",approvalstatus:"Approved",asmessage:"Approved"},
        {approvalid:"452",requesterid:"782",rmid:"14531",approvalstatus:"Rejected",asmessage:"Wrong Request"},
        {approvalid:"453",requesterid:"783",rmid:"14532",approvalstatus:"Pending",asmessage:"WIP"},
      ]
      console.log("approval data"+ ApproverData.name)
      setApprover(ApproverData)
    } catch (error) {
      // TODO: notify user
    }
  }

  const handleModalOpen = (ApproverId) => {
    setToDelete(ApproverId)
    setShowModal(true)
  }

  const handleModalClose = () => {
    setShowModal(false)
  }

  const handleDelete = async () => {
    try {
      await deleteApprover(toDelete)

      // clear toDelete
      setToDelete('')

      // close modal
      setShowModal(false)

      // refresh Approver data
      await getApproverData()
    } catch (error) {

    }
  }

  return (
    <React.Fragment>
      <Card>
        {Approver.map(item => {
          return (
            <ApproverItem key={item.id} ApproverData={item} onDelete={handleModalOpen} />
          )
        })}
      </Card>
      <Modal show={showModal} onHide={handleModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Approver</Modal.Title>
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