import React from 'react'
import { Container, Row,Col,Form } from 'react-bootstrap'
import Styles from './Header.module.css'

const MetricItem = () => {
  return (
        <Container>
            <Row>
                <Col sm={6}>
                <h6>Event Completion Metric Item </h6>
                <Form.Select aria-label="Default select example" className={Styles.customInput} >
                <option>Metric Item</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
                </Form.Select>
                </Col>
                <Col sm={6}>
                    <h6>Workout Card Multiplier </h6>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Control type="text" placeholder="Events" className={Styles.customInput} />
                </Form.Group>
                </Col>
            </Row>
        </Container>
    )
}

export default MetricItem