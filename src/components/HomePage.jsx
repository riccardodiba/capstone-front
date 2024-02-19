import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom"
import Image from 'react-bootstrap/Image';
import logo from'../logo.jpg';

const HomePage = () => {
  return (
    <Container>
      <Row>
        <Col className="d-flex justify-content-center align-items-center mt-5 flex-column">
          <h1 className="my-5 ">"Cambia una vita, adotta un amico peloso!"</h1>
            <Image
            src={logo}
            className="rounded-circle me-5"
            style={{ width: "500px", }}
          />
          
        </Col>
      </Row>
    </Container>
  )
}
export default HomePage
