import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LayoutPos from './components/LayoutPos';
import UserView from './components/users/UserView';

class App extends React.Component {
  constructor(props) {
    super(props);

  }

  

  render() {
    return (
      <Routes>
        <Route path='/' element={<LayoutPos/>}/>
        <Route path='/aminusers' element={<UserView/>}/>
      </Routes>
    );
  }
}


export default App;