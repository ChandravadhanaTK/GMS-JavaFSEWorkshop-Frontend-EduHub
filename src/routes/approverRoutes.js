import { Route, Switch } from 'react-router-dom'
import { ViewAllApprover } from '../pages/Approver/ViewAllApprover'
import { AddApprover }     from '../pages/Approver/AddApprover'
 

export const ApproverRoutes = (props) => {
  return (
    <Switch>
      <Route path={`${props.path}/all`} component={ViewAllApprover} />
      <Route path={`${props.path}/add`} component={AddApprover} />
      {/* <Route path={`${props.path}/edit/:demoId`} component={EditApprover} /> */}
      {/* <Route path={`${props.path}/delete/:demoId`} component={DeleteApprover} /> */}
      {/* <Route path={`${props.path}/deleteAll`} component={DelteAllApprover} /> */}
    </Switch>
  )
}