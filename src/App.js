import Container from 'react-bootstrap/Container'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'

import { NavigationBar } from './components/NavigationBar'
import { Home } from './pages/Home'
import { Demo } from './pages/Demo'

function App() {
  return (
    <Router>
      <NavigationBar />
      <Container fluid>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/demo" component={Demo} />
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
