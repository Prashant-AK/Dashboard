import React,{useState} from 'react'
import { Container, Row,Col,Form } from 'react-bootstrap'
import Styles from './Header.module.css'
import CustomTextBox from './CustomTextBox'
const Team = ({titleText}) => {
  const [check,setCheck] = useState(true)
  
  return (
    <Container >
    <Row>
    <Col sm="2">
    <h5>{titleText}</h5>
    </Col>
    <Col sm="10">
    <Form.Check 
        type="checkbox"
        id={`default-checkbox`}
        onClick={()=>setCheck(prev => !prev)}
      /> 
      </Col>  
    </Row>
    {
      check
      ?
      (
        <>
                <Row>
            <Col sm={6}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Control type="text" placeholder="Title" className={Styles.customInput} />
                </Form.Group>
            </Col>
            <Col sm={6}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Control type="text" placeholder="Team Selection Title" className={Styles.customInput} />
                </Form.Group>
            </Col>

        </Row>
        <Container>
          <Row>
            <Col sm={4}>
            <CustomTextBox placeholderText="Description"/>
            </Col>
          </Row>
        </Container>
        </>
      )
      :
      null
    }
    </Container>
  )
}

export default Team