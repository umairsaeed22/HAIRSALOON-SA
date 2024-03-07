    import React from 'react'
    import { Container, Row, Col, Button } from 'react-bootstrap';
    import shareIcon from './assets/Frame 584.png'
    import phoneIcon from './assets/Vector (2).png'
    import wastappIcon from './assets/Group 304.png'
    import fileIcon from './assets/file.png'
    import downloadIcon from './assets/download.png'
    import ratingIcon from './assets/stars.png'
    import MyNavbar from '../../components/navbar/navbar'
    import FooterBanner from '../../components/footerBanner/footerBanner'
    import Footer from '../../components/footer/footer'
    import Deals from "../../components/Deals/deal"
    import MostBooked from "../../components/MostBooked/MostBooked"
    import ServiceIcon from './assets/Group 34304.png'
    import Hero from '../../components/heroBanner/hero'

    const myInvoice = () => {

    return (
    <div>
        <MyNavbar/>
        <Hero className='d-flex d-md-none' />
        <div className="container mx-auto m-5 col-sm-10 col-md-10">
        <h4>My Invoice</h4>
        </div>

        {[1, 2, 3, 4, 5, 6, 7].map((index) => (
        <div className="container mx-auto m-5 p-4 col-sm-10 col-md-10" key={index} style={{ boxShadow: '0px 1px 4px 0px #00000040'}}>
           
        
            <Container fluid >
            <Row>
                {/* Left Container */}
                <div className="col-md-6">
                    <div className="d-flex gap-5 align-items-start">
                        <img src={ServiceIcon} />
                    <div>
                        <span style={{color: '#575757', fontSize: '14px', fontWeight: '400'}}>SERVICE STATUS</span>
                        <h3 className="fs-5 fw-normal">Relax Men's Parlour</h3>
                        <span style={{color: '#575757', fontSize: '14px', fontWeight: '500'}}>350$ Paid</span>
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
                </div>

                    </div>
                </div>


                {/* Right Container */}
                <div className="d-flex flex-column gap-5 col-md-3 ms-auto">
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

                    <button className="mt-3 py-2 border-1 rounded font-weight-bold reschedule" 
                    style={{fontWeight: 'bold', background: '#1B3B36', color: '#fff'}}>
                        RESCHEDULE
                        </button>
                </div>
            </Row>
            </Container>
       
        </div>
         ))}
    
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

    export default myInvoice