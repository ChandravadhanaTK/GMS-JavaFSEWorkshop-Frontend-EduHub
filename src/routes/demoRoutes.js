import { Route, Switch } from 'react-router-dom'

import { ViewAllDemo, AddDemo, EditDemo } from '../pages/Demo'

export const DemoRoutes = (props) => {
  return (
    <Switch>
      <Route path={`${props.path}/all`} component={ViewAllDemo} />
      <Route path={`${props.path}/add`} component={AddDemo} />
      <Route path={`${props.path}/edit/:demoId`} component={EditDemo} />
    </Switch>
  )
}