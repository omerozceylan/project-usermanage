import { useState } from 'react'
import { Route, Routes, Link, NavLink } from 'react-router-dom'
import Home from './components/home'
import About from './components/about'
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
          <Link to="/About">
            <button>About</button>
          </Link>
          <Link to="/Users">
            <button>Users</button>
          </Link>
        </nav>
        
        <Routes>
          <Route path='/' element={<Home></Home>}>
          </Route>
          <Route path='/About' element={<About></About>}>
          </Route>
          <Route path='/Users' element={<Users></Users>}>
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
