
import { Routes, Route } from "react-router-dom"
import './App.css'
import Signup from "./pages/signup/signup"
import HomePage from "./pages/homePage/homePage"
import Login from "./pages/login/login"
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  
  return (
    <>
      <Routes>
        <Route path="/" element = {<HomePage/>}> </Route>
        <Route path="/login" element = {<Login/>}> </Route>
        <Route path="/signup" element = {<Signup/>}> </Route>
      </Routes>
    </>
  )
}

export default App