import './App.css';
import Home from './components/Home';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NotFound from './components/NotFound';

function App() {
  return (
    <Router>
      <Switch>
      <Route exact path="/">
      <Home></Home>
      </Route>
      <Route path="*">
        <NotFound></NotFound>
      </Route>
     </Switch>
    </Router>
  );
}

export default App;
