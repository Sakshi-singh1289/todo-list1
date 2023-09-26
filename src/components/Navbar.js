import React from 'react'
import Greet from './Greet'
import { Logout } from './Logout'

export const Navbar = () => {
     return (
          <nav className="navbar navbar-expand-lg navbar-dark" style={{ background: 'white' }}>
               <div className="container-fluid">
                    <div className="header1">
                         <Greet />
                    </div>
                    <div className="d-flex">
                              <Logout />
                    </div>
               </div>
          </nav>
     )
}
