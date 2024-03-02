import React from "react"
import LoginImage from './assets/Frame.png'

const Login = () => {

  return (
    <div className="container-fluid vh-100 overflow-hidden">
    {/* Desktop Layout */}
    <div className="row d-none d-md-flex h-100">

      {/* Left Container (50%) */}
      <div className="col-md-6">
        <div className="d-flex flex-column align-items-center mt-5 pt-5 h-100">
          <h1>LOG IN</h1>
          <form className="w-100 d-flex flex-column align-items-center mt-5">
            {/* Your input fields */}
            <input type="text" className="form-control mb-5 border border-dark" style={{ width: '386px', height: '45px' }} placeholder="CONTACT NUMBER" />
            <input type="text" className="form-control mb-4 border border-dark" style={{ width: '386px', height: '45px' }} placeholder="OTP" />
            
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
              LOGIN
            </button>
            <p className="mt-4 text-center"
            style={{
              fontSize: '14px',
              color: '#1B3B36',
               }}
            >Don't have an account? 
            <button
              type="button"
              className="btn btn-link mb-2 text-decoration-underline"
              style={{
                fontFamily: 'Inter, sans-serif', // Specify font-family
                fontSize: '11px', // Specify font-size
                color:'#1B3B36',
                position: 'relative',
                left: '-6px',
                top: '2px'
              }}
            >
              Sign up
            </button>

            </p>

          </form>
        </div>
      </div>

      {/* Right Container (50%) */}
      <div className="col-md-6" style={{ background: '#1B3B36', color: 'white' }}>
        <div className="d-flex flex-column align-items-center justify-content-center h-100">
          <img src={LoginImage} alt="Your Image" className="img-fluid" />
        </div>
      </div>
      
    </div>

    {/* Mobile Layout */}
    <div className="row d-md-none">

  {/* Image Container at the Top */}
  <div className="col-12" style={{ background: 'white' }}>
    <div className="d-flex flex-column align-items-center justify-content-center p-3">

      <img src={LoginImage} alt="Your Image" className="img-fluid" style={{ width: '228px', height: '211px' }}/>
    </div>
  </div>
  
  {/* Input Fields Container at the Bottom */}
  <div className="col-12">
          <h1 className="mt-2 ms-3 mb-3" style={{fontSize: '20px'}}>LOG IN</h1>
    <div className="d-flex flex-column align-items-center justify-content-center p-3">
      <form className="w-100 d-flex flex-column align-items-center mt-1">
        {/* Your input fields */}
        <input type="text" className="form-control mb-3 shadow-sm" placeholder="PHONE NUMBER" />
        <input type="text" className="form-control mb-3 shadow-sm" placeholder="OTP" />
        
        {/* Generate OTP Button */}
        <button
          type="button"
          className="btn btn-link mb-3 text-decoration-underline"
          style={{ width: '100%', height: '45px', color:'#1B3B36', fontSize: '14px', display: 'flex', justifyContent: 'flex-end' }}
        >
          Generate OTP
        </button>

        {/* Submit Button */}
        <button type="button" className="btn" style={{ width: '192px', height: '45px', background: '#1B3B36', color: '#fff' }}>
          LOGIN
        </button>

        <p className="mt-4 text-center"
          style={{
            fontSize: '14px',
            color: '#1B3B36',
          }}
        >
          Don't have an account?{' '}
          <button
            type="button"
            className="btn btn-link mb-2 text-decoration-underline font-weight-bold"
            style={{
              fontFamily: 'Inter, sans-serif', // Specify font-family
              fontSize: '11px', // Specify font-size
              color: '#1B3B36',
              position: 'relative',
              left: '-6px',
              top: '2px',
              fontWeight: 'bold'
            }}
          >
            Sign up
          </button>
        </p>

      </form>
    </div>
  </div>
    </div>

  </div>
);
}

export default Login