import {Route, Switch} from 'react-router-dom'
import { ViewAllApproval } from '../pages/Approval/ViewAllApproval'
import { AddApproval }     from '../pages/Approval/AddApproval'
import {ViewOneApproval} from '../pages/Approval/ViewOneApproval'
import {DeleteApproval} from  '../pages/Approval/DeleteApproval'
import {DeleteAllApprovals} from '../pages/Approval/DeleteAllApprovals'
import {EditApproval} from '../pages/Approval/EditApproval'
import {ApprovalFutureEnhancements} from '../pages/Approval/ApprovalFutureEnhancements'

 

export const ApprovalRoutes = (props) => {
  return (
    <Switch>
      <Route path={`${props.path}/all`} component={ViewAllApproval} />
      <Route path={`${props.path}/add`} component={AddApproval} />
      <Route path={`${props.path}/oneApproval`} component={ViewOneApproval} />
      {/* <Route path={`${props.path}/edit/:demoId`} component={EditApprover} /> */}
      <Route path={`${props.path}/edit`} component={EditApproval} />
      <Route path={`${props.path}/delete`} component={DeleteApproval} />
      {/* <Route path={`${props.path}/delete/:demoId`} component={DeleteApprover} /> */}
      <Route path={`${props.path}/deleteAll`} component={DeleteAllApprovals} />
      <Route path={`${props.path}/futureEnhancements`} component={ApprovalFutureEnhancements} />
    </Switch>
  )
}