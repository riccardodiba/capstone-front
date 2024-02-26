import Nav from 'react-bootstrap/Nav';


function FrontBar() {
  return (
   <Nav variant="tabs" defaultActiveKey="/home"className="justify-content-center">
      <Nav.Item >
        <Nav.Link href="/chi-siamo" style={{backgroundColor:'rgba(227, 255, 136,255)', textAlign:'center', }}>CHI SIAMO</Nav.Link>
      </Nav.Item>
        <Nav.Item>
        <Nav.Link href="/annunci" style={{backgroundColor:'rgba(227, 255, 136,255)', textAlign:'center',marginLeft: '30px'  }}>ANNUNCI</Nav.Link>
      </Nav.Item>
       <Nav.Item>
        <Nav.Link href="/blog" style={{backgroundColor:'rgba(227, 255, 136,255)', textAlign:'center',marginLeft: '30px'  }}>BLOG</Nav.Link>
      </Nav.Item>
         <Nav.Item>
        <Nav.Link href="/crea-adozioni" style={{backgroundColor:'rgba(227, 255, 136,255)', textAlign:'center',marginLeft: '30px'  }}>CREA ADOZIONI</Nav.Link>
      </Nav.Item>
      
     
      
    </Nav>
  );
}

export default FrontBar;