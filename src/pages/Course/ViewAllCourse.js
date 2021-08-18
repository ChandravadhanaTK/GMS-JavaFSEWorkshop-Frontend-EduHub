import { useSelector } from 'react-redux'
import { Card } from 'react-bootstrap'

import { CourseItem } from '../../components/Course/CourseItem'

export const ViewAllCourse = () => {
  const course = useSelector(state => state.course)

  const courseList = [
    {name:"Java"},
    {name:"Spring"},
    {name:"React"},
  ]

  return (
    <Card>
      {courseList.map(item => {
        console.log(JSON.stringify(item));
        return (
          <CourseItem courseDataItem={item} key={item.name} />
        )
      })}
    </Card>
  )
}