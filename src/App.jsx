
import { Routes, Route } from "react-router-dom"
import './App.css'
import Signup from "./pages/signup/signup"
import HomePage from "./pages/homePage/homePage"
import Login from "./pages/login/login"
import 'bootstrap/dist/css/bootstrap.min.css';
import AppointmentDetails from "./pages/appointmentDetails/appointmentDetails"
import MyInvoice from "./pages/myInvoice/myInvoice"
import MyProfile from "./pages/myProfile/MyProfile"
import Setting from "./pages/setting/Setting"
import Guides from './pages/myGuides/Guides'

const App = () => {
  
  return (
    <>
      <Routes>
        <Route path="/" element = {<HomePage/>}> </Route>
        <Route path="/login" element = {<Login/>}> </Route>
        <Route path="/signup" element = {<Signup/>}> </Route>
        <Route path="/previous-appointment" element = {<AppointmentDetails/>}> </Route>
        <Route path="/my-Invoice" element = {<MyInvoice/>}> </Route>
        <Route path="/Profile" element = {<MyProfile/>}> </Route>
        <Route path="/setting" element = {<Setting/>}> </Route>
        <Route path="/guides" element = {<Guides/>}> </Route>


      </Routes>
    </>
  )
}

export default App