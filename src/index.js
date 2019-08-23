import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './routes/Home'
import './index.css';
import * as serviceWorker from './serviceWorker';


// const routing = (
//     <Router>
//       <div>
//         <Route component={Navbar}/>
//         <Route exact path="/" component={Home} />
//         <Route component={Footer}/>
//       </div>
//     </Router>
// )


const routing = ( 
    <Router>
      <div id='desktopView'>
        <Route component={Navbar}/>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
        <Route component={Footer}/>
      </div>
    </Router>
  )


ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
