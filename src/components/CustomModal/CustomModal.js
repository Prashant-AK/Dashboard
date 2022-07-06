import React,{useState} from 'react'
import {Button,Modal,Form} from 'react-bootstrap'
import Styles from './CustomModal.module.css'


const CustomModal = () =>{
    const [show, setShow] = useState(true);
  
    const [eventName,setEventName] = useState('')
    const [imageUrl,setImageUrl] = useState('')
    const [eventStartTime,setEventStartTime] = useState('');
    const [eventEndTime,setEventEndTime] = useState('')
    const [description,setDescription] = useState('')
    
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
      
      // const data = {"name":eventName,"image_url":imageUrl,"event_start_time":eventStartTime,"event_end_time":eventEndTime,"description":description}
      // const response = await api.post('internal/events',bodyFormData,{
      //   headers:{"fakeauth":"V39-a-dOtV0N1V3njBqo7kEiG68_eWNtUvxrOQF5izX40dbWUtnTya9hT_HMgSWlwm6Xys9wTvLChtWBmiO4LRBgdxPjxEJPszsvXQQZ-hOkXfYR9EfMbnVDNOwLdvJusXWULw"},
        
      // })
      // // console.log("response",response)
      fetch('https://dev.insane.ai/api/internal/events',{
        method:"post",
        body:bodyFormData,
        headers:{
          "token":"Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2NTQ4NjkwMjEsIm5iZiI6MTY1NDg2OTAyMSwianRpIjoiMWQ4YThkNjUtOTA0MC00MTIxLTkwNDctYTQ5NTg3MTllZGQ4IiwiaWRlbnRpdHkiOiI4MjQ1IiwiZnJlc2giOmZhbHNlLCJ0eXBlIjoiYWNjZXNzIn0.20rgmafMBBbPYriSnArqKMurWSfTRtp7Zhl2x1yNH80",
          "fakeauth":"V39-a-dOtV0N1V3njBqo7kEiG68_eWNtUvxrOQF5izX40dbWUtnTya9hT_HMgSWlwm6Xys9wTvLChtWBmiO4LRBgdxPjxEJPszsvXQQZ-hOkXfYR9EfMbnVDNOwLdvJusXWULw",
          }
      })
      .then(res => res.json())
      .then(data => console.log(data))
      setShow(false)
    };
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false)
    return (
      <>
        <Button variant="danger" onClick={handleShow}>
          Open Modal
        </Button>
  
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
      </>
    );
  }
  

export default CustomModal