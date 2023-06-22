import {Route, Switch} from 'react-router-dom'
import Portfolio from './Main/Portfolio';
import Projects from './Components/Projects';
function App() {
  return (
    <>
    <Switch>
      <Route path='/' exact>
        <Portfolio/>
      </Route>
      <Route path='/projects' exact>
        <Projects/>
      </Route>
    </Switch>
    </>
  );
}

export default App;
