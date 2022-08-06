import React from 'react'
import {Link} from 'react-router-dom'
import { NavBar,Container,NavCon, Logo,Menu } from '../styles/styles'


const Nav = () => {
  return (
    <NavBar>
        <Container>
            <NavCon>
                  <div>
                       <Logo to="/">KeungXIONG</Logo>
                  </div>
              <Menu>
                 <li>
                    <Link to="/">Home</Link>
               
                </li>
                 <li>
               
                    <Link to="/about">About</Link>
                </li>
              </Menu>
          </NavCon>
        </Container>
    </NavBar>
  )
}

export default Nav