
import { useState, useEffect } from 'react'
import { useParams, useHistory } from 'react-router'
import { Card, Button, Form } from 'react-bootstrap'
import { getCourseById } from '../../features/course/courseAPI'

export const ViewCourse = () => {
  const { courseId } = useParams()
  const history = useHistory()
  const [courseItem, setCourseItem] = useState({ courseId: '',courseName: '',courseDesc: '',skillReqd: '',createdOn: '',lastUpdatedOn: '' });
    
 
  console.log('entered view course')

 useEffect(async () => {
  try {
    console.log(courseId);
    const coursedata = await getCourseById(courseId);
    console.log('view after get 1 API');
    console.log(coursedata);

    let c=(coursedata.createdOn);
    console.log(coursedata.createdOn);
      c=c+'00';
     console.log(c);
     coursedata.createdOn=c;

     c=(coursedata.lastUpdatedOn);
    console.log(coursedata.lastUpdatedOn);
      c=c+'00';
     console.log(c);
     coursedata.lastUpdatedOn=c;


    setCourseItem(coursedata);
    console.log('courseItem below');
    console.log(courseItem);

  



  } catch (error) {
    console.error(error)
  }
}, [])

const handleOK = (e) => {
  history.push('/course/all')
 }


  return (
    <Card>
      <Card.Body>
        <Card.Title>View Course</Card.Title>
        <Card.Text>
        <Form>
        <Form.Group className="mb-3" controlId="formBasicName" size="sm">
        <Form.Group className="mb-3" controlId="formBasiccourseId">
          <Form.Label>Course Id</Form.Label>
          <Form.Control type="text" value = {courseItem.courseId}  readOnly />
            </Form.Group>
          <Form.Group className="mb-3" controlId="formBasiccourseName"  >
            <Form.Label>Course Name</Form.Label>
            <Form.Control type="text" value = {courseItem.courseName} readOnly />
         </Form.Group>
          <Form.Group className="mb-3" controlId="formBasiccourseDesc">
            <Form.Label>Course Description</Form.Label>
            <Form.Control type="text" value = {courseItem.courseDesc} readOnly />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicskillReqd">
            <Form.Label>Skill Required</Form.Label>
            <Form.Control type="text" value = {courseItem.skillReqd} readOnly />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasiccreatedOn">
            <Form.Label>Created On</Form.Label>
            <Form.Control type="text" value = {courseItem.createdOn} readOnly />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasiclastUpdatedOn">
            <Form.Label>Last Updated On</Form.Label>
            <Form.Control type="text" value = {courseItem.lastUpdatedOn} readOnly />
          </Form.Group>
        </Form.Group>
        <Button variant="primary" type="submit" onClick={handleOK}>
            OK
        </Button>
        
        </Form>
        </Card.Text>
      </Card.Body>
    </Card>
  )
}