import { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row, Spinner } from "react-bootstrap"; // Importa Spinner da react-bootstrap
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { postRegister } from "../redux/action";

const Registration = () => {
  const [register, setRegister] = useState({
    name: "",
    surname: "",
    username: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false); // Stato per gestire la visualizzazione dello spinner
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true); // Mostra lo spinner quando inizia la registrazione
    try {
      await dispatch(postRegister(register));
      navigate("/login");
    } catch (error) {
      console.log("Errore durante la registrazione:", error);
    } finally {
      setLoading(false); // Nascondi lo spinner quando la registrazione è completata o fallita
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
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Group className="mb-3">
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                      type="text"
                      onChange={(e) => {
                        setRegister({
                          ...register,
                          username: e.target.value,
                        })
                      }}
                    />
                  </Form.Group>
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
                  style={{ backgroundColor: "#adff2f", textAlign: "center" }}
                  onClick={handleRegister}
                  className="text-black"
                >
                  {loading ? ( // Condiziona il rendering del bottone in base allo stato dello spinner
                    <Spinner animation="border" size="sm" /> // Mostra lo spinner se loading è true
                  ) : (
                    "SignUp" // Mostra il testo del bottone se loading è false
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
