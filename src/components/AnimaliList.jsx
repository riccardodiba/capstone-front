import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useDispatch, useSelector } from "react-redux"
import { getAllAnimali } from '../redux/action/animali';
import { useEffect } from "react"



  const AnimaliList = () => {
 // const animaliData = useSelector((state) => state.animale.animali)
 // console.log(animaliData)
 // const dispatch = useDispatch()
 // const token = localStorage.getItem("token")
  
 // useEffect(() => {
  //  dispatch(getAllAnimali(token))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  //}, [])
  return (
    
    
    <Row>
    //  <Col xs={12} sm={6} md={4} lg={3}>
    //    {animaliData.map((animale) => (
      //  <Card className="mb-5 mt-5  "  key={animale.uuid} >
     //          {animale.nome}
      //    <Card.Body>
       //        <Card.Title>
       //    {animale.specie}
        //    </Card.Title>

      //    <Card.Text>
        //     {animale.descrizione} 
          //  </Card.Text>
            //<Card.Text>
              
           // </Card.Text>
           // <Button className='text-black' style={{backgroundColor:'#adff2f', textAlign:'center', }}>Adotta</Button>
         // </Card.Body>
       // </Card>
            ))}
       // </Col>
       // </Row>

       
 // );
 // }

   export default AnimaliList;
