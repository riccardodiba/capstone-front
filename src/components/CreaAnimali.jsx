import React, { useState } from "react";
import { Button, Container, Form, } from "react-bootstrap"; 
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { postAnimale } from "../redux/action/animale";
import FileBase64 from "react-file-base64";


const CreaAnimali = () => {
   const [animale, setAnimale] = useState({
    nome: '',
    specie: '',
    descrizione: '',
    immagine: '',
  });

  const token = localStorage.getItem("token")
  const [loading, setLoading] = useState(false); // Stato per gestire la visualizzazione dello spinner // Stato per indicare se l'utente ha effettuato il login con successo
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Hook per eseguire il reindirizzamento
  



  const handleSubmit= async (e) => {
    e.preventDefault();
    setLoading(true); // Mostra lo spinner quando inizia la registrazione
    try {
      await dispatch(postAnimale(token,animale));
      navigate("/annunci");
    } catch (error) {
      console.log("Errore durante la registrazione:", error);
    } finally {
      setLoading(false); // Nascondi lo spinner quando la registrazione è completata o fallita
    }

   
  };



  return (
    <Container>
        {token ? (
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label className="font-weight-bold" style={{ fontSize: 'larger' }}>Nome</Form.Label>
            <Form.Control  type="text" nome="nome" id="nome" onChange={(e) => {
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
            <Form.Control className="mb-3" type="text" as="textarea" name="descrizione" id="descrizione" onChange={(e) => {
                      setAnimale({
                        ...animale,
                        descrizione: e.target.value,
                      });
                    }}/>
          </Form.Group>
          <FileBase64  multiple={false} onDone={(e) => {
                      setAnimale({
                        ...animale,
                        immagine: e.base64,
                      });
                    }}/>
          <Form.Group>
            <Button className="text-black"  type="submit"  style={{backgroundColor:'rgba(227, 255, 136,255)', textAlign:'center', marginTop:'30px'  }}>Salva</Button>{' '}
             
            <Button className="text-black"  tag={Link} to="/" style={{backgroundColor:'rgba(227, 255, 136,255)', textAlign:'center',marginLeft: '30px', marginTop:'30px'  }}>Annulla</Button>
          </Form.Group>
        </Form>
        ) : (<h1>PER CREARE GLI ANNUNCI BISOGNA REGISTRARSI</h1>)
                  }
      </Container>
  );
};

export default CreaAnimali;
