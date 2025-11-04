

import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import './App.css'
import HomeView from './views/homeview/HomeView'
import AboutView from './views/AboutView'
import ProjectView from "./views/projectview/ProjectView"


function App(){

  return (
   
   <BrowserRouter>
    <nav>
      <Link to ="/">Home | </Link>
      <Link to="/about">About | </Link>
      <Link to="/projects">Projects</Link>
    </nav>
    <Routes>
      <Route path="/" element={<HomeView />} />
      <Route path="/about" element={<AboutView />} />
      <Route path="/projects" element={<ProjectView/>} />
    </Routes>
   </BrowserRouter>
  )
}

export default App
