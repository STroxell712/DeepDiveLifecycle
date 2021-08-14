import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Discussion from "./discussion";
import Rules from "./rules";
import Workflow from "./workflow";


export default function() {
    return (
      <div>
        <Switch>
            <Route exact path ="/" component ={Discussion} />
            <Route  path ="/rules" component ={Rules} />
            <Route  path ="/workflow" component ={Workflow} />
        </Switch>
        </div>
               
        
    );
  }
