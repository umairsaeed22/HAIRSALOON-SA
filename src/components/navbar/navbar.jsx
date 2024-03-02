import React, {useState} from 'react';
import { Navbar, Container, Nav, Form } from 'react-bootstrap';
import { CiLocationOn, CiSearch } from 'react-icons/ci';
import Logo from './assests/logo.png';
import userIcon from './assests/user.png';
import './navbar.css';

const MyNavbar = () => {
    const [showMobileNav, setShowMobileNav] = useState(false);

    const toggleMobileNav = () => {
      setShowMobileNav(!showMobileNav);
    };

  return (
    <Navbar expand="md">
      {/* Desktop View */}
      <Container className='d-none d-md-flex align-items-center'>
        {/* First Container */}
        <Navbar.Brand>
          <img src={Logo} className='logo_image' alt="Logo" />
        </Navbar.Brand>

        {/* Second Container */}
        <div className='location_container position-relative me-3 '>
          <span className="navlocation_icon position-absolute top-50 start-0 translate-middle-y me-2"><CiLocationOn /></span>
          <Form.Control type="text" placeholder="Location" className='input_field ps-4' />
        </div>

        {/* Third Container */}
        <div className='search_container position-relative me-3 col-lg-4'>
          <span className="search_icon position-absolute top-50 start-0 translate-middle-y me-2"><CiSearch /></span>
          <Form.Control type="text" placeholder="Search for services" className='input_field ps-4' />
        </div>

        {/* Fourth Container */}
        <Nav className='flex-row justify-content-center'>
          <Nav.Link>Book a slot</Nav.Link>
          <Nav.Link>My Invoice</Nav.Link>
          <Nav.Link>My Coupons</Nav.Link>
          <Nav.Link>My Guide</Nav.Link>
        </Nav>

        {/* Fifth Container */}
        <div className='profile_container'>
          <img src={userIcon} className='user_icon' alt="User Icon" />
        </div>
      </Container>

      {/* Mobile View */}
      <Container className='d-flex d-md-none pe-3 ps-3 pb-3 shadow m'>
        {/* Mobile Toggle Button */}
        <Navbar.Toggle className='position-relative' onClick={toggleMobileNav} aria-controls="basic-navbar-nav" />

        {/* Mobile Navbar Collapse */}
        {showMobileNav && (
          <div className='nav-links translate-middle-y shadow z-9' style={{zIndex:9}}>
            {/* Mobile Nav Links */}
            <Nav className="position-absolute me-auto flex-column text-center" style={{background: '#fff', left: '-80px', top: '26px', border: '1px solid #E3E3E3', width: '145px'}}>
              <Nav.Link href="#" className='my-2 border-bottom'>My Profile</Nav.Link>
              <Nav.Link href="#" className='my-2 border-bottom'>Book A Slot</Nav.Link>
              <Nav.Link href="#" className='my-2 border-bottom'>My Invoice</Nav.Link>
              <Nav.Link href="#" className='my-2 border-bottom'>My Coupons</Nav.Link>
              <Nav.Link href="#" className='my-2 border-bottom'>My Guide</Nav.Link>
              <Nav.Link href="#" className='my-2 border-bottom'>Upcoming Appointments</Nav.Link>
              <Nav.Link href="#" className='my-2 border-bottom'>Previous Appointments</Nav.Link>
              <Nav.Link href="#" className='my-2 border-bottom'>About Us</Nav.Link>
              <Nav.Link href="#" className='my-2 border-bottom'>Logout</Nav.Link>
            </Nav>
          </div>
        )}

        {/* Mobile Location Container */}
        <div className='location_container position-relative me-3 mt-3'>
              <span className="navlocation_icon position-absolute top-50 start-0 translate-middle-y me-2"><CiLocationOn /></span>
              <Form.Control type="text" placeholder="Location" className='input_field ps-4 border-0' />
            </div>

        <div className='profile_container mt-3'>
              <img src={userIcon} className='user_icon' alt="User Icon" />
            </div>

      </Container>

      <div className="search_container position-relative w-100 m-3 d-flex align-items-center d-md-none" style={{ height: '45px' }}>
      <span className="search_icon position-absolute translate-middle-y me-2" style={{ left: '7px', top: '50%', width: '30px', height: '30px' }}>
        <CiSearch />
      </span>
      <Form.Control type="text" placeholder="Search for services" className='input_field ps-5 h-100' />
    </div>


    </Navbar>
  );
}

export default MyNavbar;
