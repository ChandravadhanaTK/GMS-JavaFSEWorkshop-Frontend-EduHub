import { Route, Switch } from 'react-router-dom'

import { Home } from '../pages/Home'
import { Demo } from '../pages/Demo'
import { Mentor } from '../pages/Mentor'
import { Course } from '../pages/Course'
import { Learner } from '../pages/Learner'

export const PageRoutes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/demo" component={Demo} />
      <Route path="/mentor" component={Mentor} />
      <Route path="/course" component={Course} />
      <Route path="/learner" component={Learner} />
    </Switch>
  )
}