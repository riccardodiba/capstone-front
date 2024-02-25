import React, { useEffect, useState } from "react";
import { Button, Container, Form } from "react-bootstrap"; // Importa Spinner da react-bootstrap
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { postAnimale } from "../redux/action/animali";

const CreaAnimali = () => {
   const [animale, setAnimale] = useState({
    nome: '',
    specie: '',
    descrizione: '',
  });

  const token = localStorage.getItem("token")
  const [loading, setLoading] = useState(false); // Stato per gestire la visualizzazione dello spinner
  const [loggedIn, setLoggedIn] = useState(false); // Stato per indicare se l'utente ha effettuato il login con successo
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Hook per eseguire il reindirizzamento



  const handleSubmit= async (e) => {
    e.preventDefault();
    setLoading(true); // Mostra lo spinner quando inizia la registrazione
    try {
      await dispatch(postAnimale(token,animale));
      navigate("/adozioni");
    } catch (error) {
      console.log("Errore durante la registrazione:", error);
    } finally {
      setLoading(false); // Nascondi lo spinner quando la registrazione è completata o fallita
    }

   
  };



  return (
    <Container>
        
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label >Nome</Form.Label>
            <Form.Control type="text" nome="nome" id="nome" onChange={(e) => {
                      setAnimale({
                        ...animale,
                        nome: e.target.value,
                      });
                    }}/>
          </Form.Group>
          <Form.Group>
            <Form.Label >Specie</Form.Label>
            <Form.Control type="text" name="specie" id="specie" onChange={(e) => {
                      setAnimale({
                        ...animale,
                        specie: e.target.value,
                      });
                    }}/>
          </Form.Group>
          <Form.Group>
            <Form.Label >Descrizione</Form.Label>
            <Form.Control type="text" name="descrizione" id="descrizione" onChange={(e) => {
                      setAnimale({
                        ...animale,
                        descrizione: e.target.value,
                      });
                    }}/>
          </Form.Group>
          
          <Form.Group>
            <Button color="primary" type="submit">Salva</Button>{' '}
            <Button color="secondary" tag={Link} to="/">Annulla</Button>
          </Form.Group>
        </Form>
      </Container>
  );
};

export default CreaAnimali;
