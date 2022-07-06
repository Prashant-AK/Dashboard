import React from 'react'
import { Container, Row,Col,Form } from 'react-bootstrap'
import Styles from './Header.module.css'

const LeaderBoardTag = ({tags}) => {
    console.log(tags)
  return (
        <Container>
            <Row>
                <Col sm={6}>
                <h6>Leaderboard Tag </h6>
                <Form.Select aria-label="Default select example" className={Styles.customInput} >
                {tags.map((tag,idx) => <option key={idx} value={tag}>{tag}</option>)}
                </Form.Select>
                </Col>
                <Col sm={6}>
                    <h6>Event Item Tag </h6>
                    <Form.Select aria-label="Default select example" className={Styles.customInput} >
                <option>Select Tag</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
                </Form.Select>
                </Col>
            </Row>
        </Container>
    )
}

export default LeaderBoardTag