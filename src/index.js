import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Splash from './routes/Splash/Splash'
import oneK from './routes/oneK/oneK'
import twentyK from './routes/twentyK/twentyK'
import * as serviceWorker from './serviceWorker';

const routing = ( 
    <Router>
      <div id='desktopView'>
        <Switch id='MainApp'>
          <Route exact path="/" component={Splash} />
        </Switch>
        <Route exact path='/oneK' component={oneK}/>
        {/* <Route exact path='/sixK' component={sixK}/> */}
        {/* <Route exact path='/tenK' component={tenK}/> */}
        <Route exact path='/twentyK' component={twentyK}/>
      </div>
    </Router>
  )


ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
