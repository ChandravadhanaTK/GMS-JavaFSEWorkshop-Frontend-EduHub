import Container from 'react-bootstrap/Container'
import { BrowserRouter as Router } from 'react-router-dom'

import { NavigationBar } from './components/NavigationBar'

import { PageRoutes } from './routes/pageRoutes'

function App() {
  return (
    <Router>
      <NavigationBar />
      <Container fluid>
        <PageRoutes />
      </Container>
    </Router>
  );
}

export default App;
