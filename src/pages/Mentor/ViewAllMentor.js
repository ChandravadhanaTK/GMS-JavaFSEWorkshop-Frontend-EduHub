import { Card } from 'react-bootstrap'

import { MentorItem } from '../../components/Mentor/MentorItem'

export const ViewAllMentor = () => {

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