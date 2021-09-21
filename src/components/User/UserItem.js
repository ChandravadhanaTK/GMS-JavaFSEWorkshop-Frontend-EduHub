import { useHistory } from 'react-router-dom'
import { Card, Button } from 'react-bootstrap'

export const UserItem = (props) => {
  const history = useHistory()
  return (
            <tr style={{textAlign: "center"}}>
              <td>{props.userData.id}</td>
              <td>{props.userData.userName}</td>
              <td>{props.userData.role}</td>
              <td>{props.userData.experience}</td>
              <td>
                <Button variant="warning" style={{ marginRight: 35 }} onClick={() => history.push(`/user/edit/${props.userData.id}`)}>
                 Edit
                </Button>
                <Button variant="info" style={{ marginRight: 35 }} onClick={() => history.push(`/user/view/${props.userData.id}`)}>
                 View
                </Button>
                <Button variant="danger" onClick={() => props.onDelete(props.userData.id)}>
                 Delete
                </Button>
              </td>
            </tr>  
         )
}