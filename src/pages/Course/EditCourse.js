import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Card, Button, Form } from 'react-bootstrap'
import { updateCourse } from '../../features/course/courseAPI'

export const EditCourse = () => {


 const [coursename, setCourseName] = useState('');
 const [coursedesc, setCourseDesc] = useState('');
 const [skillreqd, setSkillReqd] = useState('');
//  const [createdon, setCreatedOn] = useState('2021-08-24T18:29:03.14700');
//  const [lastupdatedon, setLastUpdatedon] = useState('2021-08-24T18:29:03.14700');


    const history = useHistory()
    // const [form, setForm] = useState({
    //   name: ''
    // })
    const handleInputCourseNameChange = (event) => {
      const updatedValue = event.target.value
      setCourseName( updatedValue )
    }
  
    const handleInputCourseDescChange = (event) => {
      const updatedValue = event.target.value
      setCourseDesc( updatedValue )
    }
  
    const handleInputSkillReqdChange = (event) => {
      const updatedValue = event.target.value
      setSkillReqd( updatedValue )
    }
  
      const handleSubmit = async (event) => {
      
        const course = {  
                          
                         
                          courseName        : coursename,
                          courseDesc        : coursedesc,
                          skillReqd         : skillreqd,
                                                  
                        };
    
        console.log(course);
        console.log('before try of edit');
    
        try {
          console.log('inside try of edit');
          await updateCourse(course)
          console.log('after await of edit');
          
        } catch (error) {
          console.error(error)
        }
    
       
      }
    
    
  return (
    <Card>
      <Card.Body>
        <Card.Title>Edit Course</Card.Title>
        <Card.Text>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicName" size="sm">
            <Form.Label>Course Name</Form.Label>
            <Form.Control value={coursename} type="text" size="sm" onChange={handleInputCourseNameChange} />
         </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCourseDesc">
            <Form.Label>Course Description</Form.Label>
            <Form.Control value={coursedesc} type="text" size="sm" onChange={handleInputCourseDescChange} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicSkillReqd">
            <Form.Label>Skill Required</Form.Label>
            <Form.Control value={skillreqd} type="text" size="sm" onChange={handleInputSkillReqdChange} />
          </Form.Group>
          
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
        </Card.Text>
      </Card.Body>
    </Card>
  )
}