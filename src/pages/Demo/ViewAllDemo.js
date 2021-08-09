import { Card, Button, Form } from 'react-bootstrap'

import { DemoItem } from '../../components/Demo/DemoItem'

export const ViewAllDemo = (props) => {
  return (
    <Card>
      {props.demoList.map(item => {
        return (
          <DemoItem demoData={item} key={item.id} />
        )
      })}
    </Card>
  )
}