import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Card, Button, Form } from 'react-bootstrap'
import { addMentor } from '../../features/mentor/mentorAPI'

export const AddMentor = () => {
  const history = useHistory();
  const [userId, setUserId] = useState();
  const [startDateTime, setStartDateTime] = useState('');
  const [endDateTime, setEndDateTime] = useState('');
  const [mentoringSkill, setMentoringSkill] = useState('');
  const [mentoredHours, setMentoredHours] = useState(0);
  const [mentorRating, setMentorRating] = useState('');
  const [aboutMentor, setAboutMentor] = useState('');
    
  const handleInputUserIdChange = (event) => {
    const updatedValue = event.target.value;
    setUserId( updatedValue );
  }

  const handleStartDateTimeChange = (event) => {
    const startdatetimelocal = event.target.value;
    console.log(startdatetimelocal);

    setStartDateTime(startdatetimelocal.concat(":00"));
  }

  const handleEndDateTimeChange = (event) => {
    const enddatetimelocal = event.target.value;
    console.log(enddatetimelocal);

    setEndDateTime(enddatetimelocal.concat(":00")); 
  }

  const handleInputSkillChange = (event) => {
    const updatedValue = event.target.value
    setMentoringSkill(updatedValue);
  }
  
  const handleInputHoursChange = (event) => {
    const updatedValue = event.target.value
    updatedValue  > 0 
                  ? setMentoredHours(updatedValue)
                  : setMentoredHours(0)
  }

  const handleInputRatingChange = (event) => {
    const updatedValue = event.target.value
    setMentorRating(updatedValue)
  }

  const handleAboutMentorChange = (event) => {
    const updatedValue = event.target.value
    setAboutMentor(updatedValue)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const mentor = {
                      userid          : userId,
                      startdatetime   : startDateTime,
                      enddatetime     : endDateTime,
                      mentoringskill  : mentoringSkill,
                      mentoredhours   : mentoredHours,
                      mentorrating    : mentorRating,
                      aboutmentor     : aboutMentor
                    };

    console.log(mentor);

    try {
      await addMentor(mentor)

      history.push('/mentor/all')
    } catch (error) {
      console.error(error)
    }

    history.push('/mentor/all')
  }

  return (
    <Card>
      <Card.Body>
        <Card.Title>Add Mentor</Card.Title>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicUserId" size="sm">
            <Form.Label>User Id</Form.Label>
            <Form.Control value={userId} type="text" placeholder="Enter User id of Mentor" size="sm" onChange={handleInputUserIdChange} />
            <Form.Text className="text-muted"> User id of Mentor </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicSkill">
            <Form.Label>Mentoring Skill</Form.Label>
            <Form.Control value={mentoringSkill} type="text" placeholder="Enter skill" size="sm" onChange={handleInputSkillChange} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicStartDateTime">
            <Form.Label>Start Date / Time</Form.Label>
            <Form.Control value={startDateTime} type="datetime-local" size="sm" onChange={handleStartDateTimeChange} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEndDateTime">
            <Form.Label>End Date / Time</Form.Label>
            <Form.Control value={endDateTime} type="datetime-local" size="sm" onChange={handleEndDateTimeChange} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicHours">
            <Form.Label>Mentored Hours</Form.Label>
            <Form.Control value={mentoredHours} type="number" placeholder="Enter the number of Hours mentored" size="sm"  onChange={handleInputHoursChange} />
          </Form.Group>            
          <Form.Group className="mb-3" controlId="formBasicRating">
            <Form.Label>Mentor's Rating</Form.Label>
            <Form.Control value={mentorRating} type="text" placeholder="Enter the rating of mentor" size="sm" onChange={handleInputRatingChange} />
          </Form.Group>              
          <Form.Group className="mb-3" controlId="formAboutMentor">
            <Form.Label>About Mentor</Form.Label>
            <Form.Control value={aboutMentor} type="text" placeholder="Enter details of mentor" onChange={handleAboutMentorChange} />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Card.Body>
    </Card>
  )
}