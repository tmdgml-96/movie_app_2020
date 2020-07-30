import React from 'react';
import './App.css';
import { HashRouter, Route } from 'react-router-dom';
import About from './routes/About';
import Home from './routes/Home';
import Navigaiton from './components/Navigation';
import Detail from './routes/Detail';


function App() {
  return (
    <HashRouter>
      <Navigaiton/>
      <Route path= "/" exact={true} component={Home}></Route>
      <Route path ="/about" component={About} />
      <Route path= "/movie-detail" component= {Detail}/>

    </HashRouter>
  );
}

export default App;
