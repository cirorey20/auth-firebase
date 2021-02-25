import React, { Fragment } from "react";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Log from './components/admin/Log';
import AdminConfig from './components/admin/AdminConfig';
import SignUp from './components/admin/SignUp';

import PrivateRoute from './components/PrivateRoute';
import { AuthProvider } from './context/AuthContext';

import Navbar from './components/Navbar';
import Home from './components/Home';
import Nosotros from './components/Nosotros';
import Contacto from './components/Contacto';

function App() {
  return (
  
    <div className="container bg-dark">
      <AuthProvider>
        <Router>
          <Navbar/>

          <Switch>
            <Route exact path="/login/mi-tienda-online" component={Log}></Route>
            <PrivateRoute exact path="/admin/mi-tienda-online" component={AdminConfig}></PrivateRoute>




            
          </Switch>
        </Router>
      </AuthProvider>
      
      
    </div>
    
  );
}

export default App;
/* 
<Route exact path="/" component={Home}></Route>
          <Route exact path="/nosotros" component={Nosotros}></Route>
          <Route exact path="/contacto" component={Contacto}></Route>
 */