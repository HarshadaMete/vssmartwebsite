import React, { useEffect, useState } from 'react'
import { Carousel } from 'react-bootstrap'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Authuser from '../Authentication/Authuser';
import { Link } from 'react-router-dom';

const Index = () => {
  const { http, user, token } = Authuser();

  const [Slider1, setSlider1] = useState([])
  const [Category1, setCategory1] = useState([])
  const [Product1, setProduct1] = useState([])
  const [Brands, setBrands] = useState([])
  const getSlider = () => {
    http.get(`/banners`).then((res) => {
      // console.log(res.data);
      setSlider1(res.data.banners);

    });

    http.get(`/categories`).then((res) => {
      // console.log(res.data);
      setCategory1(res.data.categories);

    });

    http.get(`/products`).then((res) => {
      // console.log(res.data);
      setProduct1(res.data.products.data);

    });

    http.get(`/brands`).then((res) => {
      // console.log(res.data);
      setBrands(res.data.brands);

    });
  }
  useEffect(() => {
    getSlider()
  }, [])

  const addTocart = (product_id) => {
    console.log(product_id)
    http.get(`/add-to-cart/${product_id}`).then((res) => {
      console.log(res.data);
      alert(res.data.msg)
    })

      .catch((e) => {
        console.log(e)
      });
  }
  // const[productid,setproductid]=useState('');
  const addTowish = (product_id) => {
    console.log(product_id);
    http.get(`add-to-wishlist/${product_id}`).then((res) => { console.log(res.data); 
      alert(res.data.msg)
    }).
      catch((e) => { console.log(e); });
  }


  // slick-slider-start
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "green" }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "green" }}
        onClick={onClick}
      />
    );
  }
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 2,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        }
      },
    ]
  };
  const imageUrls = [
    'https://vsmart.ajspire.com/ecommerce/category_image/category_image/1658901007category.jpg',
    'https://vsmart.ajspire.com/ecommerce/category_image/category_image/1658902723category.crdownload',
    'https://vsmart.ajspire.com/ecommerce/category_image/category_image/1658901549category.jpg',
    'https://vsmart.ajspire.com/ecommerce/category_image/category_image/1658900774category.webp',
    'https://vsmart.ajspire.com/ecommerce/category_image/category_image/1658897374category.jpg',
    'https://vsmart.ajspire.com/ecommerce/category_image/category_image/1658901247category.jpg',
  ];

  const sliderImages = Category1.map((cat, index) => (
    <div key={index}>
      <img className='slick-slider-img' src={cat.category_banner} alt={`Slide ${index}`} />
    </div>
  ));

  // slick-slider-end


  //our-featured-start
  let mydata = [
    {
      img: "https://vsmart.ajspire.com/uploads/product_image/1697033385.png",
      title: "Diwali Special Pakages",
      pv: "PV :5000.00",
      mrp1: "5500.00",
      mrp2: "5000.00/only",
      offer: "₹40 Off"
    },
    {
      img: "https://vsmart.ajspire.com/uploads/product_image/1690011802.png",
      title: "Tata Tea Prenium Tea,1.5 kg",
      pv: "PV :0.00",
      mrp1: "705.00",
      mrp2: "549.00/only",
      offer: "₹156 Off"
    },
    {
      img: "https://vsmart.ajspire.com/uploads/product_image/default.png",
      title: "Anjali Coconut Scraper Sleeck",
      pv: "PV :249.00",
      mrp1: "295.00",
      mrp2: "255.00/only",
      offer: "₹40 Off"
    },
    {
      img: "https://vsmart.ajspire.com/uploads/product_image/default.png",
      title: "Anjali Lemon Sqwueezer",
      pv: "PV :149.00",
      mrp1: "190.00",
      mrp2: "154.00/only",
      offer: "₹36 Off"
    },
    {
      img: "https://vsmart.ajspire.com/uploads/product_image/default.png",
      title: "Anjali Lemon Sqwueezer Large",
      pv: "PV :75.00",
      mrp1: "100.00",
      mrp2: "80.00/only",
      offer: "₹20 Off"
    },
    {
      img: "https://vsmart.ajspire.com/uploads/product_image/default.png",
      title: "Anjali Tea Spoon 6N",
      pv: "PV :159.00",
      mrp1: "190.00",
      mrp2: "164.00/only",
      offer: "₹26 Off"
    },
    {
      img: "https://vsmart.ajspire.com/uploads/product_image/default.png",
      title: "Anjali Body Fork Spoon 6N",
      pv: "PV :298.50",
      mrp1: "225.00",
      mrp2: "205.00/only",
      offer: "₹20 Off"
    },
    {
      img: "https://vsmart.ajspire.com/uploads/product_image/default.png",
      title: "Exel Ultra Presure Cooker 5.0..",
      pv: "PV :2997.50",
      mrp1: "1810.00",
      mrp2: "1205.00/only",
      offer: "₹605 Off"
    },
    {
      img: "https://vsmart.ajspire.com/uploads/product_image/default.png",
      title: "Exel Ultra Presure Cooker 3.0..",
      pv: "PV :2372.50",
      mrp1: "1470.00",
      mrp2: "955.00/only",
      offer: "₹515 Off"
    },
    {
      img: "https://vsmart.ajspire.com/uploads/product_image/default.png",
      title: "Exel Ultra Hard Anodized Pressure..",
      pv: "PV :1649.00",
      mrp1: "2655.00",
      mrp2: "1655.00/only",
      offer: "₹1000 Off"
    },
    {
      img: "https://vsmart.ajspire.com/uploads/product_image/default.png",
      title: "Exel Ultra Hard Anodized Pressure..",
      pv: "PV :1380.00",
      mrp1: "2245.00",
      mrp2: "1385.00/only",
      offer: "₹860 Off"
    },
    {
      img: "https://vsmart.ajspire.com/uploads/product_image/default.png",
      title: "Exel Ultra Pressure Cooker",
      pv: "PV :2122.50",
      mrp1: "1350.00",
      mrp2: "855.00/only",
      offer: "₹495 Off"
    }
  ]
  //our-featured-end

  //collected-items-start
  let prodata = [
    {
      img: "https://vsmart.ajspire.com/uploads/product_image/1697033385.png",
      title: "Diwali Special Pakages",
      pv: "PV :5000.00",
      mrp1: "5500.00",
      mrp2: "5000.00/only",
      offer: "₹40 Off"
    },
    {
      img: "https://vsmart.ajspire.com/uploads/product_image/1690011802.png",
      title: "Tata Tea Prenium Tea,1.5 kg",
      pv: "PV :0.00",
      mrp1: "705.00",
      mrp2: "549.00/only",
      offer: "₹156 Off"
    },
    {
      img: "https://vsmart.ajspire.com/uploads/product_image/default.png",
      title: "Anjali Coconut Scraper Sleeck",
      pv: "PV :249.00",
      mrp1: "295.00",
      mrp2: "255.00/only",
      offer: "₹40 Off"
    },
    {
      img: "https://vsmart.ajspire.com/uploads/product_image/default.png",
      title: "Anjali Lemon Sqwueezer",
      pv: "PV :149.00",
      mrp1: "190.00",
      mrp2: "154.00/only",
      offer: "₹36 Off"
    },
    {
      img: "https://vsmart.ajspire.com/uploads/product_image/default.png",
      title: "Anjali Lemon Sqwueezer Large",
      pv: "PV :75.00",
      mrp1: "100.00",
      mrp2: "80.00/only",
      offer: "₹20 Off"
    },
    {
      img: "https://vsmart.ajspire.com/uploads/product_image/default.png",
      title: "Anjali Tea Spoon 6N",
      pv: "PV :159.00",
      mrp1: "190.00",
      mrp2: "164.00/only",
      offer: "₹26 Off"
    },
    {
      img: "https://vsmart.ajspire.com/uploads/product_image/default.png",
      title: "Anjali Body Fork Spoon 6N",
      pv: "PV :298.50",
      mrp1: "225.00",
      mrp2: "205.00/only",
      offer: "₹20 Off"
    },
    {
      img: "https://vsmart.ajspire.com/uploads/product_image/default.png",
      title: "Exel Ultra Presure..",
      pv: "PV :2997.50",
      mrp1: "1810.00",
      mrp2: "1205.00/only",
      offer: "₹605 Off"
    },
    {
      img: "https://vsmart.ajspire.com/uploads/product_image/default.png",
      title: "Exel Ultra Presure..",
      pv: "PV :2372.50",
      mrp1: "1470.00",
      mrp2: "955.00/only",
      offer: "₹515 Off"
    },
    {
      img: "https://vsmart.ajspire.com/uploads/product_image/default.png",
      title: "Exel Ultra Hard..",
      pv: "PV :1649.00",
      mrp1: "2655.00",
      mrp2: "1655.00/only",
      offer: "₹1000 Off"
    },
    {
      img: "https://vsmart.ajspire.com/uploads/product_image/default.png",
      title: "Exel Ultra Hard..",
      pv: "PV :1380.00",
      mrp1: "2245.00",
      mrp2: "1385.00/only",
      offer: "₹860 Off"
    },
    {
      img: "https://vsmart.ajspire.com/uploads/product_image/default.png",
      title: "Exel Ultra Pressure..",
      pv: "PV :2122.50",
      mrp1: "1350.00",
      mrp2: "855.00/only",
      offer: "₹495 Off"
    }
  ]

  //collected-items-end
  return (
    <>
      {/* carousel-start */}
      <div className='container'>
        <Carousel interval={1000}>
          {Slider1.map((slider) => (
            <Carousel.Item>
              <img className='home-carousel-img1' src={slider.slider_image} alt="First slide" />

            </Carousel.Item>
          ))}

        </Carousel>

      </div>
      {/* carousel-start-end  */}

      {/* best-deals-img-start */}

      <div className='container mt-4'>
        <h1 className='best-deals-title'>Best Deals</h1>
        <img className='best-deals-img' src='https://vsmart.ajspire.com/uploads/slider/1667297122.jpg'></img>

      </div>
      {/* best-deals-img-end */}


      {/* slick-slider-start */}
      <div className='container mt-5'>


        <Slider {...settings}>
          {sliderImages}
        </Slider>

      </div>


      {/* slick-slider-end */}


      {/* Our Featured Items-start */}
      <div className='container mt-5'>
        <h1 className='our-featured-title'> Our Featured Items</h1>
        <div className='row'>
          {Product1.slice(0, 8).filter((pro) => pro.featured === 1).map((pro1, data) => (
            <div className='col-lg-6 col-md-6 col-sm-12'>
              <div className="card  our-featured-card mt-5 " style={{ maxWidth: 540 }}>
                <div className="row g-0">
                  <div className="col-md-4">
                    <div className='d-flex'>

                      <div className='feature-div'>Feature</div>
                      <div className='off-div'>30%OFF</div>
                    </div>
                    <div className='heart-icon'>
                     {token ? (<Link onClick={() => addTowish(pro1.product_id)} ><i class="fa-solid fa-heart"></i></Link>) : (
                            <Link to={'/login'}> <i class="fa-solid fa-heart"></i></Link>
                          )}

                    </div>



                    <img src={pro1.product_image} className="img-fluid rounded-start mb-1 our-feature-img" alt="..." />
                    <div className='our-feature-icon'>
                      <a class="btn btn-success m-2" href="#" role="button"><i class="fa-solid fa-shuffle"></i></a>
                      <a class="btn btn-success" href="#" role="button"><i class="fa-solid fa-eye"></i></a>
                    </div>

                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <a className='card-title' href='#'>{pro1.english_name}</a>
                      <p className="card-text1 text-primary pt-3">{pro1.point_value}</p>
                      <p className="card-text2 text-black"> MRP<strike className="text-danger">{pro1.mrp_price}</strike>

                        <span className='text-success'>{pro1.sale_price}</span></p>
                      <div class="d-grid gap-2">
                        <button class="btn add-cart-btn" type="button">
                          <i className="fa-solid fa-basket-shopping nav-sec-icon1">{token ? (<Link onClick={() => addTocart(pro1.product_id)} style={{ textDecoration: 'none', color: 'white', fontSize: '12px' }}>Add to cart </Link>) : (
                            <Link to={'/login'} style={{ textDecoration: 'none', color: 'white', fontSize: '12px' }}> Add</Link>
                          )}</i></button>

                      </div>
                    </div>
                  </div>
                </div>
              </div>


            </div>
          ))}
        </div>
        <Link to={'/showmore1'}>
        <div className='our-featured-show-btn-div mt-5'>
          <button type="button" class="btn btn-outline-success our-featured-show-btn"><i class="fa-solid fa-eye p-2"></i>Show More</button>
        </div>
        </Link>
      </div>



      {/* Our Featured Items-end */}


      {/* collected-new-items-start */}
      <div className='container mt-5'>
        <h1 className='collected-new-title'>Collected New Items</h1>
        <div className='row'>

          <Slider {...settings}>
            {Product1.map((pro1, data) => (
              // <div className='col-lg-12 col-md-6 col-sm-12'>
              <div className="card collected-card" style={{ width: '18rem' }}>
                <div className='off-div2'>
                  <label className='off-lable'>30%OFF</label>
                </div>
                <div>
                {/* <i class="fa-solid fa-heart shop-heart-iconnn" style={{color:'blue'}} ></i> */}
                {token ? (<Link onClick={() => addTowish(pro1.product_id)} > <i class="fa-solid fa-heart shop-heart-iconnn" style={{color:'blue'}} ></i></Link>) : (
                                                    <Link to={'/login'}> <i class="fa-solid fa-heart shop-heart-iconnn" style={{color:'blue'}} ></i></Link>
                                                )}
                </div>
                <img src={pro1.product_image} className="card-img-top collected-img" alt="..." />
                <div className='collected-icon'>
                  <a class="btn btn-success m-2" href="#" role="button"><i class="fa-solid fa-shuffle"></i></a>
                  <a class="btn btn-success" href="#" role="button"><i class="fa-solid fa-eye"></i></a>
                </div>
                <div className="card-body">
                  <a className='card-title' href='#'>{pro1.english_name}</a>
                  <p className="card-text11 text-primary">{pro1.point_value}</p>
                  <p className="card-text22 text-black"> MRP<strike className="text-danger">{pro1.mrp_price}</strike>

                    <span className='text-success'>{pro1.sale_price}</span></p>
                  <div class="d-grid gap-2">
                    {/* <button class="btn add-cart-btn" type="button"><i className="fa-solid fa-basket-shopping nav-sec-icon1"></i>Add</button> */}
                    <button class="btn add-cart-btn" type="button">
                      <i className="fa-solid fa-basket-shopping nav-sec-icon1">{token ? (<Link onClick={() => addTocart(pro1.product_id)} style={{ textDecoration: 'none', color: 'white', fontSize: '12px' }} >Add to cart </Link>) : (
                        <Link to={'/login'} style={{ textDecoration: 'none', color: 'white', fontSize: '12px' }}> Add</Link>
                      )}</i></button>
                  </div>

                </div>
              </div>
              // </div>
            ))}
          </Slider>
        </div >
        <Link to={'/showmore2'}>
        <div className='our-featured-show-btn-div mt-5'>
          <button type="button" class="btn btn-outline-success our-featured-show-btn"><i class="fa-solid fa-eye p-2"></i>Show More</button>
        </div>
        </Link>
      </div >
      {/* collected-new-items-end */}

      {/* shop-by-brands-start */}
      <div className='container mt-5'>
        <h1 className='title'>Shop By Brands</h1>
        <div className='row'>
          <Slider {...settings}>
            {Brands.map(item => (
              <div className="spinner  container1" >
                <div className='inner'>
                  <img className='image' src={item.brand_banner} alt={`Image ${item.id}`} />
                  <div className='inner1'></div>
                  <div className="middle">
                    <div className="text text-center">
                      <i className="fa-solid fa-link"></i>
                    </div>
                  </div>
                </div>
                <div className='name'><h5>{item.brand_name}</h5></div>
              </div>
            ))}
          </Slider>
        </div>
        <Link to={'/brandshow'}>
        <div className='shop-show-btn-div mt-5'>
          <button type="button" class="btn btn-outline-success shop-show-btn"><i class="fa-solid fa-eye p-2"></i>VIEW ALL BRANDS</button>
        </div>
        </Link>
      </div>
    </>
  )
}

export default Index
