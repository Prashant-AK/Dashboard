import React,{useEffect,useState} from 'react'
import {Container, Row, Table,Form,Col,Button,Modal} from 'react-bootstrap'
import Navigation from '../Navigation/Navigation'
import Styles from './Dashboard.module.css'

import api from '../../api/api'
import {NavLink,useNavigate} from 'react-router-dom'

import data1 from '../../data/data'

const Dashboard = () => {

  const navigate = useNavigate()
  const [data,setData] = useState([])
  const [eventName,setEventName] = useState('')
  const [imageUrl,setImageUrl] = useState('')
  const [eventStartTime,setEventStartTime] = useState('');
  const [eventEndTime,setEventEndTime] = useState('')
  const [description,setDescription] = useState('')


//Modal 
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false)

  useEffect(()=>{
    async function getData(){

      try {
        const response = await api.get('internal/events',{
          headers:{"fakeauth":"V39-a-dOtV0N1V3njBqo7kEiG68_eWNtUvxrOQF5izX40dbWUtnTya9hT_HMgSWlwm6Xys9wTvLChtWBmiO4LRBgdxPjxEJPszsvXQQZ-hOkXfYR9EfMbnVDNOwLdvJusXWULw"}
        })
        // console.log('getData call',response)
        console.log(response.data)
        setData(response.data)
      } catch (error) {
        console.log(error)
        // setData(data1)
      }

    }
    // console.log("data",data1)
    // setData(data1?.available_events)
    getData()

  },[])


  const saveHandler =  () => {
    let bodyFormData = new FormData()
    console.log(eventName,imageUrl,eventStartTime,eventEndTime,description)
    bodyFormData.append("name",eventName)
    bodyFormData.append("description",description)
    bodyFormData.append("image_url",imageUrl)
    bodyFormData.append("event_start_time","2022-02-21 04:00:01")
    bodyFormData.append("event_end_time","2022-02-21 04:00:01")
    bodyFormData.append("is_active","");
    bodyFormData.append("user_group","")
    bodyFormData.append("extra_details","")
    
    fetch('https://dev.insane.ai/api/internal/events',{
      method:"post",
      body:bodyFormData,
      headers:{
        "token":"Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2NTQ4NjkwMjEsIm5iZiI6MTY1NDg2OTAyMSwianRpIjoiMWQ4YThkNjUtOTA0MC00MTIxLTkwNDctYTQ5NTg3MTllZGQ4IiwiaWRlbnRpdHkiOiI4MjQ1IiwiZnJlc2giOmZhbHNlLCJ0eXBlIjoiYWNjZXNzIn0.20rgmafMBBbPYriSnArqKMurWSfTRtp7Zhl2x1yNH80",
        "fakeauth":"V39-a-dOtV0N1V3njBqo7kEiG68_eWNtUvxrOQF5izX40dbWUtnTya9hT_HMgSWlwm6Xys9wTvLChtWBmiO4LRBgdxPjxEJPszsvXQQZ-hOkXfYR9EfMbnVDNOwLdvJusXWULw",
        }
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
      setShow(false)
      navigate(0)
    })
   
  }
  const newdata = data
  const searchItem = searchItem =>{

    setData(data => data.filter(d =>{
      
      console.log(d.name.toLowerCase().indexOf(searchItem.toLowerCase()) !== -1)
    }))
  }

  return (
    <>
    <Navigation dashboard={true}/>
    <br/>
    <Container>
    <Row>
      <Col sm={3}>
      <Form.Group 
      className="mb-3"
      >
      <Form.Control
        type="text"
        placeholder="Search..."
        className={Styles.customInput}
        autoFocus
        onChange={e => searchItem(e.target.value)}
                />
      </Form.Group>
      </Col>
      <Col sm={3}>
      <Button variant="danger" onClick={handleShow}>
          Add Event
        </Button>
      </Col>
    </Row>

<Table   style={{color:"white"}}>
  <thead>
    <tr>
      <th>id</th>
      <th>Event Name</th>
      <th>Start Date</th>
      <th>End Date</th>
    </tr>
  </thead>
  <tbody>
    {
      data.map((res,idx) => {
        return (
          <tr key={idx} className={Styles.customTableStyle}>
          <td>{idx+1}</td>
          <td>{res.name}</td>
          <td>{new Date(res.event_start_time).toLocaleDateString('pt-PT')}</td>
          <td>{new Date(res.event_end_time).toLocaleDateString('pt-PT')}</td>
          <td><NavLink to='/' className='btn btn-danger'>Duplicate</NavLink></td>
          <td><NavLink to='/addEvent' state={{ detail: res }} className='btn btn-primary'>Edit</NavLink></td>
        </tr>
        )
      })
    }
    
  </tbody>
</Table>


<Modal show={show} onHide={handleClose}>
          <Modal.Body className={Styles.container}>
          <h1  className={Styles.customHeading}>Create Event</h1>
            <Form>
              <Form.Group 
              className="mb-3"
               >
                <Form.Control
                  type="text"
                  placeholder="Enter the Event Name"
                  className={Styles.customInput}
                  autoFocus
                  onChange={e => setEventName(e.target.value)}
                  value={eventName}
                />
              </Form.Group>
               <Form.Group 
              className="mb-3"
               >
                <Form.Control
                  type="text"
                  className={Styles.customInput}
                  autoFocus
                  placeholder='Enter the Image Url'
                  onChange={e => setImageUrl(e.target.value)}
                  value={imageUrl}
                />
              </Form.Group>
              <Form.Group 
              className="mb-3"
               >
                <Form.Control
                  type="text"
                  className={Styles.customInput}
                  autoFocus
                  placeholder='Enter the Event Start Time'
                  onChange={e => setEventStartTime(e.target.value)}
                  value={eventStartTime}
                />
              </Form.Group>
              <Form.Group 
              className="mb-3"
               >
                <Form.Control
                  type="text"
                  className={Styles.customInput}
                  autoFocus
                  placeholder='Enter the Event End Time'
                  onChange={e => setEventEndTime(e.target.value)}
                  value={eventEndTime}
                />
              </Form.Group>
              <Form.Group className="mb-3">
              <Form.Control 
              as="textarea" 
              rows={3}
              className={Styles.customInput}
              placeholder="Enter the Description"
              onChange={e => setDescription(e.target.value)}
              value={description}
              />
               </Form.Group>
              <Button variant="danger" onClick={saveHandler} className={Styles.customBtn}>
              Save
            </Button>
            </Form>
          </Modal.Body>
          
        </Modal>
    </Container>
    </>
  )
}

export default Dashboard