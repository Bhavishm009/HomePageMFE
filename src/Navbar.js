import { Link } from 'react-router-dom'
import React from 'react'
import './Navbar.css'
const Navbar = ({ filterItem, menuList }) => {
  return (
    <>
      <nav className='navbar'>
        <div className='btn-group'>
          {
            menuList?.map((curElem, i) => {
              return (
                <button className='btn-group__item' onClick={() => filterItem(curElem)} key={i}>{curElem}</button>
              )
            })
          }
        </div>
        <Link to='/Login'>Login</Link>
        <Link to='/RegisterPage'>Register</Link>
      </nav>
    </>
  )
}

export default Navbar



{/* <Navbar bg="light" variant="light">
<Container>
  <Navbar.Brand href="#home">Navbar</Navbar.Brand>
  <Nav className="me-auto">
    <Nav.Link href="#home">Home</Nav.Link>
    <Nav.Link href="#features">Features</Nav.Link>
    <Nav.Link href="#pricing">Pricing</Nav.Link>
  </Nav>
</Container>
</Navbar> */}