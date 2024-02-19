
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container } from 'react-bootstrap'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar'
import FrontBar from './components/FrontBar'
import HomePage from './components/HomePage';
import ChiSiamo from './components/ChiSiamo';
import Blog from './components/Blog';


function  App() {
  return (
       <BrowserRouter>
       <div className='d-flex flex-column h-100'>
       <Container fluid>
       <NavBar />
       <FrontBar />
      <div className='flex-grow-1'>
         <Routes>
           <Route element={<HomePage />} path="/" />
           <Route element={<ChiSiamo />} path="/chi-siamo" />
            <Route element={<Blog />} path="/blog" />
         </Routes>
         </div>
         <footer className='text-center'>Amici di Zampa {new Date().getFullYear()}</footer>
            </Container>
            </div>
    </BrowserRouter>
  );
}

export default App;
