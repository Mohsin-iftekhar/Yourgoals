import React from 'react'
import Link from 'next/link'
import { MDBBtn } from 'mdb-react-ui-kit' 
const Navbar = () => {
  return (
   <nav className='navbar container'>
   <Link href="/">
   <a className='navbar-brand'>YOUR GOALS LIST</a>
   </Link>
   <Link href="/add">
  <MDBBtn>ADD NEW GOAL</MDBBtn>
   </Link>
   </nav>
  )
}

export default Navbar