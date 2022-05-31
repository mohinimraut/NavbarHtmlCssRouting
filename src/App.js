import React from 'react'
import Navbar from './Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route,


} from "react-router-dom";
import Home from './Home';
import About from './About';
import ContactUS from './ContactUS';
import Feedback from './Feedback';
import Services from './Services';

function App() {
  return (
    <>
      <Router>
        <Navbar />

        <Routes>
          <Route path="/home" element={<Home />}>
          </Route>
          <Route path="/about" element={<About />}>
          </Route>
          <Route path="/contactus" element={<ContactUS />}>
          </Route>

          <Route path="/feedback" element={<Feedback />}>
          </Route>
          <Route path="/services" element={<Services />}>
          </Route>
          
          {/* <Route path="/" element={<h1>Welcome</h1>}></Route> */}

          <Route path="/" element={<Home />}></Route>
          <Route path='*' element={<h1>Page not Found</h1>}></Route>

        </Routes>
      </Router>

    </>
  )
}

export default App