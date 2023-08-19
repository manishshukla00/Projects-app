import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import TodoApp from './components/TodoApp'
import WeatherApp from './components/Weatherapp'
import Calculator from './components/Calculator'
import Home from './components/Home'
import PageBackground from './components/PageBackground'

const App = () => {
  return (
    <>
    <Router>
      <PageBackground />
      <Nav />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/todoapp' element={<TodoApp />} />
        <Route exact path='/weatherapp' element={<WeatherApp />} />
        <Route exact path='/calculator' element={<Calculator />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
