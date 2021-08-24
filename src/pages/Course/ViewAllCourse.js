import React, { useEffect, useState } from 'react'
import { Card, Row, Modal, Button } from 'react-bootstrap'
import { getAllCourse, deleteCourse } from '../../features/course/courseAPI'
import { CourseItem } from '../../components/Course/CourseItem'

export const ViewAllCourse = () => {
  const [course, setCourse] = useState([])
  const [showModal, setShowModal] = useState(false)
  const [showAllModal, setShowAllModal] = useState(false)
  const [toDelete, setToDelete] = useState('')

  useEffect(() => {
    getCourseData()
   }, [])

  const getCourseData = async () => {
    try {
      const courseData = await getAllCourse()
      console.log(courseData)
      setCourse(courseData)
    } catch (error) {
      console.error(error)
    }
  }

  const handleModalOpen = (courseid) => {
    setToDelete(courseid)
    setShowModal(true)
  }

  const handleModalClose = () => {
    setShowModal(false)
  }

  const handleDelete = async () => {
    try {
      await deleteCourse(toDelete)
      // clear toDelete
      setToDelete('')
      // close modal
      setShowModal(false)
      // refresh demo data
      await getCourseData()
    } catch (error) {
      console.error(error)
    }
  }

  return (
          
    <React.Fragment>
      <div>
             <input type="radio" as={Row} value="CourseId" id="course"
              name="search" defaultChecked />
               <label>View by Course Id</label>
         
      </div>
      <div>
      <button type="button">Search Course </button> 
      </div>
      <Card>
        {course.map(item => {
          return (
            <CourseItem key={item.courseid} courseData={item} onDelete={handleModalOpen} />
          )
        })}
      </Card>
      <Modal show={showModal} onHide={handleModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Course</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to Delete this Course?</Modal.Body>
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