import React from 'react';
import './App.css';
import ComplimentApp from './components/compliment/ComplimentApp';
import Contact from './components/Contact/Contact';
import NavBar from './components/Header/NavBar';
import { Route} from 'react-router-dom'


function App() {
  return (
    <React.Fragment>

   
    <NavBar>
        {/* <Route path='/ComplimentApp' component={ComplimentApp} />
        <Route path='/contact' component={Contact} /> */}
        <ComplimentApp/>
    
    

    </NavBar>
  

    </React.Fragment>
  );
}

export default App;
