
import { useState, useEffect } from 'react'
import { useParams, useHistory } from 'react-router'
import { Card, Button, Form } from 'react-bootstrap'
import { getCourseById , updateCourse } from '../../features/course/courseAPI'

export const EditCourse = () => {
  const { courseId } = useParams()
  const history = useHistory()
  const [courseItem, setCourseItem] = useState({ courseId: '',courseName: '',courseDesc: '',skillReqd: '',createdOn: '',lastUpdatedOn: '' });
    
      
   

  console.log('entered edit course')

 useEffect(async () => {
  try {
    console.log(courseId);
    const coursedata = await getCourseById(courseId);
    console.log('after get 1 API');
    console.log(coursedata);

    setCourseItem(coursedata);
    console.log('courseItem below');
    console.log(courseItem);

  } catch (error) {
    console.error(error)
  }
}, [])

const handleInputcourseIdChange = (e) => {
  setCourseItem({
    ...courseItem,
    courseId: e.target.value
  })
}

const handleInputcourseNameChange = (e) => {
  setCourseItem({
    ...courseItem,
    courseName: e.target.value
  })
}

const handleInputcourseDescChange = (e) => {
  setCourseItem({
    ...courseItem,
    courseDesc: e.target.value
  })
}

const handleInputskillReqdChange = (e) => {
  setCourseItem({
    ...courseItem,
    skillReqd: e.target.value
  })
}

const handleInputcreatedOnChange = (e) => {
  setCourseItem({
    ...courseItem,
    createdOn: e.target.value
  })
}

const handleInputlastUpdatedOnChange = (e) => {
  setCourseItem({
    ...courseItem,
    lastUpdatedOn: e.target.value
  })
}
      const handleSubmit = async (event) => {

          event.preventDefault()
          console.log(courseItem)
          
        console.log('before try of edit');
    
        try {
          console.log('inside try of edit');
          await updateCourse(courseItem)
          console.log('after await of edit');
          
          
        } catch (error) {
          console.error(error)
        }

        history.push('/course/all')
       
      }

      const handleCancel = (e) => {
        history.push('/course/all')
       }
    
    
  return (
    <Card>
      <Card.Body>
        <Card.Title>Edit Course</Card.Title>
        <Card.Text>
        <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicName" size="sm">
        <Form.Group className="mb-3" controlId="formBasiccourseId">
          <Form.Label>Course Id</Form.Label>
          <Form.Control type="text" value = {courseItem.courseId} onChange={handleInputcourseIdChange} readOnly />
            </Form.Group>
          <Form.Group className="mb-3" controlId="formBasiccourseName" >
            <Form.Label>Course Name</Form.Label>
            <Form.Control type="text" value = {courseItem.courseName} onChange={handleInputcourseNameChange} />
         </Form.Group>
          <Form.Group className="mb-3" controlId="formBasiccourseDesc">
            <Form.Label>Course Description</Form.Label>
            <Form.Control type="text" value = {courseItem.courseDesc} onChange={handleInputcourseDescChange} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicskillReqd">
            <Form.Label>Skill Required</Form.Label>
            <Form.Control type="text" value = {courseItem.skillReqd} onChange={handleInputskillReqdChange} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasiccreatedOn">
            <Form.Label>Created On</Form.Label>
            <Form.Control type="text" value = {courseItem.createdOn} onChange={handleInputcreatedOnChange} readOnly />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasiclastUpdatedOn">
            <Form.Label>Last Updated On</Form.Label>
            <Form.Control type="text" value = {courseItem.lastUpdatedOn} onChange={handleInputlastUpdatedOnChange} readOnly />
          </Form.Group>
          </Form.Group>
          
          <Button variant="primary" style={{ marginRight: 15 }  } type="submit">
            Submit
          </Button>
          <Button variant="secondary"  onClick={handleCancel}>
            Cancel
          </Button>

        </Form>
        </Card.Text>
      </Card.Body>
    </Card>
  )
}