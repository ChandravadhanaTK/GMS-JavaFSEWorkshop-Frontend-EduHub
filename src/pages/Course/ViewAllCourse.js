import React, {Component} from 'react';
import { Card, Form, Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import { Row, Col } from 'react-bootstrap';
import { CourseItem } from '../../components/Course/CourseItem';

export const ViewAllCourse = () => {
// const course = useSelector(state => state.course)

  const courseList = [
    {name:"Java"},
    {name:"Spring"},
    {name:"React"},
  ]

  // searchClicked:false;
     // invalidInput:false;
    //const updatedValue = event.target.value

    const handleChange = () => {
      // alert("Select here")
 <Card>
      <Card.Body>
        <Card.Title>Add Course</Card.Title>
        <Card.Text>
      <Form>
        <Form.Group className="mb-3" controlId="FormBasicName">
          <Form.Label>Course Id</Form.Label>
          <Form.Control value={Form.courseid} type="text" placeholder="Enter Course id"/>
               
        </Form.Group>
  </Form>
  </Card.Text>
</Card.Body>
</Card>
    }
    
  return (
  <Card> 
      <Card.Body>
        <Card.Title>View Course</Card.Title>
        <Card.Text>
          <Form>

            {/* <input type="radio" as={Row} value="CourseId" id="course"
              onChange={handleChange} name="search" />
            <label>View by Course Id</label>
            {'               '} */}

            <input type="radio" as={Row} value="CourseId" id="course"
              onChange={
              <button>Click me</button>
              } name="search" />
               <label>View by Course Id</label>
            {'               '} }
                                            
            <input type="radio" as={Col} value="All" id="all"
              onChange={handleChange} name="search" defaultChecked/>
            <label>View All Courses</label>
          </Form>

          <button value="hello!" onClick={e => alert(e.target.value)}>
      Click me!
    </button>'
        {/* {this.state.search !== 'All' &&
              <Form>
                <input type="text" onChange={handleChange} name="userinput" />
              </Form>
         } */}
        </Card.Text>
       </Card.Body>
    </Card>

        
  )
        }
    //   }
    //   <div>
    //       <button type="button" onClick={onSubmit}>Search Course </button> 
    //       <button type="button" onClick={onReset}>Clear</button>
    //       {/* {this.state.invalidInput && 
    //         <div className="alert alert-warning">Please provide search key</div>
    //       } */}
    //   </div>
    // </Card.Body>
    // </Card>
   

