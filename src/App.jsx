

import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import './App.css'
import HomeView from './views/homeview/HomeView';
import ProjectView from "./views/projectview/ProjectView"
import ResumeView from './views/resumeview/ResumeView';
import Header from './components/header/Header';


function App(){

  return (
   
   <BrowserRouter>
    <Header />
      <main>
         <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="/resume" element={ <ResumeView />} />
          <Route path="/projects" element={<ProjectView/>} />
        </Routes>
      </main>
   </BrowserRouter>
  )
}

export default App
