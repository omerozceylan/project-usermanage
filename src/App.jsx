import { useState } from 'react'
import { Route, Routes, Link, NavLink } from 'react-router-dom'
import User from './components/user'
import Users from './components/users'
import Posts from './components/posts'
import Comments from './components/comments'
import axios from 'axios'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'




function App() {


  return (
    <div className='app'>
      <div className="table">
        <nav>
          <Link to="/">
            <button>Home</button>
          </Link>
        </nav>
        
        <Routes>
          <Route path='/' element={<Users></Users>}>
          </Route>
          <Route path='/User' element={<User></User>}></Route>
          <Route path='/User/:id' element={<User></User>}></Route>
          <Route path='/Comments' element={<Comments></Comments>}></Route>
          <Route path='/Comments/:id' element={<Comments></Comments>}></Route>
          <Route path='/Posts' element={<Posts></Posts>}></Route>
          <Route path='/Posts/:id' element={<Posts></Posts>}></Route>
        </Routes>
      </div>
    </div>
  )
}

export default App
