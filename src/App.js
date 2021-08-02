import Container from 'react-bootstrap/Container'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import { Home } from './components/Home'

function App() {
  return (
    <Router>
      <Container fluid>
        <Switch>
          <Route to="/" component={Home} />
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
