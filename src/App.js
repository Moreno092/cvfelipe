import { BrowserRouter, Switch, Route } from 'react-router-dom';
import React from 'react';


import './App.css';
import {Frontpage} from './Pages/Frontpage';
import {Navbar} from './Pages/Navbar'


    
    
    
    
    const App = () => (
      
         <div> 
           <Navbar /> 
           <BrowserRouter>
        <Switch>
        <Route path="/" component={Frontpage} />
        </Switch> 
        </BrowserRouter>
        </div>
        
       )

export default App;
