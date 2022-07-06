import React,{createContext,useEffect,useState} from 'react'
import Navigation from '../Navigation/Navigation'
import Header from './Header'
import {Container,Col,Row, Button} from 'react-bootstrap'
import CustomTextBox from './CustomTextBox'
import CustomTable from './CustomTable'
import CustomInput from './CustomInput'
import MetricItem from './MetricItem'
import LeaderBoardTag from './LeaderBoardTag'
import PaymentDetail from './PaymentDetail'
import {useLocation} from 'react-router-dom'
import Team from './Team'
import data from '../../data/data'
import WorkoutTable from './WorkoutTable'


export const UserContext = createContext()

const submitHandler =  (name,description,image_url,event_start_time,event_end_time,is_active,user_group,extra_details,id) => {
  let bodyFormData = new FormData()
  bodyFormData.append("name",name)
  bodyFormData.append("description",description)
  bodyFormData.append("image_url",image_url)
  bodyFormData.append("event_start_time","2022-02-21 04:00:01")
  bodyFormData.append("event_end_time","2022-02-21 04:00:01")
  bodyFormData.append("is_active",is_active);
  bodyFormData.append("user_group",user_group)
  bodyFormData.append("extra_details",extra_details)     
  fetch(`https://dev.insane.ai/api/internal/events/${id}`,{
    method:"put",
    body:bodyFormData,
    headers:{

    }
  })
  .then(res => res.json())
  .then(data => console.log(data))

};

const AddEvent = () => {

    const location = useLocation()
    const detail = location.state.detail
    console.log(detail)
    const [value,setValue] = useState(detail) 
    // console.log(value)
   


  return (
        <UserContext.Provider value={{value,setValue}}>
        <Navigation dashboard={true}/>
        <Header titleText="Event" eventname = {detail?.name} eventstarttime={detail?.event_start_time} eventendtime={detail?.event_end_time}/>
        <Container>
        <Row>
            <Col sm={4}>
            <img src={detail?.image_url} style={{width:"400px",height:"85px"}} />
            {/* <CustomTextBox placeholderText="+"/> */}
            </Col>
            <Col sm={4}>
            <CustomTextBox placeholderText="Description" />
            </Col>
            <Col sm={4}>
            {/* <CustomTextBox placeholderText="Rules"/> */}
            </Col>
        </Row>
        </Container>
        <CustomTable titleText="Challenges" tabledata={detail?.extra_details?.result_metrics}/>
        {/* <Header titleText="Rewards"/> */}
        {/* <CustomTable titleText="Rewards Item"/> */}
        <Container>
        <Row>
          <Col className="col-sm-4 col-offset-8">
          {/* <CustomInput/> */}
          </Col>
        </Row>
        </Container>      
        {/* <CustomTable titleText="Event Results Completion Metric Item"/> */}
        <br/>
        {/* <MetricItem/> */}
        <br/>
        {(detail?.extra_details!=null && detail?.extra_details) && <LeaderBoardTag tags={detail?.extra_details?.tags}/> }
        <br/>
        <div>

        </div>
        <CustomTable titleText="Result Metrics" tabledata={detail?.extra_details?.result_metrics}/>
        <br/>
        <Container>
        {detail?.extra_details?.available_workouts!=null && <h3>Available Workouts</h3>}
        </Container>
       
        {detail?.extra_details?.available_workouts!=null && Object.keys(detail?.extra_details?.available_workouts?.workouts)?.map((el,idx) => <WorkoutTable tabledata={detail?.extra_details?.available_workouts?.workouts[el]} titleText={el} key={idx}/>)}
        {/* <PaymentDetail titleText="Payment"/> */}
        <Container>
        <Button variant='primary' onClick={()=>submitHandler(value.name,value.description,value.image_url,value.event_start_time,value.event_end_time,value.is_active,value.user_group,value.extra_detail,value.id)}>Submit</Button>
        </Container>
        {/* <CustomTable titleText="Available Dates"/> */}
        {/* <Team titleText="Team"/> */}

        {/* <CustomTable titleText="Available Teams"/> */}
        </UserContext.Provider>
  )
}



export default AddEvent