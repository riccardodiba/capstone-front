import { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row, Spinner } from "react-bootstrap"; // Importa Spinner da react-bootstrap
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { postRegister } from "../redux/action/login";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Registration = () => {
  const [register, setRegister] = useState({
    name: "",
    surname: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false); 
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await dispatch(postRegister(register));
      navigate("/login");
     toast.success('Registrazione avvenuta con successo, per navigare sul sito fare login', {
position: "top-center",
autoClose: 4000,
hideProgressBar: false,
closeOnClick: true,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "colored",
});;
    } catch (error) {
      console.log("Errore durante la registrazione:", error);
      toast.error('Si è verificato un errore durante la registrazione.');
    } finally {
      setLoading(false); 
    }
  };

  return (
    <Container className="mt-5">
      <Row className="d-flex justify-content-center">
        <Col sm={6} className="border border-dark-subtle rounded p-3">
          <Row className="flex-column">
            <Col className="d-flex justify-content-center">
              <Link to="/register" className="nav-link fs-3">
                Registration
              </Link>
            </Col>
            <Col>
              <Form>
                <Form.Group className="mb-3">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    onChange={(e) => {
                      setRegister({
                        ...register,
                        name: e.target.value,
                      });
                    }}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Surname</Form.Label>
                  <Form.Control
                    type="text"
                    onChange={(e) => {
                      setRegister({
                        ...register,
                        surname: e.target.value,
                      })
                    }}
                  />
            
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="name@example.com"
                    onChange={(e) => {
                      setRegister({
                        ...register,
                        email: e.target.value,
                      })
                    }}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    onChange={(e) => {
                      setRegister({
                        ...register,
                        password: e.target.value,
                      })
                    }}
                  />
                </Form.Group>

                <Button
                  type="submit"
                  style={{ backgroundColor: 'rgba(227, 255, 136,255)', textAlign: "center" }}
                  onClick={handleRegister}
                  className="text-black"
                >
                  {loading ? ( 
                    <Spinner animation="border" size="sm" /> 
                  ) : (
                    "SignUp"
                  )}
                </Button>
              </Form>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Registration;