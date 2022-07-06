import React, { useEffect, useState } from 'react'
import { Container, Row,Col,Form, Button,} from 'react-bootstrap'
import Navigation from '../Navigation/Navigation'
import Styles from './Login.module.css'
import logo from '../../images/logo.png'
const Login = () => {
    const initialValues = {email:"",password:""}
    const [formValues,setFormValues] = useState(initialValues) 
    const [formError,setFormError] = useState({})
    const [isSubmit,setIsSubmit] = useState(false)
    
    useEffect(()=>{
        console.log(formError)
        if(Object.keys(formError).length == 0 && isSubmit == true){
            console.log(formValues)
        }
    },[isSubmit])
    
    const handleChange = (e) =>{
        const {name,value} = e.target;
        console.log(e.target.value)
        setFormValues({...formValues,[name]:value})
    
    }
    const formSubmit = e =>{
        e.preventDefault()
        setFormError(validate(formValues))
        // console.log(formError)
        setIsSubmit(true)   
    }
    const validate = values =>{
            const errors = {}
            if(!values.email){
                errors.email = "Email is required!"
            }
            if(!values.password){
                errors.password = "Password is required"
            }else if(values.password.length<4){
                errors.password = "Password must be 4 character long";
            }else if(values.password.length>10){
                errors.password = "Password must be less than 10 character short";
            }
            return errors
    }

  return (
        <>
        <Navigation dashboard={false}/>
        <div className={Styles.container}>
        <Container>
            <Row>
                <Col xs={{offset:5}}>
                <img src={logo } style={{width:"100px",height:"100px",marginLeft:"5%"}}/>
                </Col>
                <Col xs={{offset:4,span:4}}>

                    <h3 style={{textAlign:"center"}}>Admin Login</h3>
                    <Form onSubmit={formSubmit}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Control type="email" placeholder="Email" className={Styles.customInput} name="email" value={formValues.email} onChange={handleChange}  />
                </Form.Group>
                <p style={{textAlign:"center",color:"red"}}>{formError.email}</p>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Control type='password' placeholder='password' className={Styles.customInput} name="password" alue={formValues.password} onChange={handleChange} />
                </Form.Group>
                <p style={{textAlign:"center",color:"red"}}>{formError.password}</p>
                <Button  className={Styles.customBtn } type="submit">Login  </Button>
                </Form>

                </Col>
            </Row>
        </Container>
        </div>
        </>
  )
}

export default Login