import React from 'react'
import MyNavbar from '../../components/navbar/navbar'
import { Container, Row, Col, Button } from 'react-bootstrap';
import shareIcon from './assets/Frame 584.png'
import phoneIcon from './assets/Vector (2).png'
import wastappIcon from './assets/Group 304.png'
import fileIcon from './assets/file.png'
import downloadIcon from './assets/download.png'
import ratingIcon from './assets/stars.png'
import { CiLocationOn, CiCalendar, CiClock2 } from 'react-icons/ci';
import { BsPeople } from "react-icons/bs";
import corerctIcon from './assets/tick-circle_svgrepo.com.png'
import './appointmentDetails.css'
import questionIcon from './assets/Vector (3).png';
import FooterBanner from '../../components/footerBanner/footerBanner'
import Footer from '../../components/footer/footer'
import Deals from "../../components/Deals/deal"
import MostBooked from "../../components/MostBooked/MostBooked"


const AppointmentDetails = () => {

  
return (
<div>
<MyNavbar/>
<div className="container mx-auto m-5 p-4 col-sm-10 col-md-10 container-box-shadow">
  
<Container fluid>
    <Row>
        {/* Left Container */}
        <div className="col-md-6">
<div className="d-flex flex-column align-items-start">
    <div className="d-flex justify-content-between">
        <h3 className="fs-5 fw-normal">Thanks for choosing us!</h3>
        {/* Hidden in Desktop, Visible in Mobile */}
        <div className="d-flex gap-2 d-sm-none justify-content-end ms-5">
            <div className="me-2">
                <img src={shareIcon} alt="Image 1" className="img-fluid" />
            </div>
            <div className="me-2">
                <img src={phoneIcon} alt="Image 2" className="img-fluid" />
            </div>
            <div className="">
                <img src={wastappIcon} alt="Image 3" className="img-fluid" />
            </div>
        </div>
    </div>

    <div className="d-flex align-items-baseline gap-2">
        <div className="me-2">
            <img src={fileIcon} alt="File Icon" className="img-fluid" />
        </div>
        <div className="m-2">
            <p>Invoice</p>
        </div>
        <div className="m-2">
            <img src={downloadIcon} alt="Download Icon" className="img-fluid" />
        </div>
    </div>

    <div className="d-flex align-items-center">
        <p className="m-0 me-2 text-nowrap">RATE OUR SERVICES</p>
        <img src={ratingIcon} className="img-fluid ms-5" alt="Rating Icon" style={{height: '15px'}}/>
    </div>

</div>
</div>


        {/* Right Container */}
        <div className="d-flex flex-column col-md-3 ms-auto">
            <div className='d-none d-md-flex gap-3 justify-content-end'>
                <div className='ms-2 me-2'>
                    <img src={shareIcon} alt="Image 1" className="img-fluid" />
                </div>
                <div className='ms-2 me-2'>
                    <img src={phoneIcon} alt="Image 2" className="img-fluid" />
                </div>
                <div className='ms-2 me-3'>
                    <img src={wastappIcon} alt="Image 3" className="img-fluid" />
                </div>
            </div>

            <button className="mt-3 py-2 bg-transparent border-1 rounded font-weight-bold reschedule" style={{fontWeight: 'bold'}}>RESCHEDULE</button>
        </div>
    </Row>
</Container>
</div>

<div className="container mx-auto col-sm-10 col-md-10 container-box-shadow-details">

    <Row>
      {/* Left Container */}
      <Col md={6} style={{fontSize: '14px', fontWeight: '400'}}>
        
          <div className="mb-3 p-3 ps-4 d-flex align-items-center justify-content-start" style={{boxShadow: '0px 1px 4px 0px #00000040'}}>
          <CiLocationOn style={{ fontSize: '1.5rem' }} className="me-2" />
          N Main Rd, opposite zodiac retail store, Liberty Phase 2, Ragvilas Society, Koregaon Park, Pune, Maharashtra 411001
          </div>

          <div className="mb-3 p-3 ps-4 d-flex align-items-center justify-content-start" style={{boxShadow: '0px 1px 4px 0px #00000040'}}>
          <CiCalendar style={{ fontSize: '1.5rem' }} className="me-2"/> Monday, 4 July 2024 
          </div>

          <div className="mb-3 p-3 ps-4 d-flex align-items-center justify-content-start" style={{boxShadow: '0px 1px 4px 0px #00000040'}}>
          <CiClock2 style={{ fontSize: '1.5rem' }} className="me-2"/>06:28:58 am
          </div>

          <div className="mb-3 p-3 ps-4 d-flex flex-column align-items-start justify-content-start" style={{boxShadow: '0px 1px 4px 0px #00000040'}}>
          <div>
          <BsPeople style={{ fontSize: '1.5rem' }} className="me-2"/> Preferred Member Name
          </div>

          <div className="d-none d-md-flex align-items-center mt-3">
              <p className="m-0 me-2 text-nowrap">RATE OUR SERVICES</p>
              <img src={ratingIcon} className="img-fluid ms-4" alt="Rating Icon" style={{height: '15px'}} />
          </div>

          </div>

          <div className="d-flex d-md-none mb-3 p-3 ps-4 align-items-center justify-content-start" style={{ boxShadow: '0px 1px 4px 0px #00000040' }}>
              <div className="d-flex align-items-center">
                  <p className="m-0 me-2 text-nowrap">RATE OUR SERVICES</p>
                  <img src={ratingIcon} className="img-fluid ms-4" alt="Rating Icon" style={{ height: '15px' }} />
              </div>
          </div>

          <div className="d-flex  align-items-center mt-4 ps-4 pe-4 pb-3 pt-2" style={{boxShadow: '0px 1px 4px 0px #00000040'}}>
              <Col>
              <h5>DESCRIPTION</h5>
              <div className='p-2' style={{border: '1px solid #D9D9D9', color: '#575757'}}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </div>
              </Col>
          </div>
          
        
      </Col>

      {/* Right Container */}
      <Col md={6}>
        <div className="mb-3 p-3 payment" style={{boxShadow: '0px 1px 4px 0px #00000040'}}>
          {/* Your content for the first right container div */}
          {[1, 2, 3, 4, 5].map((index) => (
              <div key={index} className="d-flex mb-2">
                <Col>
                <p className='p-0 m-0' style={{fontSize: '14px', fontWeight: '400'}}>Hair</p>
                <h5 className='p-0 m-0' style={{fontSize: '14px', fontWeight: '600'}}>HairCut</h5> 
                </Col>
                <p className='p-0 m-0' style={{fontSize: '14px', fontWeight: '400'}}>$350</p>
                </div>
            ))}
        </div>
        <div className="mb-3 p-3" style={{boxShadow: '0px 1px 4px 0px #00000040'}}>
          <h4 className='mb-4' style={{ fontSize: '20px', fontWeight: '400'}}>PAYMENT SUMMARY</h4>
    
              <div className="d-flex justify-content-between mb-3">   
                <p className='p-0 m-0' style={{fontSize: '15px', fontWeight: '300', color: 'rgb(87, 87, 87)'}}>Service & Product <br/>Total</p>
                <p className='p-0 m-0' style={{fontSize: '18px', fontWeight: '400'}}>$350</p>
              </div>

              <div className="d-flex justify-content-between mb-1">   
                <p className='p-0 m-0' style={{fontSize: '15px', fontWeight: '300', color: 'rgb(87, 87, 87)'}}>Taxes and Fees</p>
                <p className='p-0 m-0' style={{fontSize: '18px', fontWeight: '400'}}>$350</p>
              </div>

              <div className="d-flex justify-content-between mb-1">   
                <p className='p-0 m-0' style={{fontSize: '15px', fontWeight: '300', color: 'rgb(87, 87, 87)' }}>Service Charges</p>
                <p className='p-0 m-0' style={{fontSize: '18px', fontWeight: '400'}}>$350</p>
              </div>

              <div className="d-flex justify-content-between ">   
                <p className='p-0 m-0' style={{fontSize: '15px', fontWeight: '300', color: 'rgb(87, 87, 87)' }}>Coupon & Offer</p>
                <p className='p-0 m-0' style={{fontSize: '18px', fontWeight: '400'}}>$350</p>
              </div>
              <hr style={{border: '1px solid #000', color:'#000'}}/>

              <div className="d-flex justify-content-between ">   
                <p className='p-0 m-0' style={{fontSize: '15px', fontWeight: '300', color: 'rgb(87, 87, 87)' }}>Total Amount Paid</p>
                <p className='p-0 m-0' style={{fontSize: '18px', fontWeight: '400'}}>$350</p>
              </div>
  
        </div>
      </Col>
    </Row>

</div>

<div className="container mx-auto mt-5 py-3 px-5 col-sm-10 col-md-10" style={{ boxShadow: '0px 1px 4px 0px #00000040'}}>
      <h4 className="mb-5" style={{fontSize: '20px'}}>AFTERCARE TIPS</h4>

      {[1, 2, 3, 4, 5].map((index) => (
                <div key={index} className="mb-4">
                  <div className='d-flex align-items-center gap-4'>
                    <img src={ corerctIcon } style={{height: '20px'}}/>
                    <span style={{color: '#575757', fontSize: '16px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
                </div>
                </div>
              ))}

</div>
{/* //cordian */}
<div className="container mx-auto mt-5 py-3 col-sm-10 col-md-10" >
      <div className='d-flex align-items-baseline gap-3'>
        <img src={questionIcon} style={{height: '22px', position: 'relative', top: '4px'}}/>
        <h4 className="mb-5 m- p-0" style={{fontSize: '20px'}}>FREQUENTLY ASKED QUESTIONS</h4>
      </div>
      

      {[1, 2, 3, 4, 5].map((index) => (
                <div key={index} className="mb-4 px-4 py-4" style={{ boxShadow: '0px 1px 4px 0px #00000040'}}>
                    <span style={{color: '#575757', fontSize: '16px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
                </div>
              ))}

</div>

<div className="container mx-auto mt-5 py-3 col-sm-10 col-md-10" >
<FooterBanner/>
</div>

<div className="container mx-auto mt-5 py-3 col-sm-10 col-md-10" >
<Deals id="deals"/>
</div>

<div className="container mx-auto mt-5 py-3 col-sm-10 col-md-10" >
<MostBooked id="mostbooked"/>
</div>

<div className="container mx-auto mt-5 py-3 col-sm-10 col-md-10" >
<Footer />
</div>
</div>
)
}

export default AppointmentDetails