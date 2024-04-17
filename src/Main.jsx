import React from 'react'
import {Routes, Route} from "react-router-dom"
import Home from './Home'
import Login from './Log/Login'
import Register from './Log/Register'
import Dashboard from './Log/Dashboard'

function Main() {
  return (
    <div>
        <Routes>
            <Route path='/login'  element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/' element={<Home />} />
            <Route path='/dashboard' element={<Dashboard />} />
        </Routes>
    </div>
  )
}

export default Main