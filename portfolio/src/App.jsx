
import Home from "../../../portfoliov2/portfolio/src/Pages/Home"
import About from "../../../portfoliov2/portfolio/src/Pages/About"
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {

  return (
    <>
      <div className="App">
          <Router>
                  <Routes>
                      <Route path='/' element={<Home />}></Route>
                      <Route path='/about' element={<About />}></Route>
                  </Routes>
          </Router>
      </div>
    </>
  )
}

export default App
