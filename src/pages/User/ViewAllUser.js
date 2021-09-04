import { useSelector } from 'react-redux'
import { Card, Button, Form } from 'react-bootstrap'

import { UserItem } from '../../components/User/UserItem'

export const ViewAllUser = () => {
  const user = useSelector(state => state.user)

  return (
    <Card>
      {user.dataList.map(item => {
         console.log(JSON.stringify(item));
        return (
          <UserItem userData={item} key={item.id} />
        )
      })}
    </Card>
  )
}