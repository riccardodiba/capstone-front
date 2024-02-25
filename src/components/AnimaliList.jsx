import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useDispatch, useSelector } from "react-redux"
import { getAllAnimale } from '../redux/action/animale';
import { useEffect } from "react"



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
     <Row style={{'justify-content': 'space-evenly'}}>
        {animaleData.map((animale) => (
      <Card style={{width:'35%'}} className="mb-5 mt-5 ml-5  "  key={animale.uuid} >
             
             <Card.Img variant="top" src={animale.immagine} />
              {animale.nome}
         <Card.Body>
              <Card.Title>
          {animale.specie}
           </Card.Title>

        <Card.Text>
           {animale.descrizione} 
          </Card.Text>
            <Card.Text>
              
            </Card.Text>
            <Button className='text-black' style={{backgroundColor:'#adff2f', textAlign:'center', }}>Adotta</Button>
          </Card.Body>
        </Card>
            ))}
        </Row>
        </Col>
          
       
  );
  }

   export default AnimaliList;
