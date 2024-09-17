import React from 'react'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import Login  from './Components/Login'
import Home from './Components/Home'
import PropertyList from './Components/PropertyList'
import PropertyDetails from './Components/PostProperty'
import Contact from './Components/Contact'
import About from './Components/About'
import Blog from './Components/Blog'
import PostProperty from './Components/PostProperty'

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/login' element={<Login/>}/>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/about' element={<About/>}/>
        <Route exact path='/blog' element={<Blog/>}/>
        <Route exact path='/properties' element={<PropertyList/>}/>
        <Route exact path='/properties/:id' element={<PropertyDetails/>}/>
        <Route exact path='/postproperty' element={<PostProperty/>}/>
        <Route exact path='/contact' element={<Contact/>}/>
      </Routes>
    </Router>
  );
}

export default App;
