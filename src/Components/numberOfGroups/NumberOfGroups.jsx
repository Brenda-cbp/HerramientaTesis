import React, { useState } from 'react'
import { Col, Form, Row } from 'react-bootstrap'
import Circle from '../commons/circle/Circle'
import "./NumberOfGroups.css"
function NumberOfGroups() {

  const [numTopics, setnumTopics] = useState(8);
  const changeValue = (e) => {
    setnumTopics(e);
  };
  // function alerta() {
  //   alert("Funciones en desarrollo. Gracias por tu paciencia");
  // }
  return (
    <div style={{background: "rgb(68,22,218)",
      background: "linear-gradient(0deg, rgba(68,22,218,1) 0%, rgba(0,146,255,1) 100%)"}}>
      <div className='numberOfGroups'>
        <div className='menuSuperior'>
          <Row>
            <Col md={4}>
              <Form.Group className="mb-3" controlId="rangeTopics">
                <Form.Label>Número de grupos</Form.Label>
                <Form.Range value={numTopics} onChange={changeValue} />
              </Form.Group>
            </Col>
            <Col md={{ span: 2, offset: 5 }}>
              <button >¿Quieres conocer más?
                Ve al modo experto</button>
            </Col>
          </Row>
        </div>
        <h2>¡Obtuvimos</h2>
        <Row>
          <Col  md={{ span: 2, offset: 4 }} style={{ textAlign: "-webkit-right"}} >
            <Circle text1="" text2="" text3="" data="8" size="150px" fontSize="28px" fontSizeData="90px" paddingTop="10%" color="DodgerBlue"  />
          </Col>
          <Col>
            <p>grupos diferentes</p> 
            <p>en tu texto !</p>

          </Col>

        </Row>



      </div>


    </div>
  )
}

export default NumberOfGroups