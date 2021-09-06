import { Route, Switch } from 'react-router-dom'

import { ViewAllUser, AddUser, EditUser, ViewUser } from '../pages/User'

export const UserRoutes = (props) => {
  return (
    <Switch>
      <Route path={`${props.path}/all`} component={ViewAllUser} />
      <Route path={`${props.path}/add`} component={AddUser} />
      <Route path={`${props.path}/edit/:id`} component={EditUser} />
      <Route path={`${props.path}/view/:id`} component={ViewUser} />
    </Switch>
  )
}