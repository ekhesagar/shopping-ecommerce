import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Homepage from './pages/homepage/homepage.component.jsx'
function App() {

  const HatsPage = (props)=>{
    console.log(props)
    return (
      <div>
        Hats page
      </div>
    )
  }

  return (
    <div>
      <Route exact path='/' component={Homepage} />
      <Route exact path='/shop/hats' component={HatsPage} />
    </div>
  );
}

export default App;
