import { Button } from 'bootstrap'
import React, { useEffect, useState } from 'react'
import Authuser from '../Authentication/Authuser';
import { Link, useParams } from 'react-router-dom';

const Shop = () => {
    const { http, user, token } = Authuser();
    let { shop } = useParams();
    const [activeindex, SetActiveindex] = useState(null);
    const handleItemClick = (index) => {
        if (index === activeindex) {
            // close currently open submenu
            SetActiveindex(null);
        } else {
            SetActiveindex(index);
        }
    }
    const [Product, SetProduct] = useState([]);
    // console.log(MainBrand);
    // brand name
    // const [brands, Setbrands] = useState([]);

    // Scroll menu
    const [Cat, SetCat] = useState([]);
    const [Brand, SetBrand] = useState([]);

    // Count for cat and brand
    const [Count, SetCount] = useState([]);
    const [Count1, SetCount1] = useState([]);

    const getsrandproductData = () => {
        try {
            http.get(`/shop`).then((res) => {
                console.log(res.data);
                SetProduct(res.data.product.data);
                console.log(res.data.brand);
                SetBrand(res.data.brand);
                SetCat(res.data.cat);
                SetCount(res.data.count['']);
                SetCount1(res.data.count1['']);
            }).catch((e) => {
                console.log(e);
            });
        } catch (error) {

        }
    };

    useEffect(() => {

        getsrandproductData();
    }, [shop]);

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
                <div className='bg-text shop-con1'>
                    <h1 className='shop-head'>VIEW ALL PRODUCT</h1>
                    <p className='shop-para'><i class="fa-solid fa-house"></i><a href='/' className='shop-home-li'>Home</a>/View All Product</p>
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
                                        {Cat.slice(0, 12).map((cat, index) => (
                                            <li key={index} className={activeindex === index ? 'open' : ''}>
                                                <a onClick={() => handleItemClick(index)} href='#' className='font-weight-bold text-dark' style={{ textDecoration: 'none' }}>
                                                    <div>
                                                        <input type='checkbox' className='shop-card2-input1'></input>&nbsp;&nbsp; {cat.category_name}
                                                        &nbsp;&nbsp;(
                                                        {Count.filter((count) => count.product_category_id == cat.category_id).map((count) => (
                                                            (count.cat_count)
                                                        ))})
                                                        {/* <label className='shop-card2-lable1'>{cat.category_name}</label> */}
                                                        {/* <span className='shop-card2-num1'>(572)</span> */}
                                                    </div>
                                                </a>
                                                {/* <ul style={{ display: activeindex === index ? 'block' : 'none' }}> */}
                                                {/* submenu items here  */}
                                                {/* {SubBrand_.filter((sub) => sub.subcategory_category_id === cat.category_id).map((sub) => (
                                                        <li className='text-dark'><Link to={`/product-shop/${cat.category_id}/${sub.subcategory_id}`}>{sub.subcategory_name}</Link></li>
                                                    ))} */}
                                                {/* </ul> */}
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
                                        {Brand.slice(0, 12).map((brand, index) => (
                                            <li key={index} className={activeindex === index ? 'open' : ''}>
                                                <a onClick={() => handleItemClick(index)} href='#' className='font-weight-bold text-dark' style={{ textDecoration: 'none' }}>
                                                    <div>
                                                        <input type='checkbox' className='shop-card2-input1'></input>
                                                        {/* <label className='shop-card2-lable1'>{brand.brand_name}</label> */}
                                                        &nbsp;&nbsp; {brand.brand_name}
                                                        {/* &nbsp;&nbsp;(
                                                        {Count1.filter((count1) => count1.brand_id == brand.brand_id).map((count1) => (
                                                            (count1.brand_count)
                                                        ))}) */}

                                                    </div>
                                                </a>
                                                {/* <ul style={{ display: activeindex === index ? 'block' : 'none' }}>
                                                    submenu items here
                                                    {SubBrand_.filter((sub) => sub.brand_id === brand.brand_id).map((sub) => (
                                                        <li className='text-dark'><Link to={`/product-shop/${brand.brand_id}/${sub.subcategory_id}`}>{sub.subcategory_name}</Link></li>
                                                    ))}
                                                </ul> */}
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
                                {Product.slice(Fromidx,Index).map((pro1, data) => (
                                    <div className='col-lg-3 col-md-6 col-sm-12 mt-3'>
                                        <div className="card collected-card mt-3" style={{ width: '14rem' }}>
                                            <div className='shop-heart-icon'>

                                                {token ? (<Link onClick={() => addTowish(pro1.product_id)} > <i class="fa-solid fa-heart shop-heart-iconnn"></i></Link>) : (
                                                    <Link to={'/login'}> <i class="fa-solid fa-heart shop-heart-iconnn"></i></Link>
                                                )}

                                            </div>

                                            <img src={pro1.product_image} className="card-img-top collected-img" alt="..." />
                                            <div className='collected-icon'>
                                                <a class="btn btn-success m-2" href="#" role="button"><i class="fa-solid fa-shuffle"></i></a>
                                                <a class="btn btn-success" href="#" role="button"><i class="fa-solid fa-eye"></i></a>
                                            </div>
                                            <div className="card-body">
                                                <a className='card-title' href='#'>{pro1.english_name}</a>
                                                <p className="card-text11 text-primary">{pro1.category_name}</p>
                                                <p className="card-text22 text-black"> MRP<strike className="text-danger">{pro1.mrp_price}</strike>

                                                    <span className='text-success'>PV:{pro1.products_pv_percentages}</span></p>
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
            {/* pagenation */}
            <nav aria-label="Page navigation example" style={{marginTop:'20px'}}>
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

export default Shop
