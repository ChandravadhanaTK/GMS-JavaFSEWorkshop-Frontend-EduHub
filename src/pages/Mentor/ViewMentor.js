import React, { useState} from 'react'
import { Alert, Card, Button, Form, Modal, Table } from 'react-bootstrap'
import { getMentorById, deleteMentor } 
          from '../../features/mentor/mentorAPI'
import { ViewMentorItem } from '../../components/Mentor/ViewMentorItem'

export const ViewMentor = () => {

  const [mentor, setMentor] = useState([]);
  const [userId, setUserId] = useState([]);
  const [searchClicked, setSearchClicked] = useState(false);

  const [toDeleteId, setToDeleteId] = useState(0);
  const [toDeleteAId, setToDeleteAId] = useState(0);
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
      console.log("Error in getMentoryById ")
    }
  }

  const handleDeleteModalOpen = (userId,availabilityid) => {
    setToDeleteId(userId)
    setToDeleteAId(availabilityid)
    setShowDeleteModal(true)
  }

  const handleDeleteModalClose = () => {
    setShowDeleteModal(false)
  }

  const handleDelete = async () => {
    try {
      await deleteMentor(toDeleteId,toDeleteAId)

      // clear toDelete
      setToDeleteId('')
      setToDeleteAId('')

      // close modal
      setShowDeleteModal(false)

      // refresh demo data
      await getMentorData(userId)
    } catch (error) {
      console.log("Error in handleDelete")
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
            <Button variant="warning" background-color="DodgerBlue" type="submit">
              View
            </Button>
          </Form>
        </Card.Text>
      </Card.Body>
    </Card>
  { searchClicked && userId!=="" &&
        <React.Fragment>
          { mentor.length 
            ?<Table striped bordered hover>
              <thead>
                <tr style={{textAlign: "Center", color: "White", backgroundColor: "dodgerblue"}}>    
                  <th>UserId</th>
                  <th>Mentor Name</th>
                  <th>Start Date / Time</th>
                  <th>End Date / Time</th>
                  <th>Mentor Skill</th>
                  <th>Mentor Rating</th>
                  <th>Action </th>
                </tr>
              </thead>                     
              <tbody>
                {mentor.map(item => {
                  return (
                    <ViewMentorItem  key={item.userid} 
                                  mentorData={item} 
                                  onDelete={handleDeleteModalOpen}/>
                    )
                })}
              </tbody>
            </Table>
            : <Alert variant="danger">Mentor {userId} data Present. Please add this mentor's details in Eduhub.</Alert>
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

       </React.Fragment>
      }
  </React.Fragment>
  )
}