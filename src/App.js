import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Components/Pages/Home'
import Contact from './Components/Pages/Contact'
import Projects from './Components/Pages/Projects'
import Project from './Components/Pages/Project'
import Company from './Components/Pages/Company'
import NewProject from './Components/Pages/NewProject'

import Container from './Components/Layout/Container'
import Navbar from './Components/Layout/Navbar'
import Footer from './Components/Layout/Footer'

function App() {
  return (
   <Router>
    <Navbar/>
    <Container customClass='min-height'>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route path='/Projects' element={<Projects/>}/>
        <Route path='/company' element={<Company/>}/>
        <Route path='/contact' element={<Contact/>}/>  
        <Route path='/newproject' element={<NewProject/>}/>
        <Route path='/project/:id' element={<Project/>}/>
      </Routes>
    </Container>
    <Footer/>
   </Router>
  );
}

export default App;
