import { Card, Modal, Button } from 'react-bootstrap'
import React, { useState, useEffect } from 'react'
import {  getAllMentors, 
          deleteMentor, 
          deleteAllMentor, updateMentor } from '../../features/mentor/mentorAPI'
import { MentorItem } from '../../components/Mentor/MentorItem'

export const ViewAllMentor = () => {

  const [mentors, setMentors] = useState([]);
  const [toDelete, setToDelete] = useState(0);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showDeleteAllModal, setShowDeleteAllModal] = useState(false);

  useEffect(() => {
      // fectch data from api and update the state
      console.log("Within useEffect()");
      getMentorData()
  },  [])

  const getMentorData = async () => {
    try {
      const mentorData = await getAllMentors()
      console.log(mentorData)

      setMentors(mentorData)
    } catch (error) {
      // TODO: notify user
    }
  }
 

  const handleDeleteModalOpen = (mentorId) => {
    setToDelete(mentorId)
    setShowDeleteModal(true)
  }

  const handleDeleteModalClose = () => {
    setShowDeleteModal(false)
  }

  const handleDeleteAllModalOpen = () => {
    // setToDelete(mentorId)
    console.log("HANDLEDELETEALLMODALOPEN");
    setShowDeleteAllModal(true)
  }

  const handleDeleteAllModalClose = () => {
    setShowDeleteAllModal(false)
  }

  const handleDelete = async () => {
    try {
      await deleteMentor(toDelete)

      // clear toDelete
      setToDelete('')

      // close modal
      setShowDeleteModal(false)

      // refresh demo data
      await getMentorData()
    } catch (error) {
      
    }
  }

  const handleDeleteAll = async () => {
    try {
      await deleteAllMentor();
      setShowDeleteAllModal(false);

      await getMentorData();
    } catch (error) {

    }

  }
  return (
    <React.Fragment>
      <Card>
        {mentors.map(mentor => {
          console.log(JSON.stringify(mentor));
          return (
            <MentorItem key={mentor.availabilityid}
                        mentorData={mentor}
                        onDelete={handleDeleteModalOpen} 
                        // onEdit={handleEditModalOpen}
            />
          )
        })}
      </Card>
      {mentors.length > 1 ?
        <div className="d-grid gap-2">
          <Button variant="danger" size="lg"
            style={{ width: "100%", marginTop: "10px" }}
            onClick={handleDeleteAllModalOpen}>
            Delete All
          </Button>
        </div>
        : null
      }

      <Modal show={showDeleteModal} onHide={handleDeleteModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Mentor</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this mentor?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleDeleteModalClose}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal show={showDeleteAllModal} onHide={handleDeleteAllModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete All Mentors in Eduhub</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete all mentors?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleDeleteAllModalClose}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleDeleteAll}>
            Delete All
          </Button>
        </Modal.Footer>
      </Modal>
    </React.Fragment>
  )
}