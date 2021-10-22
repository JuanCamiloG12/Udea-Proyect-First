import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Index from "./pages/Index";
import Login from "./pages/Login";
import Registro from "./pages/Registro";
import Admin from "./pages/AdminPages/Admin";
import LayoutPublic from "./layouts/LayoutPublic";
import LayoutPrivate from "./layouts/LayoutPrivate";
import LayoutAuth from "./layouts/LayoutAuth";
import Ventas from "./pages/AdminPages/Ventas";
import Prendas from "./pages/AdminPages/Prendas";
import { Auth0Provider } from "@auth0/auth0-react";
import Crearventas from "./pages/AdminPages/Crearventas";


function App() {
  return (
    <Auth0Provider
      domain="misiontic-ventasprendas.us.auth0.com"
      clientId="1TUycs7XYgveAahju7NwofT3JdSkRWnP"
      redirectUri={window.location.origin}
    >
      <div>
        <Router>
          <Switch>
            <Route
              path={[
                "/AdminPages/Crearventas",
                "/AdminPages/Ventas",
                "/AdminPages/Prendas",
                "/AdminPages",
              ]}
            >
              <LayoutPrivate>
                <Switch>
                  <Route path="/AdminPages/Crearventas"> 
                    <Crearventas />
                  </Route>
                  <Route path="/AdminPages/Ventas">
                    <Ventas />
                  </Route>
                  <Route path="/AdminPages/Prendas">
                    <Prendas />
                  </Route>
                  <Route path="/AdminPages">
                    <Admin />
                  </Route>
                </Switch>
              </LayoutPrivate>
            </Route>
            <Route path={["/Login", "/Registro"]}>
              <LayoutAuth>
                <Route path="/Login">
                  <Login />
                </Route>
                <Route path="/Registro">
                  <Registro />
                </Route>
              </LayoutAuth>
            </Route>
            <Route path={["/"]}>
              <LayoutPublic>
                <Route path="/">
                  <Index />
                </Route>
              </LayoutPublic>
            </Route>
          </Switch>
        </Router>
      </div>
    </Auth0Provider>
  );
}

export default App;
