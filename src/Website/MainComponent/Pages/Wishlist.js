import React from 'react'
import { Link } from 'react-router-dom'
import Authuser from '../Authentication/Authuser'
import { useState } from 'react';
import { useEffect } from 'react';

const Wishlist = () => {

    const { http, token, user } = Authuser();
    const [Wishlist, setWishlist] = useState([]);
    const [setwish, setWish] = useState([]);
    console.log(Wishlist);

    const getWishItem = () => {
        http.get(`/get-wishlist`)
            .then((res) => {
                // console.log(res.data);
                setWishlist(res.data.wishlist);
                // console.log(res.data.cart.length);
            }).catch((e) => {
                console.log(e);
            });

    }

    const addTocart = (product_id) => {
        // console.log(product_id);
        http.get(`/add-to-cart/${product_id}`).then((res) => { console.log(res.data); }).catch((e) => { console.log(e); });
    }
    const removewishlist = (wish_id) => {
        // console.log(wish_id);
        http.get(`/remove-from-wishlist/${wish_id}`).then((res) => {
            // console.log(res.data);
            setWish(wish_id);
            console.log(setWishlist((prevWishlist) => prevWishlist.filter(item => item.wish_id !== wish_id)));
        }).catch((e) => { console.log(e); });

    }
    useEffect(() => {
        getWishItem();
    }, [token, setwish])
    return (
        <>
            <div className='container-fluid mt-3'>
                <div className='bg-text cart-con1'>
                    <h1 className='cart-head'>WISHLIST</h1>
                    <p className='wishlist-para'><i class="fa-solid fa-house"></i><Link to='/' className='wishlist-home-li'>Home</Link>/
                        Wishlist</p>
                </div>
            </div>
            <div className='container mt-5'>
                <div className='row'>
                    <div className='col-12 text-center'>
                        <form>
                            <div className="table-content table-responsive">
                                <table className="mx-auto">
                                    <thead>
                                        <tr>
                                            <th colSpan="6" style={{ fontSize: '35px', color: 'green', fontWeight: 'bold' }}>Wishlist</th>
                                        </tr>
                                        <tr style={{ marginTop: '25px' }}>
                                            <th className='cart-t-head col-2'>Remove</th>
                                            <th className='cart-t-head col-2'>images</th>
                                            <th className='cart-t-head col-2'>Product</th>
                                            <th className='cart-t-head col-2'>Unit Price</th>
                                            <th className='cart-t-head col-2'>Stock Status</th>
                                            <th className='cart-t-head col-2'>add to cart</th>


                                        </tr>
                                    </thead>
                                    <tbody>
                                        {Wishlist.map((item) => (
                                            <tr className='border-bottom'>
                                                <td className="pt-4 border-end">
                                                    <li type='none' onClick={() => removewishlist(item.wishe_id)}><i className="fa fa-times" /></li>
                                                </td>
                                                <td className=" border-end">
                                                    <a href="#"><img src={'https://vsmart.ajspire.com/uploads/product_image/' + item.product_image} width={90} height={90} alt /></a>
                                                </td>
                                                <td className="pt-4 border-end">
                                                    <a href="#">{item.english_name}</a>
                                                </td>
                                                <td className="pt-4 border-end">
                                                    <span className="amount">${item.online_price}</span>
                                                </td>
                                                <td className="pt-4 border-end">
                                                    <span className="in-stock">in stock</span>
                                                </td>
                                                <td className="pt-4 border-end">
                                                    <Link onClick={() => addTocart(item.product_id)}>add to cart</Link>
                                                </td>


                                            </tr>
                                        ))}

                                    </tbody>

                                </table>



                            </div>
                        </form>


                    </div>


                </div>

            </div>
        </>
    )
}

export default Wishlist
