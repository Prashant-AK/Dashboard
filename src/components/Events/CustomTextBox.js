import React,{useContext} from 'react'
import {Form} from 'react-bootstrap'
import Styles from './CustomTextBox.module.css'
import { UserContext } from './AddEvent'


const CustomTextBox = ({placeholderText,descvalue}) => {

  const {value,setValue} =  useContext(UserContext)

  return (
    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    <Form.Control as="textarea" rows={3} placeholder={placeholderText} className={Styles.customTextBoxStyle} value={value.description} onChange={(e)=>setValue({...value,description:e.target.value})}></Form.Control>
  </Form.Group>
  )
}

export default CustomTextBox