import { Card, Button, Form } from 'react-bootstrap'
import { MentorItem } from '../../components/Mentor/MentorItem'
import { useState, useEffect } from 'react'
import { useParams, useHistory } from 'react-router'
import { getMentorByUAId, updateMentor } from '../../features/mentor/mentorAPI'


export const EditMentor = () => {
  const { userId,availabilityId } = useParams()
  console.log(`userId ${userId}` , `availabilityId ${availabilityId}` );
  console.log(useParams())
  const history = useHistory()
  const [mentorItem, setUserItem] = useState({userid: '',availabilityid: '',startdatetime: '',enddatetime: '',mentoringskill: '', mentoredhours: '',mentorrating: '',aboutmentor: '',lastupdatedon: '' })

  useEffect(async () => {
    try {
      console.log(userId)
      const editData = await getMentorByUAId(userId,availabilityId)
      console.log(editData)

      setUserItem(editData[0])
    } catch (error) {
      console.error(error)
    }
  }, [])

  const handleMentorChange = (e) => {
    setUserItem({
      ...mentorItem,
      userid: e.target.value
    })
  }
  const handleMentorstartdateChange = (e) => {
    setUserItem({
      ...mentorItem,
      startdatetime: e.target.value
    })
  }
  const handleMentorenddateChange = (e) => {
    setUserItem({
      ...mentorItem,
      enddatetime: e.target.value
    })
  }
  
  const handleMentorskillChange = (e) => {
    setUserItem({
      ...mentorItem,
      mentoringskill: e.target.value
    })
  }

  const handleMentorhrsChange = (e) => {
    setUserItem({
      ...mentorItem,
      mentoredhours: e.target.value
    })
  }

  const handleMentorratingChange = (e) => {
    setUserItem({
      ...mentorItem,
      mentorrating: e.target.value
    })
  }

  const handleAboutmentorChange = (e) => {
    setUserItem({
      ...mentorItem,
      aboutmentor: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(mentorItem)
    try {
      await updateMentor(mentorItem)

      history.push('/mentor/all')
    } catch (error) {
      console.error(error)
    }
  }
  return (
    <Card>
    <Card.Body>
      <Card.Title>Edit Mentor</Card.Title>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Availability ID</Form.Label>
          <Form.Control type="text" placeholder="Availability ID" size="sm" value = {mentorItem.availabilityid} readOnly />
          <Form.Text className="text-muted">
            "Read-Only"
          </Form.Text>
          <Form.Group className="mb-3" controlId="formBasicName"></Form.Group>
          <Form.Label>Mentor ID</Form.Label>
          <Form.Control type="text" placeholder="Mentor ID" value = {mentorItem.userid} onChange={handleMentorChange} readOnly />
          <Form.Text className="text-muted">
            "Read-Only"
          </Form.Text>
          <Form.Group className="mb-3" controlId="formBasicName"></Form.Group>
          <Form.Label>Start Date Time</Form.Label>
          <Form.Control type="datetime-local" placeholder="Start Date Time" value = {mentorItem.startdatetime} onChange={handleMentorstartdateChange} />
          <Form.Text className="text-muted">
            "Editable"
          </Form.Text>
          <Form.Group className="mb-3" controlId="formBasicName"></Form.Group>
          <Form.Label>End Date Time</Form.Label>
          <Form.Control type="datetime-local" placeholder="End Date Time" value = {mentorItem.enddatetime} onChange={handleMentorenddateChange} />
          <Form.Text className="text-muted">
            "Editable"
          </Form.Text>
          <Form.Group className="mb-3" controlId="formBasicName"></Form.Group>
          <Form.Label>Mentoring Skill</Form.Label>
          <Form.Control type="text" placeholder="Mentoring Skill" value = {mentorItem.mentoringskill} onChange={handleMentorskillChange} />
          <Form.Text className="text-muted">
            "Editable"
          </Form.Text>
          <Form.Group className="mb-3" controlId="formBasicName"></Form.Group>
          <Form.Label>Mentored Hours</Form.Label>
          <Form.Control type="text" placeholder="Mentored Hours" value = {mentorItem.mentoredhours} onChange={handleMentorhrsChange} />
          <Form.Text className="text-muted">
            "Editable"
          </Form.Text>
          <Form.Group className="mb-3" controlId="formBasicName"></Form.Group>
          <Form.Label>Mentor Rating</Form.Label>
          <Form.Control type="text" placeholder="Mentor Rating" value = {mentorItem.mentorrating} onChange={handleMentorratingChange} />
          <Form.Text className="text-muted">
            "Editable"
          </Form.Text>
          <Form.Group className="mb-3" controlId="formBasicName"></Form.Group>
          <Form.Label>About Mentor</Form.Label>
          <Form.Control type="text" placeholder="About Mentor" value = {mentorItem.aboutmentor} onChange={handleAboutmentorChange} />
          <Form.Text className="text-muted">
            "Editable"
          </Form.Text>
          <Form.Group className="mb-3" controlId="formBasicName"></Form.Group>
          <Form.Label>Last Updated</Form.Label>
          <Form.Control type="text" placeholder="Last Updated" value = {mentorItem.lastupdatedon} readOnly />
          <Form.Text className="text-muted">
            "Read-Only"
          </Form.Text>
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Card.Body>
  </Card>

  )
}