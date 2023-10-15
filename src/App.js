import './App.css';
import React from 'react';

import { Container, CssBaseline } from '@mui/material';
import Users from "./Users/Users";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Counter from './Counter/Counter';
import User from './Users/User';
import Header from './Header/Header';
function App() {
  

  return(
    <div className="App">
    <Container>
    <Header />
    <BrowserRouter>
      <Routes>
        <Route index element={<Users />}/>
        {/* <Route index path='/user/:userId' element={<User />}/> */}
        <Route path='counter' element={<Counter />}/>
      </Routes>
    </BrowserRouter>
    <CssBaseline />
    </Container>
    
    
    
    </div>
  );
}

export default App;
