import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './Components/Auth/Login';
import NuevaCuenta from './Components/Auth/NuevaCuenta';
import Projects from './Components/Projects/Projects';



import ProyectoState from './Context/Proyectos/ProyectoState';

function App() {
  return (
    <ProyectoState>
        <Router>
          <Switch>
              <Route exact path="/" component={Login} />
              <Route exact path="/nueva-cuenta" component={NuevaCuenta} />
              <Route exact path="/proyectos" component={Projects} />
          </Switch>
        </Router>
    </ProyectoState>
  );
}

export default App;
