import { Modal, Button, Table, Alert } from 'react-bootstrap'
import React, { useState, useEffect } from 'react'
import {  getAllMentors, 
          deleteMentor, 
          deleteAllMentor } from '../../features/mentor/mentorAPI'
import { ViewAllMentorItem } from '../../components/Mentor/ViewAllMentorItem'

export const ViewAllMentor = () => {

  const [mentors, setMentors] = useState([]);
  const [toDeleteId, setToDeleteId] = useState(0);
  const [toDeleteAId, setToDeleteAId] = useState(0);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showDeleteAllModal, setShowDeleteAllModal] = useState(false);

  useEffect(() => {
      // fetch data from api and update the state
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
 
  const handleDeleteModalOpen = (userid,availabilityid) => {
    console.log("mentor.availability" + mentors.availabilityid)
    console.log("user id" + userid)
    console.log("availabilityId " + availabilityid)
    setToDeleteId(userid)
    setToDeleteAId(availabilityid)
    setShowDeleteModal(true)

  }

  const handleDeleteModalClose = () => {
    setShowDeleteModal(false)
  }

  const handleDeleteAllModalOpen = () => {
    console.log("HANDLEDELETEALLMODALOPEN");
    setShowDeleteAllModal(true)
  }

  const handleDeleteAllModalClose = () => {
    setShowDeleteAllModal(false)
  }

  const handleDelete = async () => {
    try {
      console.log(toDeleteAId)
      await deleteMentor(toDeleteId,toDeleteAId)

      // clear toDelete
      setToDeleteId('')
      setToDeleteAId('')

      // close modal
      setShowDeleteModal(false)

      // refresh mentor data
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
      { mentors.length  
        ? null 
        : <Alert variant="danger">No Mentor Data Present. Please add mentors.</Alert>
      }      
        <Table striped bordered hover>
          <thead>
            <tr style={{textAlign: "center", color: "White", backgroundColor: "dodgerblue"}}>
              <th>Mentor Name</th>
              <th>Skill</th>
              <th>Start Date / Time</th>
              <th>End Date / Time</th>
              <th>Action</th>                       
            </tr>
          </thead>
          <tbody>
            {mentors.map(mentor => {
              console.log(JSON.stringify(mentor));
              return (
                <ViewAllMentorItem key={mentor.availabilityid}
                            mentorData={mentor}
                            onDelete={handleDeleteModalOpen} 
                />
              )
            })}
          </tbody>        
        </Table>
      {mentors.length > 1 ?
        <div className="d-grid gap-2">
          <Button variant="danger" size="md"
            style={{ width: "22%", marginLeft: "740px" }}
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