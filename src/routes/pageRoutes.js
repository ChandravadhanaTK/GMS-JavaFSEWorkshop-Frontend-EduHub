import { Route, Switch } from 'react-router-dom'

import { Home } from '../pages/Home'
import { Demo } from '../pages/Demo'

export const PageRoutes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/demo" component={Demo} />
    </Switch>
  )
}