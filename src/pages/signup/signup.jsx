import React from "react"
import SignUpIcon from './assets/Frame.png'

const Signup = () => {

  return (
    <div className="container-fluid vh-100 overflow-hidden">
    {/* Desktop Layout */}
    <div className="row d-none d-md-flex h-100">

      {/* Left Container (50%) */}
      <div className="col-md-6">
        <div className="d-flex flex-column align-items-center mt-5 pt-5 h-100">
          <h1>SIGN UP</h1>
          <form className="w-100 d-flex flex-column align-items-center mt-5">
            {/* Your input fields */}
            <input type="text" className="form-control mb-4 border border-dark" style={{ width: '386px', height: '45px' }} placeholder="NAME" />
            <input type="text" className="form-control mb-4 border border-dark" style={{ width: '386px', height: '45px' }} placeholder="EMAIL" />
            <input type="text" className="form-control mb-5 border border-dark" style={{ width: '386px', height: '45px' }} placeholder="PHONE NUMBER" />
            <input type="text" className="form-control mb-5 border border-dark" style={{ width: '386px', height: '45px' }} placeholder="OTP" />
            
            {/* Generate OTP Button */}
            <button
              type="button"
              className="btn btn-link mb-3 text-decoration-underline"
              style={{ width: '192px', height: '45px', marginLeft: '18rem', color:'#1B3B36' }}
            >
              Generate OTP
            </button>

            {/* Submit Button */}
            <button type="button" className="btn" style={{ width: '192px', height: '45px', background: '#1B3B36', color: '#fff' }}>
              SIGN UP
            </button>
           

          </form>
        </div>
      </div>

      {/* Right Container (50%) */}
      <div className="col-md-6" style={{ background: '#1B3B36', color: 'white' }}>
        <div className="d-flex flex-column align-items-center justify-content-center h-100">
          <img src={SignUpIcon} alt="Your Image" className="img-fluid" />
        </div>
      </div>
      
    </div>

    {/* Mobile Layout */}
    <div className="row d-md-none">

  {/* Image Container at the Top */}
  <div className="col-12" style={{ background: 'white' }}>
    <div className="d-flex flex-column align-items-center justify-content-center p-3">

      <img src={SignUpIcon} alt="Your Image" className="img-fluid" style={{ width: '243px', height: '206px' }}/>
    </div>
  </div>
  
  {/* Input Fields Container at the Bottom */}
  <div className="col-12">
          <h1 className="mt-2 ms-3 mb-3" style={{fontSize: '20px'}}>SIGN UP</h1>
    <div className="d-flex flex-column align-items-center justify-content-center p-3">
      <form className="w-100 d-flex flex-column align-items-center mt-1">
        {/* Your input fields */}
        <input type="text" className="form-control mb-3 shadow-sm custom-placeholder" placeholder="NAME" style={{height: '45px'}}/>
        <input type="text" className="form-control mb-3 shadow-sm custom-placeholder" placeholder="EMAIL" style={{height: '45px'}}/>
        <input type="text" className="form-control mb-3 shadow-sm custom-placeholder" placeholder="PHONE NUMBER" style={{height: '45px'}}/>
        <input type="text" className="form-control mb-3 shadow-sm custom-placeholder" placeholder="OTP" style={{height: '45px'}}/>
        
        {/* Generate OTP Button */} 
        <button
          type="button"
          className="btn btn-link mb-1 text-decoration-underline"
          style={{ width: '100%', height: '45px', color:'#1B3B36', fontSize: '14px', display: 'flex', justifyContent: 'flex-end' }}
        >
          Generate OTP
        </button>

        {/* Submit Button */}
        <button type="button" className="btn" style={{ width: '192px', height: '45px', background: '#1B3B36', color: '#fff' }}>
          SIGN UP
        </button>

      </form>
    </div>
  </div>
    </div>

  </div>
);
}

export default Signup