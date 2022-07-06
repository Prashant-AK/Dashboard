import React from 'react'
import {Form} from 'react-bootstrap'
import Styles from './Header.module.css'
const CustomInput = () => {
  return (
    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Control type="text" placeholder="Events" className={Styles.customInput} />
    </Form.Group>
  )
}

export default CustomInput