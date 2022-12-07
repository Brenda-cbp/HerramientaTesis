import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Circle from '../commons/circle/Circle'
import "./GeneralData.css"
function GeneralData(props) {
  return (
    <div style={{background: "rgb(251,251,251)",
      background: "linear-gradient(0deg, rgba(251,251,251,1) 0%, rgba(254,177,12,1) 100%)"}}>
  <div className='generalData'>

    <Row>
      <Col md={8}>
        <h2> Tu texto tenía</h2>
      </Col>
      <Col className="pages" md={{ span: 3, offset: 1 }}>
        <Circle text1="" text2="Páginas" text3="en total" data="1.358" size="250px" fontSize="25px" fontSizeData="60px" paddingTop="20%" color="DodgerBlue" />
      </Col>
    </Row>

    <Row style={{ marginTop: "50px" }}>
      <Col >
        <Row className="weight">
          <Col md={{ span: 4, offset: 1 }}>
            <Circle text1="Peso" text2="KB" text3="" data="162" size="250px" fontSize="30px" fontSizeData="60px" paddingTop="15%" color="DodgerBlue" />
          </Col>
        </Row>
        <Row className="words" style={{ marginTop: "150px" }}>
          <Col md={{ span: 4, offset: 7 }}>
            <Circle text1="" text2="palabras" text3="" data="352.200" size="250px" fontSize="30px" fontSizeData="60px" paddingTop="30%" color="DodgerBlue" />
          </Col>
        </Row>

      </Col>
      <Col>
        <Row className="docs" style={{ marginTop: "50px", textAlign: "-webkit-right" }} >
          <Col>
            <Circle text1="Estás analizando" text2="documentos" text3="diferentes" data="5" size="500px" fontSize="40px" fontSizeData="120px" paddingTop="20%" color="DodgerBlue" />
          </Col>
        </Row>
      </Col>
    </Row>
  </div>


    </div >
   
  )
}

export default GeneralData