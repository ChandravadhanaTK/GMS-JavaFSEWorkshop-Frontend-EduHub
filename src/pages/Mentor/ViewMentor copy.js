import React, { useState} from 'react'
// import { useParams, useHistory } from 'react-router'
import { Card, Button, Form, Modal } from 'react-bootstrap'
import { getMentorById, deleteMentor,  updateMentor } 
          from '../../features/mentor/mentorAPI'
import { MentorItem1 } from '../../components/Mentor/MentorItem1'

export const ViewMentor = () => {

  const [mentor, setMentor] = useState([]);
  const [userId, setUserId] = useState([]);
  const [searchClicked, setSearchClicked] = useState(false);

  const [toDelete, setToDelete] = useState(0);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const handleKeyChange = (e) => {
  setUserId([])
  setMentor([])
  setSearchClicked(false)
  setUserId(e.target.value)
  }

const onSubmit = (e) => {

      if (userId === '')
          {
            setSearchClicked(false)
            console.log("user id is empty")
          }
      else
        { 
          e.preventDefault();
          setSearchClicked(true) 
          getMentorData(userId)
        }   
    }


  const getMentorData = async (userId) => {
    try {
      const mentorData = await getMentorById(userId)
      setMentor(mentorData)
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

  const handleDelete = async () => {
    try {
      await deleteMentor(toDelete)

      // clear toDelete
      setToDelete('')

      // close modal
      setShowDeleteModal(false)

      // refresh demo data
      await getMentorData(userId)
    } catch (error) {
      
    }
  }

  return (
  <React.Fragment>
    <Card>
      <Card.Body>
        <Card.Title>View Mentor</Card.Title>
        <Card.Text>
          
          <Form onSubmit={onSubmit}>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Mentor Id</Form.Label>
              <Form.Control type="number" placeholder="Enter Id" onChange={handleKeyChange} value={userId} name="userId"/>
              <Form.Text className="text-muted">
                Enter Mentor id :)
              </Form.Text>
            </Form.Group>
            <Button variant="warning" type="submit">
              View
            </Button>
          </Form>
        </Card.Text>
      </Card.Body>
    </Card>

  { searchClicked &&

        <React.Fragment>
          <Card>
            {mentor.map(item => {
              return (
                <MentorItem1 key={item.userid} mentorData={item} onDelete={handleDeleteModalOpen}/>
                     )
            })}
         </Card>

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

       </React.Fragment>
      }
  </React.Fragment>
  )
}