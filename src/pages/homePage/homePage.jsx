import { Routes, Route } from "react-router-dom"
import Navbar from "../../components/navbar/navbar"
import Hero from '../../components/heroBanner/hero'
import FooterBanner from '../../components/footerBanner/footerBanner'
import Footer from '../../components/footer/footer'
import '../../App.css'
import UpcomingAppointments from '../../components/UpcomingAppointment/UpcomingAppointments'
import PreviousAppointments from '../../components/PreviousAppointment/PreviousAppointment'
import Deals from "../../components/Deals/deal"
import MostBooked from "../../components/MostBooked/MostBooked"
const HomePage = () => {

  return (
    <main>
        <Navbar/>
        <Hero />
        <div className="ms-lg-5 me-lg-5">
        <UpcomingAppointments id="UpcomingAppointments"/>
        <PreviousAppointments id="PreviousAppointments"/>
        <Deals id="deals"/>
        <MostBooked id="MostBooked"/>
        <FooterBanner />
        <Footer />
        </div>
    </main>
  )
}

export default HomePage