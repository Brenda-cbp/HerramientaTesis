import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Circle from '../commons/circle/Circle'
import trash from "../../Assets/trash.svg"
import "./GeneralData.css"

function GeneralCleanData() {
  return (
    <div style={{
      background: "rgb(251,251,251)",
      background: "linear-gradient(0deg, rgba(12,151,254,1) 0%, rgba(251,251,251,1) 100%)"
    }}>
      <div className='generalData' style={{ marginTop: "60px" }}>
        <h3>
      >>Para obtener los grupos,
        </h3>
        <h3>
          limpiamos el texto
        </h3>
        <Row style={{ marginTop: "100px" }}>
          <Col md={{ span: 5, offset: 3 }}>
            <Row>
              <Col md={2} style={{ alignSelf: "center" }}>
                <img className="icon" src={trash} alt="Foto" />
              </Col>
              <Col>
                <Circle text1="Eliminamos" text2="palabras vacías" text3="" data="850.000" size="300px" fontSize="28px" fontSizeData="60px" paddingTop="20%" color="DodgerBlue" />

              </Col>
              <p>
                <em>Como conectores y palabras que por si solas no tienen valor en el texto </em>
              </p>
            </Row>
          </Col>
          <Col>

            <ul>Palabras como:
              <li>Los</li>
              <li>Algo</li>
              <li>Ellos</li>
              <li>Como</li>
              <li>Con</li>
            </ul>
          </Col>
        </Row>
      </div>



    </div>

  )
}

export default GeneralCleanData