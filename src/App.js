import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/HomePage'
import AccountPage from './pages/AccountPage'
import CreateAccountPage from './pages/CreateAccountPage'
import LoginPage from './pages/LoginPage'

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/accountPage' element={<AccountPage/>}/>
            <Route path='/createAccountPage' element={<CreateAccountPage/>}/>
            <Route path='/loginPage' element={<LoginPage/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
