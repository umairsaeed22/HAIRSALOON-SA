import React from 'react';
import MyNavbar from '../../components/navbar/navbar';
import { CiCamera } from 'react-icons/ci';
import ProfileBg from './assets/Ellipse 1.png';
import { CiLocationOn } from "react-icons/ci";
import { CiPhone } from "react-icons/ci"; 
import './myProfile.css'

const MyProfile = () => {
  const handleFileChange = (e) => {
    // Handle file change logic here
    console.log(e.target.files[0]);
  };

  const labelStyle = {
    width: '120px',
    height: '120px',
    cursor: 'pointer',
    position: 'relative',
    backgroundImage: `url(${ProfileBg})`, // Use the image variable here
    backgroundSize: 'cover',
    border: '1px solid #ccc', // Add a border for better visibility
  };

  return (
    <div className='mb-5'>
      <MyNavbar />

      <div className="container mx-auto m-5 p-4 col-sm-10 col-md-10 color-cont">
        {/* desktop */}
        <div className="d-none d-sm-flex flex-row gap-3 mt-5 mx-5">
          {/* Left Container (30% width) */}
          <div className="col-md-3  p-4" style={{ boxShadow: '0px 4px 4px 0px #00000040', background: '#fff' }}>
            {/* Upload Profile Picture Input */}
            <div className="col-md-3 w-100 d-flex align-items-center gap-3 justify-content-center">
              {/* Profile Picture Uploader */}
              <div className="position-relative">
                <input type="file" className="form-control visually-hidden" id="profilePicture" onChange={handleFileChange} />
                <label htmlFor="profilePicture" className="rounded-circle overflow-hidden d-flex align-items-center justify-content-center mb-3" style={labelStyle}>
                  <img src={ProfileBg} style={{ width: '117px', height: '117px' }} alt="Profile Background" />
                </label>
                <div className="position-absolute bottom-0 end-0" style={{ boxShadow: '0px 4px 4px 0px #00000040', left: '80px', width: '30px', height: '30px', borderRadius: '50%' }}>
                  <CiCamera  style={{ fontSize: '24px', padding: '3px', position: 'relative', top: '3px' }} />
                </div>
              </div>
            </div>

            <div className='d-flex flex-column align-items-center mb-5 pb-5'>
            {/* User Name Span */}
            <span>User Name</span>

            {/* Margin below User Name Span */}
            <div className="mb-5"></div>

            {/* Phone Number and Location Icons with Text */}
            <div className="d-flex flex-column mt-5">
              <div className="d-flex align-items-center mb-3 gap-3">
                 <CiPhone  style={{color: '#000', fontSize: '20px'}}/>
                <span>+91 9087654321</span>
              </div>
              <div className="d-flex align-items-center gap-3">
                <CiLocationOn style={{ color: '#000', fontSize: '25px' }} />
                <span>123 Main Street, apt 4B San Diego CA, 91911</span>
              </div>

              </div>
            </div>
          </div>

          {/* Right Container (70% width) */}
          <div className="col-md-9 p-5" style={{ boxShadow: '0px 4px 4px 0px #00000040', background: '#fff' }}>
            {/* 5 Input Fields */}
            <div className="mb-3">
              <input type="text" className="form-control mb-3" placeholder="NAME" style={{boxShadow: '0px 1px 4px 0px #00000033', height: '45px'}}/>
              <input type="text" className="form-control mb-3" placeholder="EMAIL" style={{boxShadow: '0px 1px 4px 0px #00000033', height: '45px'}}/>
              <input type="text" className="form-control mb-3" placeholder="USER NAME" style={{boxShadow: '0px 1px 4px 0px #00000033', height: '45px'}}/>
              <input type="text" className="form-control mb-3" placeholder="CONTACT DETAILS" style={{boxShadow: '0px 1px 4px 0px #00000033', height: '45px'}}/>
              <input
                type="text"
                className="form-control mb-3"
                placeholder="ADDRESS DETAILS"
                style={{
                  boxShadow: '0px 1px 4px 0px #00000033',
                  height: '100px',
                  lineHeight: '1' // Set lineHeight to 1 for top alignment
                }}
              />

              </div>

            {/* Update Button */}
            <div className='d-flex justify-content-end'>
            <button className="py-1 px-4" style={{background: '#1B3B36', color: '#fff', fontSize: '20px'}}>UPDATE</button>
          </div>
          </div>
        </div>

        {/* mobile */}

        <div className="flex-column gap-3 d-flex d-md-none">
          {/* Left Container (30% width) */}
          <div className="p-4">
            {/* Upload Profile Picture Input */}
            <div className="w-100 d-flex align-items-center gap-3 justify-content-center">
              {/* Profile Picture Uploader */}
              <div className="position-relative">
                <input type="file" className="form-control visually-hidden" id="profilePicture" onChange={handleFileChange} />
                <label htmlFor="profilePicture" className="rounded-circle overflow-hidden d-flex align-items-center justify-content-center mb-3" style={labelStyle}>
                  <img src={ProfileBg} style={{ width: '117px', height: '117px' }} alt="Profile Background" />
                </label>
                <div className="position-absolute bottom-0 end-0" style={{ boxShadow: '0px 4px 4px 0px #00000040', left: '80px', width: '30px', height: '30px', borderRadius: '50%' }}>
                  <CiCamera  style={{ fontSize: '24px', padding: '3px', position: 'relative', top: '3px' }} />
                </div>
              </div>
            </div>

            <div className='d-flex flex-column align-items-center'>
            {/* User Name Span */}
            <span>User Name</span>

            {/* Margin below User Name Span */}

            {/* Phone Number and Location Icons with Text */}
            <div className="d-flex flex-column">
              <div className="d-flex align-items-center">
                <span>+91 9087654321</span>
              </div>
              </div>
            </div>
          </div>

          {/* Right Container (70% width) */}
          <div>
            {/* 5 Input Fields */}
            <div className="mb-3">
              <input type="text" className="form-control mb-3" placeholder="NAME" style={{boxShadow: '0px 1px 4px 0px #00000033', height: '45px'}}/>
              <input type="text" className="form-control mb-3" placeholder="EMAIL" style={{boxShadow: '0px 1px 4px 0px #00000033', height: '45px'}}/>
              <input type="text" className="form-control mb-3" placeholder="USER NAME" style={{boxShadow: '0px 1px 4px 0px #00000033', height: '45px'}}/>
              <input type="text" className="form-control mb-3" placeholder="CONTACT DETAILS" style={{boxShadow: '0px 1px 4px 0px #00000033', height: '45px'}}/>
              <input
                type="text"
                className="form-control mb-3"
                placeholder="ADDRESS DETAILS"
                style={{
                  boxShadow: '0px 1px 4px 0px #00000033',
                  height: '100px',
                  lineHeight: '1' // Set lineHeight to 1 for top alignment
                }}
              />

              </div>

            {/* Update Button */}
            <div className='d-flex justify-content-end'>
            <button className="py-1 px-4" style={{background: '#1B3B36', color: '#fff', fontSize: '20px'}}>UPDATE</button>
          </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default MyProfile;
