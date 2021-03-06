import './App.css';
import {  BrowserRouter as Router,  Switch,  Route} from "react-router-dom";

import Index from './pages/Index';
import Login from './pages/Login';
import Registro from './pages/Registro';
import Admin from './pages/AdminPages/Admin';
import LayoutPublic from './layouts/LayoutPublic';
import LayoutPrivate from './layouts/LayoutPrivate';
import LayoutAuth from './layouts/LayoutAuth'
import Clientes from './pages/AdminPages/Clientes';
import Prendas from './pages/AdminPages/Prendas';

function App() {
  return (
    <div >
      <Router>
        <Switch>
          <Route path= {['/AdminPages','/AdminPages/Clientes', '/AdminPages/Prendas']}>
            <LayoutPrivate>
              <Switch>
                <Route path = '/AdminPages/Clientes'>
                  <Clientes/>              
                </Route>
                <Route path = '/AdminPages/Prendas'>
                  <Prendas/>
                </Route>                
                <Route path = '/AdminPages'>
                  <Admin/>
                </Route>
              </Switch>
            </LayoutPrivate>
          </Route>
          <Route path= {['/Login', '/Registro']}>
            <LayoutAuth>
              <Route path = '/Login'>
                <Login/>
              </Route>
              <Route path = '/Registro'>
                <Registro/>
              </Route>
            </LayoutAuth>
          </Route>
          <Route path = {['/']}>
            <LayoutPublic>
              <Route path = '/'>
                <Index/>
              </Route>
            </LayoutPublic>
          </Route>     
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
