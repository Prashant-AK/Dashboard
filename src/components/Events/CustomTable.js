import React, { useState } from 'react'
import { Col, Container, Row,Table } from 'react-bootstrap'
import ChallengeModal from '../CustomModal/ChallengeModal'
import Styles from './CustomTable.module.css'



const CustomTable = ({titleText,tabledata}) => {

  const [isModalOpen,setIsModalOpen] = useState(true)
  let shadow
  function dragit(event){
    console.log("hi")
    shadow=event.target;
  }
  function dragover(e){
    console.log("bye")
    let children=Array.from(e.target.parentNode.parentNode.children);
  if(children.indexOf(e.target.parentNode)>children.indexOf(shadow))
    e.target.parentNode.after(shadow);
    else e.target.parentNode.before(shadow);
  }



  return (
    <Container>
        <Row>
            <h5>{titleText}</h5>
            <Col>
            <Table className={Styles.customTableStyle}>
  <tbody className={Styles.customTbodyStyle}>
    {
    tabledata?.map((data,idx) => {
  
      return (<tr 
      key={idx}
      draggable="true" 
      onDragStart={event => dragit(event)} 
      onDragOver={event => dragover(event)}
      >
        <td>{data.title}</td>
        <td>{data.type}</td>
        <td>{data.subtitle}</td>
      </tr>)
    })}


  </tbody>
</Table>
            </Col>
        </Row>
    </Container>
  )
}

export default CustomTable