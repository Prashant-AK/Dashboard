import './App.css';
import Navigation from './components/Navigation/Navigation';
import Login from './components/Login/Login';
import Dashboard from './components/Dashboard/Dashboard';
import Events from './components/Events/Events';
import CustomModal from './components/CustomModal/CustomModal';
import AddEvent from './components/Events/AddEvent';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
function App() {
  return (
      <Router>
      <Routes>
      <Route path="/" element={<Dashboard/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/events' element={<Events/>}/>
      <Route path='/modal' element={<CustomModal/>}/>
      <Route path='/addevent' element={<AddEvent/>}/>
      </Routes>
      </Router>
  );
}

export default App;
