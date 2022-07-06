import React from 'react'
import Navigation from '../Navigation/Navigation'
import {Button,Stack,Modal,Form,Col,Row} from 'react-bootstrap'
import Styles from './Event.module.css'

const Events = () => {
  return (
        <>
        <Navigation/>
        <br/>
        <Stack direction="horizontal" gap={3}>
        <Button className={Styles.customBtn} >Events</Button>
        <Button className={Styles.customBtn}>WorkOut</Button>
        <Button className={Styles.customBtn}>WorkOut Design</Button>
        </Stack>
        </>
  )
}

export default Events