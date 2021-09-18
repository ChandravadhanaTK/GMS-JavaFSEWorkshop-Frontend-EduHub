import React, { useEffect, useState } from 'react'
import { Card, Row, Modal, Button, Table } from 'react-bootstrap'
import { useRouteMatch } from 'react-router-dom'
import { getAllCourse, deleteCourse, deleteAllCourses } from '../../features/course/courseAPI'
import { CourseItem } from '../../components/Course/CourseItem'
import { CourseRoutes } from '../../routes/courseRoutes'

export const ViewAllCourse = () => {

  const [course, setCourse] = useState([])
  const [showModal, setShowModal] = useState(false)
  const [showModalAll, setShowModalAll] = useState(false)
  const [toDelete, setToDelete] = useState('')
  let { path } = useRouteMatch();
  console.log(useRouteMatch());
  console.log(path)

  useEffect(() => {
    getCourseData()
   }, [])



  const getCourseData = async () => {
    try {

      const courseData = await getAllCourse()
      console.log("after View All API");
      console.log(courseData);
      setCourse(courseData);
      console.log("After Array Display");
      console.log(course);
    } catch (error) {
      console.log("Failed to View All Courses");
      console.error(error)
     
    }
  }

  const handleModalOpen = (courseId) => {
    console.log("InsideModalOpen");
    console.log(courseId);
    console.log(toDelete) ;
    setToDelete(courseId)
    
    setShowModal(true)
  }

  const handleModalOpenAll = () => {
    console.log("handleModalOpenAll");
    setShowModalAll(true)
  }

  const handleModalClose = () => {
    setShowModal(false)
    setShowModalAll(false)
  }

  const handleDeleteAll= async () => {
    try {
      console.log("before delete All");
      await deleteAllCourses()
      console.log("after Delete All API");
      // close modal
      setShowModalAll(false)
      // refresh  data
      await getCourseData()
      console.log("after Delete All Call");
      
      } catch (error) {
      console.error(error)
      console.log("Failed to Delete All");
      console.error(error)
    }
  }


  const handleDelete = async () => {
    try {
      console.log("before delete");
      console.log(toDelete);
      await deleteCourse(toDelete)
      console.log("after Delete API");
      console.log(toDelete)
      // clear toDelete
      setToDelete('')
      // close modal
      setShowModal(false)
      // refresh  data
      await getCourseData()
      console.log("after View All 2nd Call");
      console.log(toDelete)

    } catch (error) {
      console.error(error)
      console.log("Failed to Delete and View 2nd Time");
      console.error(error)
    }
  } 

  return (
          
    <React.Fragment>
      {/* <div>
             <input type="radio" as={Row} value="CourseId" id="course"
              name="search" />
               <label>View by Course Id</label>

               <input type="radio" as={Row} value="All" id="course"
              name="search" defaultChecked />
               <label>View All</label>
      </div>
      <div>
      <button type="button">Search </button> 
      </div> */}


<Table striped bordered hover>
      {/* <table> */}
          <thead>
            <tr style={{textAlign: "center", color: "White", backgroundColor: "dodgerblue"}}>
            <th>Course Id</th>
            <th>Course Name</th>
            <th>Course Description</th>
            <th></th>
               
          </tr>
          </thead>
         
          <tbody>
           
            {course.map(item => {
          return (
              <CourseItem key={item.courseid} courseData={item} onDelete={handleModalOpen} />
            )
        })}

         </tbody>        
  </Table>
  {/* </table> */}

      <div>
      <button type="button" name="delall" value="delall" onClick={handleModalOpenAll}>Delete All </button> 
      </div>
      
  
     
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
      <Modal show={showModalAll} onHide={handleModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Courses</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to Delete All Courses?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleModalClose}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleDeleteAll}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </React.Fragment>
  )
}