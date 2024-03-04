import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useDispatch, useSelector } from "react-redux"
import { getAllAnimale,putAnimale } from '../redux/action/animale';
import { useEffect,} from "react"
import { Star} from 'react-bootstrap-icons';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';





  const AnimaliList = () => {
  const animaleData = useSelector((state) => state.animale.animali)
  const user_uuid = localStorage.getItem("my_uuid")                  
  const dispatch = useDispatch()
  const token = localStorage.getItem("token")
  
  useEffect(() => {
    if(token){
    dispatch(getAllAnimale(token))
    }
   //  eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  
    const handleAdozione = async (anim) => {
    try {
      const uuid_user={
      "uuid_adozione": user_uuid,
      };
      await dispatch(putAnimale(token,anim,uuid_user));
  
           toast.success('Adozione avvenuta con successo ', {
position: "top-center",
autoClose: 4000,
hideProgressBar: false,
closeOnClick: true,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "colored",
onClose: () =>  window.location.reload()
});
     
    } catch (error) {
      console.log("Errore durante put animale:", error);
    } finally {
      //setLoading(false); // Nascondi lo spinner quando il login è completato o fallito
    }
  };
  return (
    
    
    <Col>
     {token ? (
     <Row style={{ justifyContent: 'space-evenly', }}>
        {animaleData.map((animale) => (
          <Card key={animale.uuid} style={{width:'35%',backgroundColor: 'rgba(227, 255, 136,255)',display: 'flex', alignItems: 'center'}} className="mb-5 mt-5 ml-5  "  >
              
      <Card.Img variant="top" src={animale.immagine} style={{width:'60%',}} className='mt-2' />
      <Card.Title className='mt-2 ms-3'  >
                {animale.nome}
                  <Star className=' ms-3'  />
                </Card.Title>
          <Card.Body >
                <Card.Title className="font-weight-bold" style={{ fontSize: 'larger' }}>
            {animale.specie}
            </Card.Title>

          <Card.Text>
            {animale.descrizione} 
            </Card.Text>
      
          {animale.uuid_adozione==="00000000-0000-0000-0000-000000000000" ? (
                  <Button onClick={() => handleAdozione(animale.uuid)} className='text-black' style={{ backgroundColor: 'rgba(255, 255, 255,255)', textAlign: 'center' }}>Adotta</Button>
                ) : (
                  <Card.Title>Animale adottato</Card.Title>
                  
                )}
            </Card.Body>
          </Card>
        ))}
      </Row>
     )  : (<h1>PER VISUALIZZARE GLI ANNUNCI PRENSENTI SUL SITO BISOGNA REGISTRARSI</h1>)
     }
    </Col>
          
       
  );
  }

   export default AnimaliList;
