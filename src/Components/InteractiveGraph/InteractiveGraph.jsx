import React from 'react'
import { Alert, Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Ldavis from './Ldavis';
import "./InteractiveGraph.css"

function InteractiveGraph() {
  return (
    <div className='interactiveGraph'>
      <p>
        Puedes mirar la frecuencia de cada palabra en cada grupo.
      </p>
      <p>
        Prueba dar click en los circulos que tienen el número de grupo
      </p>
      <Ldavis />
      <Row style={{ justifyContent: "center" }}>
        <Col md={4} style={{ width: "50%", textAlign: "center" }}>
          <Alert variant="primary">
            ¡Ahora es tu turno, prueba el modelo clasificando el documento que desees!
          </Alert>
          <Button variant="outline-success">Probar</Button>
        </Col>
      </Row>
    </div >
  )
}

export default InteractiveGraph