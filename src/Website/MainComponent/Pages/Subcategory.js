import React, { useEffect, useState } from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Authuser from '../Authentication/Authuser';
import { Link, useParams } from 'react-router-dom';

const Subcategory = () => {


    let { cat_id, sub_id } = useParams();

    const { http, user, token } = Authuser();

    const [activeIndex, setActiveIndex] = useState([null]);
    const handleItemClick = (index) => {
        if (index === activeIndex) {
            // close the currently open submenu
            setActiveIndex(null);
        } else {
            //open the clicked submenu & close others
            setActiveIndex(index);
        }
    }
    //product
    const [Category, setcategory] = useState([]);
    // console.log("hello", Category);

    //category name for banner
    const [category_, setCategory_] = useState([]);
    // console.log(category_);

    //subcategory_ for banner
    const [subcategory_, setsubcategory_] = useState([]);
    // console.log(subcategory_);

    //scroll menu
    const [Cat, setCate] = useState([]);
    // console.log(Cat);

    const [brand, setBrand] = useState([]);
    // console.log(brand);

    //slider after banner
    const [Sub, SetSub] = useState([]);
    // console.log(Sub);

    //count for brand & categorywise
    const [Count, setCount] = useState([]);
    // console.log(Count);

    const [Count1, setCount1] = useState([]);
    // console.log(Count1[0]);

    const getCategoryData = () => {
        http.get(`/product-shop/${cat_id}/${sub_id}`).then((res) => {

            console.log(res.data);
            setcategory(res.data.category.data);

            setCategory_(res.data.category_)

            setsubcategory_(res.data.subcategory_);

            setCate(res.data.cat);

            setBrand(res.data.brand);

            SetSub(res.data.sub);
            console.log(Sub);

            setCount(res.data.Count['']);

            setCount1(res.data.Count1['']);

        }).catch((e) => {
            console.log(e)
        });


    };

    useEffect(() => {
        getCategoryData();
        // console.log("hii")
    }, []);

    // add to cart
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
    // add to wishlist
    // const[productid,setproductid]=useState('');
    const addTowish = (product_id) => {
        console.log(product_id);
        http.get(`add-to-wishlist/${product_id}`).then((res) => {
            console.log(res.data);
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
        speed: 1500,
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
    // slick-slider-end
    // pagenation
    const [pages, Setpages] = useState(1);

    const [Fromidx, SetFromidx] = useState(0);
  
    const [Index, SetIndex] = useState(12);
  
    function nextpage() {
      SetFromidx(Fromidx + 12);
      SetIndex(Index + 12);
      Setpages(pages + 1);
    }
    function Previoupage() {
      SetFromidx(Fromidx - 12);
      SetIndex(Index - 12);
      Setpages(pages - 1);
    }
    return (
        <>
            <div className='container-fluid mt-3'>
                <div className='bg-text subcat-con1'>
                    <h1 className='subcat-head'>{category_.category_name}</h1>
                    <p className='subcat-para'><i class="fa-solid fa-house"></i><a href='/' className='subcat-home-li'>Home/</a>{subcategory_.subcategory_name}</p>
                </div>


            </div>

            {/* slick-slider-start */}
            <div className='container mt-5'>


                <Slider {...settings}>


                    {Sub.map((subslider, index) => (
                        <div key={index} className=" ">

                            <div key={subslider.id} className="slick-slider-img  " >
                                <img src={subslider.subcategory_image} className='' alt={`Sub ${subslider.icecream}`} style={{ width: "197px", height: "138px", borderRadius: "20px" }} />
                                <div className=' cont2'>
                                    <h3 className='text-center btn '>{subslider.subcategory_name}</h3>

                                </div>
                            </div>
                        </div>
                    ))}



                </Slider>

            </div>


            {/* slick-slider-end */}


            {/* filter-by-price */}
            <div className='container-fluid shop-con2'>
                <div className='row'>
                    <div className='col-lg-3 col-md-6 col-sm-12'>
                        <div className="card ms-5 mt-4" style={{ width: '18rem' }}>
                            <div className="card-body">
                                <h6 className="card-title">FILTER BY PRICE</h6>
                                <hr></hr>
                                <input className='shop-input1' placeholder='Min-00'></input>
                                <input className='shop-input2' placeholder='Max-5k'></input>
                                <button className='shop-search-btn '><i className="fa-solid fa-search shop-search-icon"></i>Search</button>
                            </div>
                        </div>
                        {/* filter-by-category */}
                        <div class="card ms-5 mt-5" style={{ width: "18rem", height: "370px", overflow: "scroll" }}>
                            <div className="card-body">
                                <h6 className="card-title">FILTER BY CATEGORY</h6>
                                <hr></hr>
                                <form >
                                    <ul type='none'>
                                        {Cat.slice(0, 18).map((cat, index) => (
                                            <li key={index} className={activeIndex === index ? 'open' : ''}>
                                                <a onClick={() => handleItemClick(index)} href='#' className='font-weight-bold text-dark' style={{ textDecoration: "none", fontSize: "20px", marginLeft: "5px" }}>
                                                    <input type='checkbox' className='shop-card2-input1'></input>
                                                    {cat.category_name}
                                                    {Count.filter((count) => count.product_category_id == cat.category_id)
                                                        .map((count) => (
                                                            (count.cat_count)
                                                        ))}
                                                    <ul style={{ display: activeIndex === index ? 'block' : 'none' }}>
                                                        {Sub.filter((sub) => sub.subcategory_category_id === cat.category_id).map((sub) => (

                                                            <li className='text-dark'><Link to={`/product-shop/${cat.category_id}/${sub.subcategory_name}`}>{sub.subcategory_name}</Link></li>
                                                        ))}

                                                    </ul>

                                                </a>
                                            </li>

                                        ))}
                                    </ul>
                                </form>
                            </div>

                        </div>

                        {/* filter-by-brand */}

                        <div class="card ms-5 mt-5" style={{ width: "18rem", height: "370px", overflow: "scroll" }}>
                            <div className="card-body">
                                <h6 className="card-title">FILTER BRAND</h6>
                                <hr></hr>
                                <form >
                                    <ul type='none'>
                                        {brand.slice(0, 16).map((brand, index) => (
                                            <li key={index} className={activeIndex === index ? 'open' : ''}>
                                                <a onClick={() => handleItemClick(index)} href='#' className='font-weight-bold text-dark' style={{ textDecoration: "none", fontSize: "20px", marginLeft: "5px" }}>
                                                    <input type='checkbox' className='shop-card2-input1'></input>
                                                    {brand.brand_name}
                                                    {Count1.filter((count1) => count1.brand_id == brand.brand_count)
                                                        .map((count1) => (
                                                            (count1.brand_count)
                                                        ))}
                                                    {/* <ul style={{ display: activeIndex === index ? 'block' : 'none' }}>
                                                        {Sub.filter((sub) => sub.brand_id === brand.brand_id).map((sub) => (

                                                            <li className='text-dark'><Link to={`/product-shop/${brand.brand_id}/${sub.subcategory_id}`}>{sub.subcategory_name}</Link></li>
                                                        ))}

                                                    </ul> */}

                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </form>
                            </div>

                        </div>

                    </div>
                    {/* product-card */}
                    <div className='col-lg-9 col-md-6 col-sm-12'>
                        <div className='container-fluid'>
                            <div className='row'>
                                {Category.slice(Fromidx,Index).map((pro1, data) => (
                                    <div className='col-lg-3 col-md-6 col-sm-12 mt-3'>
                                        <div className="card subcat-card mt-3" style={{ width: '14rem' }}>
                                            <div className='subcat-heart-icon'>

                                                {token ? (<Link onClick={() => addTowish(pro1.product_id)} > <i class="fa-solid fa-heart subcat-heart-iconnn"></i></Link>) : (
                                                    <Link to={'/login'}> <i class="fa-solid fa-heart subcat-heart-iconnn"></i></Link>
                                                )}

                                            </div>

                                            <img src={pro1.product_image} className="card-img-top subcat-img" alt="..." />
                                            <div className='subcat-icon'>
                                                <a class="btn btn-success m-2" href="#" role="button"><i class="fa-solid fa-shuffle"></i></a>
                                                <a class="btn btn-success" href="#" role="button"><i class="fa-solid fa-eye"></i></a>
                                            </div>
                                            <div className="card-body">
                                                <a className='card-title' href='#'>{pro1.english_name}</a>
                                                <p className="card-text11 text-primary">{pro1.point_value}</p>
                                                <p className="card-text22 text-black"> MRP<strike className="text-danger">{pro1.mrp_price}</strike>

                                                    <span className='text-success'>{pro1.sale_price}</span></p>
                                                <div class="d-grid gap-2">
                                                    <button class="btn add-cart-btn" type="button"><i className="fa-solid fa-basket-shopping nav-sec-icon1">{token ? (<Link style={{ textDecoration: 'none', color: 'white', fontSize: '12px' }} onClick={() => addTocart(pro1.product_id)} >Add to cart </Link>) : (
                                                        <Link style={{ textDecoration: 'none', color: 'black', fontSize: '12px' }} to={'/login'}> Add</Link>
                                                    )}</i></button>

                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                        </div>

                    </div>
                </div>
            </div>

            {/* <div className='pagenation-div col-lg-12 col-md-12 col-sm-12'>
                <ul className="pagination page-ull">
                    <li className="page-item"><a className="page-link" href="#">Previous</a></li>
                    <li className="page-item"><a className="page-link" href="#">1</a></li>
                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                    <li className="page-item"><a className="page-link" href="#">Next</a></li>
                </ul>
            </div> */}
            <nav aria-label="Page navigation example">
                <ul className="Page1 pagination justify-content-center">
                    <li className="page-item ">
                        <button className=" page-link" onClick={Previoupage}>
                            Previous
                        </button>
                    </li>

                    <li className="page-item disabled">
                        <a className="page-link" href="">
                            {" "}
                            Current Page -{pages}
                        </a>
                    </li>

                    <li className="page-item">
                        <button className="page-link" onClick={nextpage}>
                            Next
                        </button>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Subcategory
