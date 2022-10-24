import React from 'react'
import { NavLink } from 'react-router-dom'

import '../styles/components/header.scss'


const Header = () => {
  return (
    <header className='c-header'>
      <div className='container'>
        <nav className='c-nav'>
              <ul className='m-0 p-0 d-flex align-items-center justify-content-end'>
                  <li>
                    <NavLink to="/">To Do List</NavLink>
                  </li>
                  <li>
                    <NavLink to="/snippets">Snippets</NavLink>
                  </li>
              </ul>
          </nav>
      </div>
    </header>
  )
}

export default Header