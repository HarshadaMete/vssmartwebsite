import React from 'react'
import Authuser from '../Authentication/Authuser'
import { useState } from 'react';
import { useEffect } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';

const Search = () => {

    const { http, token, user } = Authuser();
    const [Product, setProduct] = useState([]);
    const location = useLocation();

    const [searchParams] = useSearchParams(location.search); // Use useSearchParams

    const query = searchParams.get('query');


    const filteredRecords = Product.filter(record =>
        record.english_name.toLowerCase().includes(query.toLowerCase())
    );
    console.log(filteredRecords);

    const getProduct = () => {

        http.get(`/products`)
            .then((res) => {
                const filteredRecords = res.data.products.data.filter(record =>
                    record.english_name.toLowerCase().includes(query.toLowerCase())
                );
                setProduct(filteredRecords);
            }).catch((e) => {
                console.log(e);
            });
    }
    useEffect(() => {
        getProduct();

    }, []);
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
        http.get(`add-to-wishlist/${product_id}`).then((res) => {
            console.log(res.data);
            alert(res.data.msg)
        }).
            catch((e) => { console.log(e); });
    }
    return (
        <>

            <div className='container-fluid mt-3'>
                <div className='bg-text cart-con1'>
                    <h1 className='cart-head'>Search</h1>
                    <p className='wishlist-para'><i class="fa-solid fa-house"></i><Link to='/' className='wishlist-home-li'>Home</Link>/
                       SearchProducts</p>
                </div>
            </div>
            <div className='container'>
                <div className='row'>
                { Product.map((search)=>
(

                        <div className='col-lg-3 col-md-6 col-sm-12 mt-4 ms-3'>


                            <div className="card collected-card" style={{ width: '18rem' }}>
                                <div className='off-div2'>
                                    <label className='off-lable'>30%OFF</label>
                                </div>
                                <div>

                                    {token ? (<Link onClick={() => addTowish(search.product_id)} > <i class="fa-solid fa-heart shop-heart-iconnn" style={{ color: 'blue' }} ></i></Link>) : (
                                        <Link to={'/login'}> <i class="fa-solid fa-heart shop-heart-iconnn" style={{ color: 'blue' }} ></i></Link>
                                    )}
                                </div>
                                <img src={search.product_image} className="card-img-top collected-img" alt="..." />
                                <div className='collected-icon'>
                                    <a class="btn btn-success m-2" href="#" role="button"><i class="fa-solid fa-shuffle"></i></a>
                                    <a class="btn btn-success" href="#" role="button"><i class="fa-solid fa-eye"></i></a>
                                </div>
                                <div className="card-body">
                                    <a className='card-title' href='#'>{search.english_name}</a>
                                    <p className="card-text11 text-primary">{search.point_value}</p>
                                    <p className="card-text22 text-black"> MRP<strike className="text-danger">{search.mrp_price}</strike>

                                        <span className='text-success'>{search.sale_price}</span></p>
                                    <div class="d-grid gap-2">
                                        {/* <button class="btn add-cart-btn" type="button"><i className="fa-solid fa-basket-shopping nav-sec-icon1"></i>Add</button> */}
                                        <button class="btn add-cart-btn" type="button">
                                            <i className="fa-solid fa-basket-shopping nav-sec-icon1">{token ? (<Link onClick={() => addTocart(search.product_id)} >Add to cart </Link>) : (
                                                <Link to={'/login'}> Add</Link>
                                            )}</i></button>
                                    </div>

                                </div>
                            </div>



                        </div>
                    ))}

                </div>

            </div>

        </>
    )
}

export default Search;
