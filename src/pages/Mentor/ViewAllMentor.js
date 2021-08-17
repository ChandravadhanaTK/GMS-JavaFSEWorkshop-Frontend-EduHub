import { useSelector } from 'react-redux'
import { Card } from 'react-bootstrap'

import { MentorItem } from '../../components/Mentor/MentorItem'

export const ViewAllMentor = () => {
  const mentor = useSelector(state => state.mentor)

  const mentorList = [
    {name:"Chandra"},
    {name:"Nagarjuna"},
    {name:"Abhijeet"},
  ]

  return (
    <Card>
      {mentorList.map(item => {
        console.log(JSON.stringify(item));
        return (
          <MentorItem mentorDataItem={item} key={item.name} />
        )
      })}
    </Card>
  )
}