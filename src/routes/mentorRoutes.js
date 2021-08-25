import { Route, Switch } from 'react-router-dom'

import { ViewAllMentor, AddMentor, EditMentor, ViewMentor } from '../pages/Mentor'

export const MentorRoutes = (props) => {
  return (
    <Switch>
      <Route path={`${props.path}/all`} component={ViewAllMentor} /> 
      <Route path={`${props.path}/add`} component={AddMentor} />
      <Route path={`${props.path}/edit/:userId`} component={EditMentor} />
    </Switch>
  )
}
//<Route path={`${props.path}/view/:mentorId`} component={ViewMentor} /> 