import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './components/pages/Home';



class App extends React.Component {
  constructor(props) {
    super(props);

  }

  

  render() {
    return (
      <Routes>
        <Route path='/' element={<Home/>}/>
        {/* <Route path='/aminusers' element={<UserView/>}/> */}
      </Routes>
    );
  }
}


export default App;