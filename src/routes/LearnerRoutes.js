import { Route, Switch } from 'react-router-dom'

import { ViewLearner } from '../pages/Learner/ViewLearner'
import { AddLearner } from '../pages/Learner/AddLearner'
import { EditLearner } from '../pages/Learner/EditLearner'
import { LearnerFutureDevelopment } from '../pages/Learner/LearnerFutureDevelopment'

export const LearnerRoutes = (props) => {
  return (
    <Switch>
      <Route path={`${props.path}/view`} component={ViewLearner} />
      <Route path={`${props.path}/add`} component={AddLearner} />
      <Route path={`${props.path}/edit`} component={EditLearner} />
      <Route path={`${props.path}/futureUpdates`} component={LearnerFutureDevelopment} />

    </Switch>
  )
}