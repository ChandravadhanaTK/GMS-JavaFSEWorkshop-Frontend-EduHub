import React, { useEffect, useState } from 'react'
import { Card, Modal, Button } from 'react-bootstrap'

import { getAllDemo, deleteDemo } from '../../features/demo/demoAPI'

import { DemoItem } from '../../components/Demo/DemoItem'

export const ViewAllDemo = () => {
  const [demo, setDemo] = useState([])
  const [showModal, setShowModal] = useState(false)
  const [toDelete, setToDelete] = useState('')

  useEffect(() => {
    // fectch data from api and update the state
    getDemoData()
  }, [])

  const getDemoData = async () => {
    try {
      const demoData = await getAllDemo()
      console.log(demoData)

      setDemo(demoData)
    } catch (error) {
      // TODO: notify user
    }
  }

  const handleModalOpen = (demoId) => {
    setToDelete(demoId)
    setShowModal(true)
  }

  const handleModalClose = () => {
    setShowModal(false)
  }

  const handleDelete = async () => {
    try {
      await deleteDemo(toDelete)

      // clear toDelete
      setToDelete('')

      // close modal
      setShowModal(false)

      // refresh demo data
      await getDemoData()
    } catch (error) {
      
    }
  }

  return (
    <React.Fragment>
      <Card>
        {demo.map(item => {
          return (
            <DemoItem key={item.id} demoData={item} onDelete={handleModalOpen} />
          )
        })}
      </Card>
      <Modal show={showModal} onHide={handleModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Demo</Modal.Title>
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