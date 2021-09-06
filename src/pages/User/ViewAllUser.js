import React, { useEffect, useState } from 'react'
import { Card, Modal, Button } from 'react-bootstrap'

import { getAllUser, deleteUser, deleteAllUsers } from '../../features/user/userAPI'

import { UserItem } from '../../components/User/UserItem'

export const ViewAllUser = () => {
  const [user, setUser] = useState([])
  const [showDelModal, setShowDelModal] = useState(false)
  const [showDelAllModal, setShowDelAllModal] = useState(false)
  const [toDelete, setToDelete] = useState('')

  useEffect(() => {
    // fectch data from api and update the state
    getUserData()
  }, [])

  const getUserData = async () => {
    try {
      const userData = await getAllUser()
      console.log(userData)

      setUser(userData)
    } catch (error) {
      // TODO: notify user
    }
  }

  const handleDelModalOpen = (id) => {
    setToDelete(id)
    setShowDelModal(true)
  }

  const handleDelModalClose = () => {
    setShowDelModal(false)
  }

  const handleDelAllModalOpen = () => {
        setShowDelAllModal(true)
  }

  const handleDelAllModalClose = () => {
    setShowDelAllModal(false)
  }


  const handleDelete = async () => {
    try {
      await deleteUser(toDelete)

      // clear toDelete
      setToDelete('')

      // close modal
      setShowDelModal(false)

      // refresh user data
      await getUserData()
    } catch (error) {      
        console.error(error)
    }
  }

  const handleDeleteAll = async () => {
    try {
      await deleteAllUsers();
      setShowDelAllModal(false);
      await getUserData()      
              } catch (error) {
            console.error(error)
    }

  }

  return (
    <React.Fragment>
      <Card>
        {user.map(item => {
          return (
            <UserItem key={item.id} userData={item} onDelete={handleDelModalOpen} />
          )
        })}
      </Card>
      <Card>
        {user.length > 1 ?
        <div className="d-grid gap-2">
          <Button variant="primary" size="lg"
            backgroundcolor="black"
            color="blue"
            textalign="center"
            style={{width: "100%", margin: "center" }}
            padding="5px 10px 5px 10px"
            onClick={handleDelAllModalOpen}>
            Delete All
          </Button>
        </div>
        : <div className="d-grid gap-2">
          <Button variant="secondary" disabled size="lg"
            style={{ width: "100%", marginTop: "10px" }}
                opacity="0.7"
                cursor="default"
                >
            Delete All
          </Button>
        </div>
         }
      </Card>
      <Modal show={showDelModal} onHide={handleDelModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete User</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleDelModalClose}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal show={showDelAllModal} onHide={handleDelAllModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete All Users in Eduhub</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete all Users?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleDelAllModalClose}>
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