import React from 'react';
//import SearchInput from './SearchInput'
//import ImageList from './ImageList'
import Navbar from './Navbar'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'

function App() {

  return (<BrowserRouter>
    <div className='App'>
      <Navbar/>
      <Routes>
        <Route exact path='Home' element={<Home />}></Route>
        <Route path='About' element={<About />}></Route>
        <Route path='Contact' element={<Contact />}></Route>
      </Routes>
    </div>
  </BrowserRouter>)
}

export default App;
