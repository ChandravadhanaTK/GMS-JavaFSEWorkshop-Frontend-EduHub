import { Route, Switch } from 'react-router-dom'

import { ViewAllUser, AddUser, EditUser } from '../pages/User'

export const UserRoutes = (props) => {
  return (
    <Switch>
      <Route path={`${props.path}/all`} component={ViewAllUser} />
      <Route path={`${props.path}/add`} component={AddUser} />
      <Route path={`${props.path}/edit/:userId`} component={EditUser} />
    </Switch>
  )
}