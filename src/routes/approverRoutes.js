import { Route, Switch } from 'react-router-dom'
import { ViewAllApprover } from '../pages/Approver/ViewAllApprover'
import { AddApprover }     from '../pages/Approver/AddApprover'
import {ViewOneApproval} from '../pages/Approver/ViewOneApproval'
import {DeleteApprover} from  '../pages/Approver/DeleteApprover'
import {DeleteAllApprovals} from '../pages/Approver/DeleteAllApprovals'
import {EditApproval} from '../pages/Approver/EditApproval'

 

export const ApproverRoutes = (props) => {
  return (
    <Switch>
      <Route path={`${props.path}/all`} component={ViewAllApprover} />
      <Route path={`${props.path}/add`} component={AddApprover} />
      <Route path={`${props.path}/oneApproval`} component={ViewOneApproval} />
      {/* <Route path={`${props.path}/edit/:demoId`} component={EditApprover} /> */}
      <Route path={`${props.path}/edit`} component={EditApproval} />
      <Route path={`${props.path}/delete`} component={DeleteApprover} />
      {/* <Route path={`${props.path}/delete/:demoId`} component={DeleteApprover} /> */}
      <Route path={`${props.path}/deleteAll`} component={DeleteAllApprovals} />
    </Switch>
  )
}