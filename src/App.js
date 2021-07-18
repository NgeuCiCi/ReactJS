import React from 'react';
import './App.css';
import DienThoai from './DienThoai';
import Home from './Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Rigister from './Register';
import Hoidap from './Hoidap';
import Login from './Login';
import Details from './Details';
import PhuKien from './PhuKien';
import test from './test';
/* import Icon from './src/Icon';
 */
function App() {
  return (
    <Router>
      <div >

        <Switch >
          <Route path="/" exact component={Home} />
          <Route path="/home" component={Home} />
          <Route path="/dienThoai" component={DienThoai} />
          <Route path="/details" component={Details} />
          <Route path="/phuKien" component={PhuKien} />
          <Route path="/login" component={Login} />
          <Route path="/rigister" component={Rigister} />
          <Route path="/hoidap" component={Hoidap} />
          <Route path="/test" component={test} />



        </Switch>


      </div>
    </Router>

  );
}



export default App;
