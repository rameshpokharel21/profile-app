

import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import './App.css'
import HomeView from './views/homeview/HomeView';
import ProjectView from "./views/projectview/ProjectView"
import ResumeView from './views/resumeview/ResumeView';



function App(){

  return (
   
   <BrowserRouter>
    <nav>
      <Link to ="/">Home | </Link> 
      <Link to="/projects">Projects | </Link>
      <Link to="/resume">Resume </Link>
    </nav>
    <Routes>
      <Route path="/" element={<HomeView />} />
      <Route path="/resume" element={ <ResumeView />} />
      <Route path="/projects" element={<ProjectView/>} />
    </Routes>
   </BrowserRouter>
  )
}

export default App
