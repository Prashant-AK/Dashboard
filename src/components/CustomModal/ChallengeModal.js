import React,{useState,useEffect} from 'react'
import {Button,Modal,Form,Col,Row} from 'react-bootstrap'
import Styles from './CustomModal.module.css'

const ChallengeModal = ({close,show,data,title}) =>{
    

    const saveHandler =  () => {
    };
    const handleClose = () =>close()
    return (
      <>
        <Modal show={show} onHide={handleClose}>
          <Modal.Body className={Styles.container}>
          <h1  className={Styles.customHeading}>{title}</h1>
            <Form>
              {data.map((d,i) => {
                return (
                  <Row>
                  <Col>
                  <Form.Group 
                  className="mb-3"
                   key={i}>
                    <Form.Control
                      type="text"
                      placeholder="Enter the "
                      className={Styles.customInput}
                      autoFocus
                      value={d.subtitle}
                                  />
                  </Form.Group>
                  </Col>
                  <Col>
                  <Form.Group 
                  className="mb-3"
                   key={i}>
                    <Form.Control
                      type="text"
                      placeholder="Enter the "
                      className={Styles.customInput}
                      autoFocus
                      value={d.title}
                                  />
                  </Form.Group>
                  </Col>
                  </Row>
                )
              })}
              <Row>
                <Col>
              <Button variant="danger" onClick={saveHandler} className={Styles.customBtn}>
              Save
            </Button>
            </Col>
            <Col>
            <Button variant="danger" onClick={()=>close()} className={Styles.customBtn}>
              Close Modal
            </Button>
            </Col>
            </Row>
            </Form>
          </Modal.Body>
          
        </Modal>
      </>
    );
  }
  

export default ChallengeModal