import React, { useEffect, useState } from 'react'
import Authuser from '../Authentication/Authuser';
import { Link } from 'react-router-dom';

const Cart = () => {
    const { http, user, token } = Authuser();
    const [Cart, setCart] = useState([]);
    const [subtotal, setSubtotal] = useState(0);
    const [subto, setSubto] = useState(0);
    const [gst, setGst] = useState(0);
    const [pv, setPv] = useState(0);
    const [disc, setDisc] = useState(0);

    const getCartItem = () => {
        http.get(`/get-cart-list`)
            .then((res) => {
                setCart(res.data.cart);
                console.log(res.data.cart);
            }).catch((e) => {
                console.log(e);
            })
    }
    useEffect(() => {
        getCartItem();
    }, [token]);
    useEffect(() => {
        // Calculate the subtotal whenever the cart items change

        const newSubtotal = Cart.reduce(
            (accumulator, item) => accumulator + item.online_price * item.cart_product_qty,
            0
        );
        setSubtotal(newSubtotal);

        // Calculate the Gst whenever the cart items change
        // $gst = ($subto * $task->tax_per) / (100 + $task->tax_per);
        const gst = Cart.reduce(
            (accumulator, item) => accumulator + (item.online_price * item.cart_product_qty * item.tax_per) / (100 + item.tax_per),
            0
        );
        setGst(gst);
        // Calculate the P v whenever the cart items change

        const pv = Cart.reduce(
            (accumulator, item) => accumulator + item.point_value,
            0
        );
        setPv(pv);
        // Calculate the Discount whenever the cart items change

        const disc = Cart.reduce(
            (accumulator, item) => {
                console.log('Total Discount:', item.total_discount);
                const totalDiscount = parseFloat(item.total_discount);
                return accumulator + totalDiscount;
            }
            ,
            0
        );
        setDisc(disc);
        console.log(disc);
    }, [Cart]);

    return (
        <>

            <div className='container-fluid mt-3'>
                <div className='bg-text cart-con1'>
                    <h1 className='cart-head'>Your Cart</h1>

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
                                            <th colSpan="9" style={{ fontSize: '35px', color: 'green', fontWeight: 'bold' }}>Your Cart</th>
                                        </tr>
                                        <tr style={{ marginTop: '25px' }}>
                                            <th className='cart-t-head col-1'>Sr.No</th>
                                            <th className='cart-t-head col-2'>Product</th>
                                            <th className='cart-t-head col-2'>Product Name</th>
                                            <th className='cart-t-head col-2'>Price</th>
                                            <th className='cart-t-head col-1'>Brand</th>
                                            <th className='cart-t-head col-1'>Quantity</th>
                                            <th className='cart-t-head col-1'>Tax</th>
                                            <th className='cart-t-head col-1'>P V</th>
                                            <th className='cart-t-head col-1'>Total</th>
                                        </tr>
                                    </thead>
                                    {/* Add your table body here */}


                                    <tbody>
                                        {Cart.map((item) => (
                                            <tr className='border-bottom'>
                                                <td className="pt-4 border-end">1</td>
                                                <td className=" border-end"><img src={'https://vsmart.ajspire.com/uploads/product_image/' + item.product_image} alt="..." style={{ height: "120px", width: "120px" }} /></td>
                                                <td className="pt-4 border-end">{item.english_name}</td>
                                                <td className="pt-4 border-end">&#8377; {item.sale_price}</td>
                                                <td className="pt-4 border-end">{item.brand_name}</td>
                                                <td className="pt-4 border-end">{item.cart_product_qty}</td>
                                                <td className="pt-4 border-end">&#8377; {((item.sale_price * item.cart_product_qty * item.tax_per) / (100 + item.tax_per)).toFixed(2)}</td>
                                                <td className="pt-4 border-end">&#8377; {item.point_value}</td>
                                                <td className="pt-4 border-end">&#8377; {item.sale_price * item.cart_product_qty}</td>

                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                            <div className='row'>
                                <div className='mt-5 md-6'>
                                    <h2 style={{ fontSize: '35px', color: 'green', fontWeight: 'bold' }}>Cart Total</h2>
                                    <hr style={{ width: '60%', marginLeft: '22%', height: "1%", color: '#11823b' }}></hr>
                                    <div className='d-flex'>

                                        <div className='col-lg-6 col-md-6 col-sm-12'>
                                            <ul type='none' style={{ fontSize: '19px', fontWeight: 'bold' }} className='ms-start'>
                                                <li className='m-3'>Subtotal</li>
                                                <li className='m-3'>Gst </li>
                                                <li className='m-3'>P V Value</li>
                                                <li className='m-3'>Discount </li>
                                                <li className='m-3'>Total</li>
                                            </ul>

                                        </div>
                                        <div className='col-lg-6 col-md-6 col-sm-12'>
                                            <ul type='none' style={{ fontSize: '19px', fontWeight: 'bold' }}>
                                                <li className='m-3'><span>&#8377;{subtotal.toFixed(2)}</span></li>
                                                <li className='m-3'> <span>&#8377;{gst.toFixed(2)}</span></li>
                                                <li className='m-3'> <span>&#8377;{pv.toFixed(2)}</span></li>
                                                <li className='m-3'> <span>&#8377;{disc.toFixed(2)}</span></li>
                                                <li className='m-3'><span>&#8377;{subtotal.toFixed(2)}</span></li>
                                            </ul>
                                        </div>
                                        {/* <ul type='none'>
                                            <li>Subtotal <span>&#8377;{subtotal.toFixed(2)}</span></li>
                                            <li>Gst <span>&#8377;{gst.toFixed(2)}</span></li>
                                            <li>P V Value <span>&#8377;{pv.toFixed(2)}</span></li>
                                            <li>Discount <span>&#8377;{disc.toFixed(2)}</span></li>
                                            <li>Total <span>&#8377;{subtotal.toFixed(2)}</span></li>
                                        </ul> */}
                                    </div>


                                </div>

                            </div>


                        </form>
                    </div>
                </div>

            </div>

            <div className='row'>
                <div className='col-lg-12 col-md-6 col-sm-12'>
                    <Link to={'/checkout'} style={{textDecoration:'none'}}>
                        <div class="d-grid gap-2">
                            <div style={{ display: 'flex', justifyContent: 'center' }}>
                                <button class="btn btn-success ms-80%" type="button" style={{ width: '90%', height: '70%', marginTop: '3%', fontSize: '20px' }}>
                                   Procced To Checkout <span>&#8377;{subtotal.toFixed(2)}</span>
                                </button> 
                            </div>

                        </div>
                    </Link>
                </div>
            </div>


        </>
    )
}

export default Cart
