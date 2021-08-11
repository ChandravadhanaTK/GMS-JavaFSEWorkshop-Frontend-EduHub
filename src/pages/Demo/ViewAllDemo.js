import { useSelector } from 'react-redux'
import { Card, Button, Form } from 'react-bootstrap'

import { DemoItem } from '../../components/Demo/DemoItem'

export const ViewAllDemo = () => {
  const demo = useSelector(state => state.demo)

  return (
    <Card>
      {demo.dataList.map(item => {
        return (
          <DemoItem demoData={item} key={item.id} />
        )
      })}
    </Card>
  )
}