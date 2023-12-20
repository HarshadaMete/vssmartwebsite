import React from 'react'


let aboutcard=[
  {
    abouticon:"fa-brands fa-apple about-icon1",
    aboutcardtitle:"Free Shipping",
    aboutcardtext:"VS Mart, gives product delivery for all customers free that is plus point of order."

  },
  {
    abouticon:"fa-brands fa-apple about-icon1",
    aboutcardtitle:"Gift Cards",
    aboutcardtext:"VS Mart, Gives every customer reward points or saving as theire customer type. It's make to happy customer and continue to joined together as like Mart and Card. Gifts gives to customers reward points"

  },
  {
    abouticon:"fa-brands fa-apple about-icon1",
    aboutcardtitle:"Reward Points",
    aboutcardtext:"VS Mart, Gives every customer reward points or saving as theire customer type. It's make to happy customer and continue to joined together as like Mart and Card."

  },
  {
    abouticon:"fa-brands fa-apple about-icon1",
    aboutcardtitle:"Easy Return",
    aboutcardtext:"One major factor that dictates where online shoppers make purchases is whether you have a clear and generous eCommerce returns policy. Studies have shown that solid return policies increase sales without increasing the volume of return."

  }

]


const About = () => {
  return (
    <>
      <div className='container-fluid mt-3'>
        <div className='bg-text about-back-img'>
          <h1 className='about-head'>ABOUT OUR COMPANY</h1>
          <p className='about-para'><i class="fa-solid fa-house"></i><a href='/' className='about-home-li'>Home/</a>About</p>
        </div>


      </div>

      <div className='container about-con-2'>
        <div className='row'>
          <div className='col-lg-6 col-md-12 col-sm-12'>
            <h1>Vishwakarma Super Mart Private Limited</h1>
            <p className='about-con2-para text-black mt-4'>is a direct selling company that deals with the distribution of a wide range of high quality, lifestyle products for day to day life. Our aim is to deliver the best products directly to our consumers, who form the core of the company. Our networks of registered distributors are trained leaders and representatives who ensure that consumers get the best products, with additional free business opportunity benefits. The profitable opportunities offered have influenced many customers to purchase products from non-retail environments, owing to the expansion of direct selling across the country.</p>
          </div>
          <div className='col-lg-3 col-md-12 col-sm-12'>
            <img className='mt-3 about-con2-img1' src='https://vsmart.ajspire.com/images/about1.png'></img>

          </div>
          <div className='col-lg-3 col-md-12 col-sm-12'>
            <img className='mt-3 about-con2-img2' src='https://vsmart.ajspire.com/images/about2.png'></img>

          </div>
          <hr className='hr1'></hr>

          <div className='container about-con3'>
            <div className='row'>
              <div className='col-lg-6 col-md-6 col-sm-12'>
                <h1 className='about-con3-head'>Our Vision</h1>
                <p className='about-con3-para'>Vishwakarma Super Mart Private Limited to strive hard continuously and constantly to make every individual customer financially self-reliant, economically and socially strong through the self - help team concept.</p>
              </div>
              <div className='col-lg-6 col-md-6 col-sm-12'>
                <h1 className='about-con3-head'>Our Mission</h1>
                <p className='about-con3-para'>Vishwakarma Super Mart Private Limited has vision to create wealth that provides personal, professional, social, financial and spiritual growth to everyone. We aim to provide the highest level of quality and service possible with respect to the products and services that we offer and strive to create an environment and culture that lends itself to our distributor’s success.</p>
              </div>

            </div>
          </div>

          <hr className='hr1'></hr>
          <div className='container about-con4'>
            <div className='row'>
              <h1 className='about-con4-head'>Why People Choose Their<br></br> Daily Organic Life With Us</h1>
              {aboutcard.map((data) => (
                <div className='col-lg-6 col-md-12 col-sm-12'>
                  <div className="card mb-3 mt-5" style={{ maxWidth: 640,border:'none'}}>
                    <div className="row g-0">
                      <div className="col-md-4">
                        <div className='about-img-div'>
                          <i class={data.abouticon}></i>
                        </div>
                      </div>
                      <div className="col-md-8">
                        <div className="card-body">
                          <h4 className="card-title">{data.aboutcardtitle}</h4>
                          <p className="card-text mt-3" style={{ fontSize: '18px' }}>{data.aboutcardtext}</p>

                        </div>
                      </div>
                    </div>
                  </div>


                </div>
              ))}
            </div>

          </div>
        </div>

      </div>

    </>
  )
}

export default About
