import React,{useState} from 'react'
import { Container, Row,Col,Form } from 'react-bootstrap'
import CustomTextBox from './CustomTextBox'
import Styles from './Header.module.css'

const PaymentDetail = ({titleText}) => {
    const [check,setCheck] = useState(true)
  
    return (
    <Container>
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
        {check 
        ? 
        ( <Row>
            <Col sm={3}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Control type="text" placeholder="Title" className={Styles.customInput} />
 
                </Form.Group>
            </Col>
            <Col sm={3}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Control type="text" placeholder="Payment GuidLine Image Url" className={Styles.customInput} />
                </Form.Group>
            </Col>
            <Col sm={3}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Control type="text" placeholder="Amount" className={Styles.customInput} />
                </Form.Group>
            </Col>
            <Col sm={3}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Select aria-label="Default select example" className={Styles.customInput} >
                <option>Currency</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
                </Form.Select>
                </Form.Group>
            </Col>
            <Container>
          <Row>
            <Col sm={4}>
            <CustomTextBox placeholderText="Description"/>
            </Col>
          </Row>
        </Container>
        </Row>
        
        )
        : 
        null}
    

    </Container>
  )
}

export default PaymentDetail