import React from 'react'
import { Col, Row } from 'react-bootstrap'
import ReactSpeedometer from "react-d3-speedometer"
import "./Graphs.css"

function Graphs(props) {
  return (
    <div className='graphs'>
      <h1> Con esto encontramos</h1>
      <Row style={{marginLeft:"125px"}}>
        <Col>
        <h2> Coherencia entre grupos</h2>
        <ReactSpeedometer minValue={0} maxValue={1} value={props.value}/>
        </Col>
        <Col>
        <h2>
          Distribución de grupos en el documento
        </h2>
        
        </Col>

      </Row>
      
    </div>
  )
}

export default Graphs