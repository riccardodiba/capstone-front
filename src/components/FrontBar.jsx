import Nav from 'react-bootstrap/Nav';


function FrontBar() {
  return (
   <Nav variant="tabs" defaultActiveKey="/home"className="justify-content-center">
      <Nav.Item >
        <Nav.Link href="/chi-siamo" style={{backgroundColor:'#adff2f', textAlign:'center', }}>CHI SIAMO</Nav.Link>
      </Nav.Item>
        <Nav.Item>
        <Nav.Link href="/adozioni" style={{backgroundColor:'#adff2f', textAlign:'center',marginLeft: '30px'  }}>ADOZIONI</Nav.Link>
      </Nav.Item>
       <Nav.Item>
        <Nav.Link href="/blog" style={{backgroundColor:'#adff2f', textAlign:'center',marginLeft: '30px'  }}>BLOG</Nav.Link>
      </Nav.Item>
      
     
      
    </Nav>
  );
}

export default FrontBar;