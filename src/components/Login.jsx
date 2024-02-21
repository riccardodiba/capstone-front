import React, { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row, Spinner } from "react-bootstrap"; // Importa Spinner da react-bootstrap
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { postLogin } from "../redux/action";

const Login = () => {
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false); // Stato per gestire la visualizzazione dello spinner
  const [loggedIn, setLoggedIn] = useState(false); // Stato per indicare se l'utente ha effettuato il login con successo
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Hook per eseguire il reindirizzamento

  useEffect(() => {
    setLogin({
      ...login,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true); // Mostra lo spinner quando inizia il processo di login
    try {
      await dispatch(postLogin(login));
      setLoggedIn(true); // Imposta lo stato per indicare che l'utente ha effettuato il login con successo
    } catch (error) {
      console.log("Errore durante il login:", error);
    } finally {
      setLoading(false); // Nascondi lo spinner quando il login è completato o fallito
    }
  };

  // Se l'utente ha effettuato il login con successo, esegui il reindirizzamento
  useEffect(() => {
    if (loggedIn) {
      navigate("/adozioni");
    }
  }, [loggedIn, navigate]);

  return (
    <Container className="mt-5">
      <Row className="d-flex justify-content-center">
        <Col sm={6} className="border border-dark-subtle rounded p-3">
          <Row className="flex-column">
            <Col className="d-flex justify-content-center">
              <Link to="/login" className="nav-link fs-3">
                Login
              </Link>
            </Col>
            <Col>
              <Form>
                <Form.Group className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="name@example.com"
                    onChange={(e) => {
                      setLogin({
                        ...login,
                        email: e.target.value,
                      });
                    }}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    onChange={(e) => {
                      setLogin({
                        ...login,
                        password: e.target.value,
                      });
                    }}
                  />
                </Form.Group>
                <Button
                  type="submit"
                  style={{ backgroundColor: "#adff2f", textAlign: "center" }}
                  onClick={handleLogin} // Utilizza la funzione handleLogin per gestire il clic del pulsante
                  className="text-black"
                >
                  {loading ? ( // Condiziona il rendering del bottone in base allo stato dello spinner
                    <Spinner animation="border" size="sm" /> // Mostra lo spinner se loading è true
                  ) : (
                    "Login" // Mostra il testo del bottone se loading è false
                  )}
                </Button>
                <Button className="ms-3" type="submit" style={{ backgroundColor: "#adff2f", textAlign: "center" }}>
                  <Link to="/register" className="nav-link text-black">
                    SingUp
                  </Link>
                </Button>
              </Form>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
