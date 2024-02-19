
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container } from 'react-bootstrap'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar'
import FrontBar from './components/FrontBar'
import HomePage from './components/HomePage';
import ChiSiamo from './components/ChiSiamo';


function  App() {
  return (
       <BrowserRouter>
       <Container fluid>
       <NavBar />
       <FrontBar />
       <HomePage />
       <ChiSiamo />


         <Routes>
      
           <Route path="/" component={HomePage} />
        <Route path="/chi-siamo" component={ChiSiamo} />

         </Routes>
            </Container>
    </BrowserRouter>
  );
}

export default App;
