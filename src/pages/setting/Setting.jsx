import React from 'react'
import MyNavbar from '../../components/navbar/navbar';
import DownloadIcon from './assets/download-minimalistic_svgrepo.com.png'
import PdfIcon from './assets/Group.png'
import Footer from '../../components/footer/footer'

const Setting = () => {
  return (
    <div>
        <MyNavbar />
        <div className="container mx-auto m-5 p-4 col-sm-10 col-md-10 d-none d-sm-block" style={{boxShadow: '0px 1px 4px 0px #00000040'}}>

            <h4 className='ms-3 mb-4' style={{fontSize: '18px', color: '#000000', fontWeight: '500'}}>ABOUT COMPANY</h4>

            <p className='m-3' style={{color: '#575757'}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, lorem ipsum lrt
sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, lorem ipsum lrt
sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, lorem ipsum lrt
sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>

        </div>

        <div className={`container mx-auto p-4 col-sm-10 col-md-9.5 ${'mt-md-5 mb-md-5'}`}>
        <div className={`d-flex flex-column justify-content-center gap-5 ${'ms-md-4 me-md-4 flex-md-row'}`}>
                <div className="px-3 py-3 col-md-6" style={{boxShadow: '0px 1px 4px 0px #00000040'}}>
                    <h1 style={{fontSize: '18px', color: '#000000', fontWeight: '500'}}>TERMS & CONDITIONS</h1>
                    <div className="col-md-9 mb-3">
                    <p style={{color: '#575757'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    <div className="col-md-9 mb-3 d-flex align-items-center w-100 gap-5">
                        <img src={PdfIcon} className="img-fluid" alt="PDF Icon" />
                        <p className='col-md-6'  style={{fontSize: '16px', color: '#575757'}}>Download Document to verify Terms & Condition</p>
                        <img src={DownloadIcon} className="img-fluid" alt="Download Icon" />
                    </div>

                </div>

                <div className="px-3 py-3 col-md-6" style={{boxShadow: '0px 1px 4px 0px #00000040'}}>
                    <h1 style={{fontSize: '18px', color: '#000000', fontWeight: '500'}}>PRIVACY POLICY</h1>
                    <div className="col-md-9 mb-3">
                    <p style={{color: '#575757'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    <div className="col-md-9 mb-3 d-flex align-items-center w-100 gap-5">
                        <img src={PdfIcon} className="img-fluid" alt="PDF Icon" />
                        <p className='col-md-6' style={{fontSize: '16px', color: '#575757'}}>Download Document to verify Terms & Condition</p>
                        <img src={DownloadIcon} className="img-fluid" alt="Download Icon" />
                    </div>
                </div>
        </div>

        </div>

        <div className='mt-5 d-none d-sm-block'>
            <Footer />
        </div>

    </div>
  )
}

export default Setting