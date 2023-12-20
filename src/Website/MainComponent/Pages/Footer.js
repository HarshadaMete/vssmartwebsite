import React from 'react'

const Footer = () => {
  return (
    <>
      <div className='container mt-5'>
        <div className='row'>
          <div className='col-lg-4 col-md-6 col-sm-12'>
            <img className='footer-img' src='https://vsmart.ajspire.com/images/logo1.png'></img>
            <p>Vishwakarma Super Mart Private Limited, is a direct selling company that deals with the distribution of a wide range of high quality, lifestyle products for day to day life.</p>
            <div className='d-flex'>
              <div className='footer-icon-div1'><i class="fa-brands fa-facebook-f footer-icon1"></i></div>
              <div className='footer-icon-div1 ms-2'><i class="fa-brands fa-twitter footer-icon2"></i></div>
              <div className='footer-icon-div1 ms-2'><i class="fa-brands fa-linkedin footer-icon2"></i></div>
              <div className='footer-icon-div1 ms-2'><i class="fa-brands fa-instagram footer-icon2"></i></div>
              <div className='footer-icon-div1 ms-2'><i class="fa-brands fa-pinterest-p footer-icon2"></i></div>
            </div>

          </div>
          <div className='col-lg-4 col-md-6 col-sm-12'>
            <div className='ms-3'>
              <h3 className='ms-4 contact-title'>Contact Us</h3>
              <ul type='none'>
                <li className='d-flex'><i class="fa-solid fa-at at-icon"></i>
                  <p>
                    <a className='vs-mail'><span className='text-black'>vsmart0932@gmail.com</span></a>
                  </p>
                </li>
                <li className='d-flex'>
                  <i class="fa-solid fa-mobile-screen phone-icon"></i>
                  <p>
                    <a><span className='text-black ps-2'>+918446092500</span></a>
                  </p>
                </li>
                <li className='d-flex'>
                  <i class="fa-solid fa-location-dot location-icon"></i>
                  <p className='add'>A/P Koregaon, 2978 Jalgaon Road, Tal - Koregaon, Dist. Satara Pin 415501</p>
                </li>
              </ul>
            </div>
          </div>
          <div className='col-lg-4 col-md-6 col-sm-12'>
            <div className='ms-3'>
              <h3 className='link-title ms-4'>Quick Links</h3>
              <ul type='none'>
                <li><a href='#download' className='download-link'>Download</a></li>
                <li><a href='#legal' className='download-link pt-2'>Legal</a></li>
                <li><a href='#login' className='download-link pt-2'>Login</a></li>
                <li><a href='#termandcondition' className='download-link pt-2'>Term And Condition</a></li>
                <li><a href='#privacypolicy' className='download-link pt-2'>Privacy Policy</a></li>
              </ul>

            </div>


          </div>
          <div className='container mt-5 copy-footer'>
            <div className='row'>
              <div className='col-lg-8'>
                <p className='text-light pt-4'>V S Mart | © Copyright 2022 by<a href='http/vsmart.ajspire.com' className='vs-link'> V S Mart </a>  All Rights Reserved</p>
              </div>
               <div className='col-lg-4'>
                <p className='text-light pt-4'>Designed by<a href='http/www.ajspire.com' className='aj-link'> Ajspire Technologies Pvt.Ltd</a></p>

               </div>

            </div>

          </div>

        </div>

      </div>

    </>
  )
}

export default Footer
