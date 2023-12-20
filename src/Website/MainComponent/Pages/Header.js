import React from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import Authuser from '../Authentication/Authuser';
import { useState } from 'react';
import { useEffect } from 'react';
import { Dropdown } from 'react-bootstrap';

// import { Dropdown } from "react-bootstrap";
const Header = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchParams, setSearchParams] = useSearchParams(); // Use useSearchParams
    const handleInputChange = event => {
        setSearchQuery(event.target.value);
    };
    const [showMegaMenu, setShowMegaMenu] = useState(false);
    const [showMegaMenu2, setShowMegaMenu2] = useState(false);
    const handleMouseEnter = () => {
        // console.log("hello");
        setShowMegaMenu(true);
    };
    const handleMouseLeave = () => {
        setShowMegaMenu(false);
    };
    const handleMouseEnter2 = () => {
        // console.log("hello");
        setShowMegaMenu2(true);
    };
    const handleMouseLeave2 = () => {
        setShowMegaMenu2(false);
    };
    const { http, token, logout, user } = Authuser();
    const [Slider1, setSlider1] = useState([]);
    const [Brands, setBrands] = useState([]);
    const [Cart, setCart] = useState([]);
    const [Cartcount, setCartcount] = useState([]);
    const [Wishlist, setWishlist] = useState([]);
    const [setwish, setWish] = useState([]);
    console.log(Wishlist);
    const getSlider = () => {
        http.get(`/categories`).then((res) => {
            // console.log(res.data);
            setSlider1(res.data.categories);
        }).catch((e) => { console.log(e); });
        http.get(`/brands`).then((res) => {
            // console.log(res.data);
            setBrands(res.data.brands);

        }).catch((e) => { console.log(e); });
    }
    const [Category, setcatg] = useState([]);
    const [SubCategory, setSubCategory] = useState([]);
    // console.log(SubCategory);
    const getcategory = () => {
        http.get(`/categories`).then((res) => {
            // console.log(res.data);
            setcatg(res.data.categories);
            res.data.categories.forEach((categories) => {
                getsubcata(categories.category_id);
            })

        }).catch((e) => {
            console.log(e);
        })
    }
    const getsubcata = (catagoryid) => {
        // console.log(catagoryid);
        http.get(`/subcategories/${catagoryid}`)
            .then((res) => {
                const newsubcatagory = res.data.subcategories;
                // console.log(res.data.subcategories);
                setSubCategory((previssubcat) => {
                    const filtersubcategory = newsubcatagory.filter((newsubcat) => !previssubcat.some((previs) => previs.subcategory_id === newsubcat.subcategory_id));
                    return [...previssubcat, ...filtersubcategory];
                })
            }).catch((e) => {
                console.log(e);
            })
    }
    const getCartItem = () => {
        http.get(`/get-cart-list`)
            .then((res) => {
                setCart(res.data.cart);
                setCartcount(res.data.cart.length);

                // console.log(res.data.cart.length);
            }).catch((e) => {
                console.log(e);
            });
    }

    const getWishItem = () => {
        http.get(`/get-wishlist`)
            .then((res) => {
                console.log(res.data);
                setWishlist(res.data.wishlist);
                // console.log('hello',res.data.wishlist)
                setWish(res.data.wishlist.length);
                // console.log(res.data.cart.length);
            }).catch((e) => {
                console.log(e);
            });

    }
    useEffect(() => {
        getcategory();
        getSlider();

    }, []);

    useEffect(() => {
        getCartItem();
    }, [token]);

    useEffect(() => {
        getWishItem();
    }, [token, setwish])

    const [rate, setrate] = useState(10);
    const [qty, setqty] = useState(0);
    const [total, settotal] = useState(0);

    function Ratee(e) {
        setrate(Number(e.target.value));
    }
    function Qt(e) {
        setqty(Number(e.target.value));
        gettotal();
    }
    function gettotal() {
        settotal(rate * qty);
        console.log(total);
    }

    // let mydata = [
    //     {
    //         img: "https://vsmart.ajspire.com/uploads/product_image/1653394266.jpg",
    //         h5: "Sunsilk Long Shampoo",
    //         uprice: "Unit Price:",
    //         pv: "PV Price: 14",
    //     },


    // ]

    const [isActive, setIsActive] = useState(false);
    // console.log(Cartcount);
    const handleToggle = () => {
        setIsActive(!isActive);
    };


    return (
        <>

            {/* navbar-first */}

            <div className="container-fluid bg-success">
                <div className='row'>
                    <nav className="navbar  navbar-first">
                        <div className='col-lg-6'>
                            <Link className="navbar-brand text-light ms-5 navbar-first-title">Welcome to VS Mart in Your Dream Online Store!</Link>
                        </div>
                        <div className="text-end col-lg-5">
                            <Link className='text-light'>Contact Us</Link>
                        </div>
                    </nav>
                </div>
            </div>
            {/* <div className='container-fluid bg-success '>
                <div className='row'>
                    <div className='col-lg-6'>
                        <b className='text-light'>Welcome to VS Mart in Your Dream Online Store! </b>
                    </div>
                    <div className='col-lg-6 px-5 text-end '>
                        <Link to="/contact" className=''><p className='con ' >Contact</p></Link>
                    </div>
                </div>
            </div> */}

            {/* navbar-first-end */}

            {/* navbar-second */}

            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-3 col-sm-3">
                        <img className="nav-second-img" src="https://vsmart.ajspire.com/images/logo1.png" alt="Logo" />
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-3">
                        <div className="input-group">
                            <input className="form-control search-btn" value={searchQuery}
                                onChange={handleInputChange} type="text" placeholder="Search Anything..." aria-label="Search" />
                            <button className="btn search-btn">
                                <Link
                                    className="text-black"
                                    to={`/search?query=${encodeURIComponent(searchQuery)}`}
                                    onChange={() => setSearchParams({ query: searchQuery })}
                                >
                                    <i className="fa-solid fa-search"></i>
                                </Link>
                            </button>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-4 text-end d-flex mt-4">
                        <div className='nav-sec-icon-div1'><i className="fa-solid fa-wallet nav-sec-icon1"></i></div>
                        <Link to='/login' className="position-relative">
                            <div className='nav-sec-icon-div1 ms-2'><i className="fa-solid fa-code-compare nav-sec-icon1"></i></div>
                            <span className="position-absolute end-0 top-0 translate-middle badge rounded-pill bg-success">
                                0
                            </span>
                        </Link>
                        {token ? (
                            <Link to='/wishlist' className="position-relative">
                                <div className='nav-sec-icon-div1 ms-2'><i className="fa-solid fa-heart nav-sec-icon1"></i></div>
                                <span className="position-absolute end-0 top-0 translate-middle badge rounded-pill bg-success">
                                    {setwish}
                                </span>
                            </Link>
                        ) : (
                            <Link to='/login' className="position-relative">
                                <div className='nav-sec-icon-div1 ms-2'><i className="fa-solid fa-heart nav-sec-icon1"></i></div>
                                <span className="position-absolute end-0 top-0 translate-middle badge rounded-pill bg-success">
                                    0
                                </span>
                            </Link>
                        )}
                        {token ? (
                            <Link to='/cart' className="position-relative">
                                <div className='nav-sec-icon-div1 ms-2'><i className="fa-solid fa-basket-shopping nav-sec-icon1" type="button" data-bs-toggle="offcanvas" data-bs-target="#demo"></i></div>
                                <span className="position-absolute end-0 top-0 translate-middle badge rounded-pill bg-success">
                                    {Cartcount}
                                </span>
                            </Link>
                        ) : (
                            <Link to='/login' className="position-relative">
                                <div className='nav-sec-icon-div1 ms-2'><i className="fa-solid fa-basket-shopping nav-sec-icon1" type="button" data-bs-toggle="offcanvas" data-bs-target="#demo"></i></div>
                                <span className="position-absolute end-0 top-0 translate-middle badge rounded-pill bg-success">
                                    0
                                </span>
                            </Link>
                        )}
                    </div>
                    <div className="col-lg-3 col-md-2 col-sm-2 text-end d-flex">
                        <div className='login-img-div'><img className='login-img' src="https://vsmart.ajspire.com/images/ee.png" alt="Login Image" /></div>
                        {/* <Link to='/login' ><button className="btn btn-primary nav-sec-login-btn" style={{ marginLeft: "30px" }}>Login</button></Link>
                        <button type="button" class="btn btn-success nav-sec-logout-btn" onClick={logout}>Logout</button> */}
                        {token ? (
                            <Dropdown style={{ marginTop: '35px' }}>
                                <Dropdown.Toggle id="dropdown-basic">
                                    <Link to='/login' id="navbarDropdown" role="button" aria-haspopup="true" aria-expanded="false" className='text-white' style={{ textDecoration: 'none' }}>
                                        {user && user.name}
                                    </Link>

                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">My Account</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">My Order</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3" to='/register' onClick={logout}>Logout</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        ) : (
                            <Dropdown>
                                <Dropdown.Toggle variant="success" id="dropdown-basic">
                                    <Link to='/login' id="navbarDropdown" role="button" aria-haspopup="true" aria-expanded="false">
                                        login
                                    </Link>
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">My Account</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">My Order</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3" to='/register' >Sign In</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        )}
                    </div>
                </div>
            </div>
            {/* navbar-second-end */}

            {/* navbar-third */}
            <div className="container-fluid">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse container-fluid" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active home-link nav-three-link" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="navbar-item dropdown-megamenu">
                                <Link to="/" style={{ color: 'black', fontWeight: 'bold' }} className="nav-item nav-link text-black" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                                    Categories
                                </Link>
                                <Dropdown show={showMegaMenu} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                                    <Dropdown.Menu className="mega-menu" style={{ height: 'auto', width: '1000px', marginLeft: '70px' }}>
                                        <div className="row">
                                            {Category.slice(0, 8).map((category) => (
                                                <div className="col-sm-3" >
                                                    <a href="">
                                                        <h5 className='font-weight-bold text-primary'>{category.category_name}</h5>
                                                    </a>
                                                    <a href="" key={category.category_id}>
                                                        <ul>
                                                            {SubCategory.filter((subcategory) => subcategory.subcategory_category_id === category.category_id).
                                                                slice(0, 5).map(subcategory => (

                                                                    <li>
                                                                        <Link className='text-black t' to={`/product-shop/${category.category_id}/${subcategory.subcategory_id}`}
                                                                            style={{ textDecoration: "none" }}>
                                                                            {subcategory.subcategory_name}
                                                                        </Link>
                                                                    </li>
                                                                ))}
                                                        </ul>
                                                    </a>
                                                </div>
                                            ))}
                                        </div>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </li>
                            <li className="navbar-item dropdown-megamenu">
                                <Link to="/shopping" style={{ color: 'black', fontWeight: 'bold' }} className="nav-item nav-link" onMouseEnter={handleMouseEnter2} onMouseLeave={handleMouseLeave2}>
                                    Brand
                                </Link>
                                <Dropdown show={showMegaMenu2} onMouseEnter={handleMouseEnter2} onMouseLeave={handleMouseLeave2}>
                                    <Dropdown.Menu className="mega-menu" style={{ height: 'auto', width: '1000px', marginLeft: '-220px' }}>
                                        <div className='row'>
                                            {Brands.slice(0, 16).map((brand) => (
                                                <div className='col-lg-6 col-md-6 col-sm-12'>
                                                    <li key={brand.id}>
                                                        <Link to={`/product-shop/${brand.brand_id}`} className="dropdown-item text-primary drop-head">{brand.brand_name}</Link>
                                                    </li>
                                                </div>
                                            ))}
                                            <div className='shop-show-btn-div mt-5'>
                                                <button type="button" class="btn btn-outline-success shop-show-btn"><i class="fa-solid fa-eye p-2"></i>VIEW ALL BRANDS</button>
                                            </div>
                                        </div>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </li>
                            {/* <li><Link href='#' className='nav-link active ms-3  nav-three-link'>Brands</Link></li> */}
                            <li><Link to='/shop' className='nav-link active ms-3  nav-three-link'>Shop</Link></li>
                            <li><Link to='/about' className='nav-link active ms-3  nav-three-link'>About</Link></li>
                            <li><Link to='/' className='nav-link active ms-3  nav-three-link'>Bankiing Details</Link></li>
                            <li><Link to='/' className='nav-link active ms-3  nav-three-link'>Download</Link></li>
                            <li><Link to='/' className='nav-link active ms-3  nav-three-link'>Legal</Link></li>
                            <li><Link to='/' className='nav-link active ms-3  nav-three-link'>Blog</Link></li>
                            <li><i class="fa-solid fa-mobile-screen-button mobile-icon"></i></li>
                            <li style={{ marginLeft: '16px' }}>Call Us<br></br><span style={{ color: 'black', fontWeight: 'bold', fontSize: '18px' }}>+91(8446092500)</span></li>
                            <li style={{ fontSize: '30px', marginLeft: '16px', color: '#11823b' }}><i class="fa-solid fa-at"></i></li>
                            <li style={{ marginLeft: '16px' }}>Email Us<br></br><span style={{ fontWeight: 'bold', fontSize: '18px' }}>vsmart0932@gmail.com</span></li>
                        </ul>
                    </div>
                </nav >
            </div>            
            {/* navbar-third-end */}
            {/* offcanvas */}
            <div>
                <div className="offcanvas offcanvas-end" id="demo" style={{ overflow: "scroll" }}>
                    <div><i class="fa-solid fa-basket-shopping" style={{ marginLeft: '200px', fontSize: '26px', marginTop: '9px', marginBottom: '10px', color: 'green' }}></i></div>
                    <div className="card mb-3" style={{ maxWidth: 540 }}>
                        {Cart.map((item) => (
                            <div key={item.id} className="row g-0">
                                <div className="col-md-4">
                                    <img
                                        src={'https://vsmart.ajspire.com/uploads/product_image/' + item.product_image}
                                        className="img-fluid rounded-start offcanvous-card-img"
                                        alt="..."
                                    />
                                </div>
                                <div className="col-md-8 col-8">
                                    <div className="card-body">
                                        <h5 className="card-title">{item.english_name}</h5>
                                        <p className='unit1' onChange={Ratee}>{item.sale_price} {rate}</p>
                                        <p className="text-primary">{item.point_value}</p>
                                        <div className='d-flex mdiv'>
                                            <input type='number' style={{ width: '80px', backgroundColor: '#D0D0D0', border: 'none' }} onChange={Qt} />
                                            <button type="button" className="offcan-plus-btn" style={{ height: '28px', width: '30px' }} onClick={gettotal}> + </button>
                                            <button type="button" className="inbtn2" placeholder='total' style={{ width: '80px', height: '30px', backgroundColor: '#D0D0D0', border: 'none', marginLeft: '10px' }}> {total}</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <Link to={'/cart'} style={{ textDecoration: 'none' }}>
                        <div className="d-grid gap-2 col-6 mx-auto mt-auto">
                            <button className="btn btn-success p-3" type="button" style={{ width: '230%', borderRadius: '5px', margin: '40px', marginLeft: '-110px', textAlign: 'center', justifyContent: 'center' }}>
                                View to Cart
                            </button>
                        </div>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Header
