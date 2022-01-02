import React from 'react'

const Navbar=()=>{

  return(
    <div>
    <nav className='ui raisedvery padded segment'>
    <a className='ui teal invrted segment'> Image Search engine</a>
    <div className='ui right floated header'>
<button className='ui button'><a href="./home"> Home</a></button>
<button className='ui button'><a href="./about"> About us</a></button>
<button className='ui button'><a href="./contact"> Contact Us</a></button>
    </div></nav>></div>
  )
}

export default Navbar;
