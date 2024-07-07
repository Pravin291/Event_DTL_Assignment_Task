import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import SignIn from './Pages/SignIn'
import DataManagement from './Pages/DataManagement'
import SignUp from './Pages/SignUp'
export default function App() {
  return (
    <BrowserRouter>
     <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/signin' element={<SignIn/>} />
      <Route path='/datamanagement' element={<DataManagement/>} />
      <Route path='/signup' element={<SignUp/>} />
     </Routes>
    </BrowserRouter>
  )
}
