import React, { useEffect, useState } from 'react'
import Authuser from '../Authentication/Authuser'
import { Link, useParams } from 'react-router-dom';

const Subbrand = () => {
    const { http,user,token } = Authuser();
    let { brand_id } = useParams();
    const [activeindex, setActiveIndex] = useState(null);
    const handleItemClick = (index) => {
        if (index === activeindex) {
            //close currently open submenu
            setActiveIndex(null);
        } else {
            setActiveIndex(index);
        }
    }
    //product
    const [MainBrand, setMainBrand] = useState([]);
    // console.log(MainBrand);
    //brand name
    const [brands, setbrands] = useState([]);
    // console.log(brands);

    const [subBrand_, setsubBrand_] = useState([]);

    //Scroll menu
    const [Cat, SetCat] = useState([]);
    const [Brand, SetBrand] = useState([]);

    //count for cat cat and brand
    const [Count, SetCount] = useState([]);
    const [Count1, SetCount1] = useState([]);
    const getbrandproductData = () => {
        try {
            http.get(`/product-shop/${brand_id}`)
                .then((res) => {
                    console.log(res.data);
                    setMainBrand(res.data.brand);
                    // console.log(res.data.brand);

                    setbrands(res.data.brands_);
                    // console.log(res.data.brands_);

                    setsubBrand_(res.data.subBrand_);

                    SetCat(res.data.cat);
                    // console.log(res.data.cat)

                    SetBrand(res.data.brandss);
                    // console.log(res.data.brandss);

                    SetCount(res.data.count['']);
                    SetCount1(res.data.count1['']);

                }).catch((e) => {
                    console.log(e);
                });
        } catch (error) {

        }

    };
    useEffect(() => {
        getbrandproductData();
    }, [brand_id]);

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
    return (
        <>
            <div className='container-fluid mt-3'>
                <div className='bg-text subcat-con1'>
                    <h1 className='subcat-head'>{brands.brand_name}</h1>
                    <p className='subcat-para'><i class="fa-solid fa-house"></i><a href='/' className='subcat-home-li'>Home/</a>{brands.brand_name}</p>
                </div>


            </div>


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
                                            <li key={index} className={activeindex === index ? 'open' : ''}>
                                                <a onClick={() => handleItemClick(index)} href='#' className='font-weight-bold text-dark' style={{ textDecoration: "none", fontSize: "20px", marginLeft: "5px" }}>
                                                    <input type='checkbox' className='shop-card2-input1'></input>
                                                    {cat.category_name}
                                                    {Count.filter((count) => count.product_category_id == cat.category_id)
                                                        .map((count) => (
                                                            (count.cat_count)
                                                        ))}
                                                    {/* <ul style={{ display: activeindex === index ? 'block' : 'none' }}>
                                                        {Sub.slice((sub) => sub.subcategory_category_id === cat.category_id).map((sub) => (

                                                            <li className='text-dark'><Link to={`/product-shop/${cat.category_id}/${sub.subcategory_name}`}>{sub.subcategory_name}</Link></li>
                                                        ))}

                                                    </ul>
                                                     */}

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
                                        {Brand.slice(0, 16).map((brand, index) => (
                                            <li key={index} className={activeindex === index ? 'open' : ''}>
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
                                {MainBrand.map((pro1, data) => (
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
                                                    <button class="btn add-cart-btn" type="button"><i className="fa-solid fa-basket-shopping nav-sec-icon1"></i>{token ? (<Link style={{ textDecoration: 'none', color: 'white', fontSize: '12px' }} onClick={() => addTocart(pro1.product_id)} >Add to cart </Link>) : (
                                                        <Link style={{ textDecoration: 'none', color: 'black', fontSize: '12px' }} to={'/login'}> Add</Link>
                                                    )}</button>

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

        </>
    )
}

export default Subbrand
