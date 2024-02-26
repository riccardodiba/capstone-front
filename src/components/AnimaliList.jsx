import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useDispatch, useSelector } from "react-redux"
import { getAllAnimale } from '../redux/action/animale';
import { useEffect } from "react"
import { Star} from 'react-bootstrap-icons';



  const AnimaliList = () => {
  const animaleData = useSelector((state) => state.animale.animali)
  console.log(animaleData)
  
  const dispatch = useDispatch()
  const token = localStorage.getItem("token")
  
  useEffect(() => {
    dispatch(getAllAnimale(token))
   //  eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    
    
    <Col>
     <Row style={{ justifyContent: 'space-evenly', }}>
        {animaleData.map((animale) => (
      <Card style={{width:'35%',backgroundColor: 'rgba(227, 255, 136,255)',display: 'flex', alignItems: 'center'}} className="mb-5 mt-5 ml-5  "  key={animale.uuid} >
             
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
            <Card.Text>
              
            </Card.Text>
            <Button className='text-black' style={{backgroundColor:'rgba(255, 255, 255,255)', textAlign:'center', }}>Adottato</Button>
          </Card.Body>
        </Card>
            ))}
        </Row>
        </Col>
          
       
  );
  }

   export default AnimaliList;
