import React,{useContext} from 'react'
import { Container, Row,Col,Form } from 'react-bootstrap'
import Styles from './Header.module.css'
import { UserContext } from './AddEvent'

const Header = ({titleText,eventname,eventstarttime,eventendtime}) => {
   const {value,setValue} =  useContext(UserContext)
    
  return (
    <Container >
    <h5>{titleText}</h5>
        <Row>
            <Col sm={4}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Control type="text" placeholder="Events" className={Styles.customInput} value={value.name} onChange={(e)=>setValue({...value,name:e.target.value})}/>
                </Form.Group>
            </Col>
            <Col sm={4}>
            <Form.Select className={Styles.customInput} >
                <option>Subtitle</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
                </Form.Select>
            </Col>
            <Col sm={4}>
                <Row>
                <Col sm={6}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Control type="text" placeholder="Event Start Time" className={Styles.customInput} value={eventstarttime} onChange={(e)=>setValue({...value,event_end_start:e.target.value})} />
                </Form.Group>
                </Col>

                <Col sm={6}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Control type="text" placeholder="Event End Time" className={Styles.customInput} value={eventendtime} onChange={(e)=>setValue({...value,event_end_time:e.target.value})}/>
                </Form.Group>
                </Col>

                </Row>
            </Col>
        </Row>

    </Container>
  )
}

export default Header