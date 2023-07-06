import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './components/pages/Home';
import Error404 from './components/error/Error404';
import Error500 from './components/error/Error500';
import Login from './Login';
import Register from './Register';
import ReservationSystem from './components/pages/ReservationSystem';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  

  render() {
    return (
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/404' element={<Error404/>}/>
        <Route path='/500' element={<Error500/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/reservation' element={<ReservationSystem/>}/>
        {/* <Route path='/aminusers' element={<UserView/>}/> */}
      </Routes>
    );
  }
}


export default App;