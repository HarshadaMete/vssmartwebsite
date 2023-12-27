import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Authuser from '../Authentication/Authuser';
import { ProgressBar } from 'react-bootstrap';


const Myorder = () => {
  const { http, token, user } = Authuser();
  const [Cart, setCart] = useState([]);


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

  }, [Cart]);

  const [Myorder, setMyorder] = useState([]);

  const [Order, setOrder] = useState([]);

  const [activePanel, setActivePanel] = useState(0);

  const togglePanel = (index) => {
    setActivePanel(index === activePanel ? -1 : index);
  };
  console.log(Order);

  const getMyOrder = () => {
    http.get(`/get_all_orders`)
      .then((res) => {
        setMyorder(res.data.myOrder.data);
        setOrder(res.data.myOrderproduct);
        // console.log(res.data);
      }).catch((e) => {
        console.log(e);
      });



  }
  useEffect(() => {
    getMyOrder();
  }, [token]);
  return (
    <>
      <div className='container-fluid mt-3'>
        <div className='bg-text cart-con1'>
          <h1 className='myorder-head'>ORDER HISTORY</h1>
          <p className='wishlist-para'><i class="fa-solid fa-house"></i><Link to='/' className='wishlist-home-li'>Home</Link>/
            View Orders</p>
        </div>
      </div>
      <div className='container-fluid' style={{ marginTop: '120px' }}>
        <div className='row'>
          <div className='col-lg-12 col-md-6 col-sm-12'>
            <div className='d-flex justify-content-end'>
              <div className='order-div pt-3 ps-4'>
                <a href='#' style={{ textDecoration: 'none', color: 'black', fontWeight: 'bold', fontSize: '18px' }}>Offline Order History</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className='container' style={{ marginTop: '120px', backgroundColor: '#F5F5F5' }}>
          <div className='row'>
            {Myorder.map((item, index) => (
              <div className='col-lg-12 col-md-6 col-sm-12'>
                <div className="orderlist-head" onClick={() => togglePanel(index + 1)}>
                  <h5 className='order-head'>order#{item.ordermaster_id}</h5>
                </div>
                <div style={{ display: activePanel === index + 1 ? 'block' : 'none' }}>
                  <div className='d-flex' style={{ marginTop: '50px' }}>
                    <ProgressBar className='order-progress1'/>
                    <ProgressBar className='order-progress'/>
                    <ProgressBar className='order-progress'/>
                    <ProgressBar className='order-progress'/>
                    <ProgressBar className='order-progress'/>
                    <ProgressBar className='order-progress'/>                  
                  </div>
                  {item.ordermaster_order_status == 1 ? (
                    <ul className='text-center' id='progress' type='none'>
                      <li className='active'>
                        <div className='track-circle1'>
                          <i class="fa-solid fa-check myorder-icon1"></i>
                          <span style={{ fontWeight: 'bold' }}>Order Pending</span>
                        </div>
                      </li>
                      <li className='active'>
                        <div className='track-circle2'>
                          <i class="fa-solid fa-xmark myorder-icon"></i>
                          <span style={{ fontWeight: 'bold' }}>Order Accepted</span>
                        </div>
                      </li>

                      <li className='active'>
                        <div className='track-circle3'>
                          <i class="fa-solid fa-xmark myorder-icon"></i>
                          <span style={{ fontWeight: 'bold' }}>Order Shipped</span>
                        </div>
                      </li>
                      <li className='active'>
                        <div className='track-circle4'>
                          <i class="fa-solid fa-xmark myorder-icon"></i>
                          <span style={{ fontWeight: 'bold' }}>Order Transporting</span>
                        </div>
                      </li>
                      <li className='active'>
                        <div className='track-circle5'>
                          <i class="fa-solid fa-xmark myorder-icon"></i>
                          <span style={{ fontWeight: 'bold' }}>Order Delivered</span>
                        </div>
                      </li>
                      <li className='active'>
                        <div className='track-circle6'>
                          <i class="fa-solid fa-xmark myorder-icon"></i>
                          <span style={{ fontWeight: 'bold' }}>Order Rejected</span>
                        </div>
                      </li>
                    </ul>
                  ) : item.ordermaster_order_status == 2 ? (
                    <ul className='text-center' id='progress' type='none'>
                      <li className='active'>
                        <div className='track-circle1'>
                          <i class="fa-solid fa-check myorder-icon1"></i>
                          <span style={{ fontWeight: 'bold' }}>Order Pending</span>
                        </div>
                      </li>
                      <li className='active'>
                        <div className='track-circle2'>
                          <i class="fa-solid fa-xmark myorder-icon"></i>
                          <span style={{ fontWeight: 'bold' }}>Order Accepted</span>
                        </div>
                      </li>

                      <li className='active'>
                        <div className='track-circle3'>
                          <i class="fa-solid fa-xmark myorder-icon"></i>
                          <span style={{ fontWeight: 'bold' }}>Order Shipped</span>
                        </div>
                      </li>
                      <li className='active'>
                        <div className='track-circle4'>
                          <i class="fa-solid fa-xmark myorder-icon"></i>
                          <span style={{ fontWeight: 'bold' }}>Order Transporting</span>
                        </div>
                      </li>
                      <li className='active'>
                        <div className='track-circle5'>
                          <i class="fa-solid fa-xmark myorder-icon"></i>
                          <span style={{ fontWeight: 'bold' }}>Order Delivered</span>
                        </div>
                      </li>
                      <li className='active'>
                        <div className='track-circle6'>
                          <i class="fa-solid fa-xmark myorder-icon"></i>
                          <span style={{ fontWeight: 'bold' }}>Order Rejected</span>
                        </div>
                      </li>
                    </ul>

                  ) : item.ordermaster_order_status == 3 ? (
                    <ul className='text-center' id='progress' type='none'>
                      <li className='active'>
                        <div className='track-circle1'>
                          <i class="fa-solid fa-check myorder-icon1"></i>
                          <span style={{ fontWeight: 'bold' }}>Order Pending</span>
                        </div>
                      </li>
                      <li className='active'>
                        <div className='track-circle2'>
                          <i class="fa-solid fa-xmark myorder-icon"></i>
                          <span style={{ fontWeight: 'bold' }}>Order Accepted</span>
                        </div>
                      </li>

                      <li className='active'>
                        <div className='track-circle3'>
                          <i class="fa-solid fa-xmark myorder-icon"></i>
                          <span style={{ fontWeight: 'bold' }}>Order Shipped</span>
                        </div>
                      </li>
                      <li className='active'>
                        <div className='track-circle4'>
                          <i class="fa-solid fa-xmark myorder-icon"></i>
                          <span style={{ fontWeight: 'bold' }}>Order Transporting</span>
                        </div>
                      </li>
                      <li className='active'>
                        <div className='track-circle5'>
                          <i class="fa-solid fa-xmark myorder-icon"></i>
                          <span style={{ fontWeight: 'bold' }}>Order Delivered</span>
                        </div>
                      </li>
                      <li className='active'>
                        <div className='track-circle6'>
                          <i class="fa-solid fa-xmark myorder-icon"></i>
                          <span style={{ fontWeight: 'bold' }}>Order Rejected</span>
                        </div>
                      </li>
                    </ul>

                  ) : item.ordermaster_order_status == 4 ? (
                    <ul className='text-center' id='progress' type='none'>
                      <li className='active'>
                        <div className='track-circle1'>
                          <i class="fa-solid fa-check myorder-icon1"></i>
                          <span style={{ fontWeight: 'bold' }}>Order Pending</span>
                        </div>
                      </li>
                      <li className='active'>
                        <div className='track-circle2'>
                          <i class="fa-solid fa-xmark myorder-icon"></i>
                          <span style={{ fontWeight: 'bold' }}>Order Accepted</span>
                        </div>
                      </li>

                      <li className='active'>
                        <div className='track-circle3'>
                          <i class="fa-solid fa-xmark myorder-icon"></i>
                          <span style={{ fontWeight: 'bold' }}>Order Shipped</span>
                        </div>
                      </li>
                      <li className='active'>
                        <div className='track-circle4'>
                          <i class="fa-solid fa-xmark myorder-icon"></i>
                          <span style={{ fontWeight: 'bold' }}>Order Transporting</span>
                        </div>
                      </li>
                      <li className='active'>
                        <div className='track-circle5'>
                          <i class="fa-solid fa-xmark myorder-icon"></i>
                          <span style={{ fontWeight: 'bold' }}>Order Delivered</span>
                        </div>
                      </li>
                      <li className='active'>
                        <div className='track-circle6'>
                          <i class="fa-solid fa-xmark myorder-icon"></i>
                          <span style={{ fontWeight: 'bold' }}>Order Rejected</span>
                        </div>
                      </li>
                    </ul>


                  ) : item.ordermaster_order_status == 5 ? (
                    <ul className='text-center' id='progress' type='none'>
                      <li className='active'>
                        <div className='track-circle1'>
                          <i class="fa-solid fa-check myorder-icon1"></i>
                          <span style={{ fontWeight: 'bold' }}>Order Pending</span>
                        </div>
                      </li>
                      <li className='active'>
                        <div className='track-circle2'>
                          <i class="fa-solid fa-xmark myorder-icon"></i>
                          <span style={{ fontWeight: 'bold' }}>Order Accepted</span>
                        </div>
                      </li>

                      <li className='active'>
                        <div className='track-circle3'>
                          <i class="fa-solid fa-xmark myorder-icon"></i>
                          <span style={{ fontWeight: 'bold' }}>Order Shipped</span>
                        </div>
                      </li>
                      <li className='active'>
                        <div className='track-circle4'>
                          <i class="fa-solid fa-xmark myorder-icon"></i>
                          <span style={{ fontWeight: 'bold' }}>Order Transporting</span>
                        </div>
                      </li>
                      <li className='active'>
                        <div className='track-circle5'>
                          <i class="fa-solid fa-xmark myorder-icon"></i>
                          <span style={{ fontWeight: 'bold' }}>Order Delivered</span>
                        </div>
                      </li>
                      <li className='active'>
                        <div className='track-circle6'>
                          <i class="fa-solid fa-xmark myorder-icon"></i>
                          <span style={{ fontWeight: 'bold' }}>Order Rejected</span>
                        </div>
                      </li>
                    </ul>

                  ) : item.ordermaster_order_status == 6 ? (
                    <ul className='text-center' id='progress' type='none'>
                      <li className='active'>
                        <div className='track-circle1'>
                          <i class="fa-solid fa-check myorder-icon1"></i>
                          <span style={{ fontWeight: 'bold' }}>Order Pending</span>
                        </div>
                      </li>
                      <li className='active'>
                        <div className='track-circle2'>
                          <i class="fa-solid fa-xmark myorder-icon"></i>
                          <span style={{ fontWeight: 'bold' }}>Order Accepted</span>
                        </div>
                      </li>

                      <li className='active'>
                        <div className='track-circle3'>
                          <i class="fa-solid fa-xmark myorder-icon"></i>
                          <span style={{ fontWeight: 'bold' }}>Order Shipped</span>
                        </div>
                      </li>
                      <li className='active'>
                        <div className='track-circle4'>
                          <i class="fa-solid fa-xmark myorder-icon"></i>
                          <span style={{ fontWeight: 'bold' }}>Order Transporting</span>
                        </div>
                      </li>
                      <li className='active'>
                        <div className='track-circle5'>
                          <i class="fa-solid fa-xmark myorder-icon"></i>
                          <span style={{ fontWeight: 'bold' }}>Order Delivered</span>
                        </div>
                      </li>
                      <li className='active'>
                        <div className='track-circle6'>
                          <i class="fa-solid fa-xmark myorder-icon"></i>
                          <span style={{ fontWeight: 'bold' }}>Order Rejected</span>
                        </div>
                      </li>
                    </ul>

                  ) : item.ordermaster_order_status != 6 ? (
                    <ul className='text-center' id='progress' type='none'>
                      <li className='active'>
                        <div className='track-circle1'>
                          <i class="fa-solid fa-check myorder-icon1"></i>
                          <span style={{ fontWeight: 'bold' }}>Order Pending</span>
                        </div>
                      </li>
                      <li className='active'>
                        <div className='track-circle2'>
                          <i class="fa-solid fa-xmark myorder-icon"></i>
                          <span style={{ fontWeight: 'bold' }}>Order Accepted</span>
                        </div>
                      </li>

                      <li className='active'>
                        <div className='track-circle3'>
                          <i class="fa-solid fa-xmark myorder-icon"></i>
                          <span style={{ fontWeight: 'bold' }}>Order Shipped</span>
                        </div>
                      </li>
                      <li className='active'>
                        <div className='track-circle4'>
                          <i class="fa-solid fa-xmark myorder-icon"></i>
                          <span style={{ fontWeight: 'bold' }}>Order Transporting</span>
                        </div>
                      </li>
                      <li className='active'>
                        <div className='track-circle5'>
                          <i class="fa-solid fa-xmark myorder-icon"></i>
                          <span style={{ fontWeight: 'bold' }}>Order Delivered</span>
                        </div>
                      </li>
                      <li className='active'>
                        <div className='track-circle6'>
                          <i class="fa-solid fa-xmark myorder-icon"></i>
                          <span style={{ fontWeight: 'bold' }}>Order Rejected</span>
                        </div>
                      </li>
                    </ul>

                  ) : null}

                  <div className='container' style={{ marginTop: '80px' }}>
                    <div class="row">
                      <div class="col-lg-5 col-md-12 col-sm-12">
                        <div class="card" style={{ backgroundColor: '#F5F5F5', borderRadius: '7px' }}>
                          <div class="card-body">
                            <ul type='none'>
                              <li>
                                <div className='d-flex'>
                                  <div className='order-card-head'><h6 style={{ fontWeight: 'bold' }}>Order Id</h6></div>
                                  <div className='order-card-para'><p>{item.ordermaster_id}</p></div>
                                </div>
                              </li>
                              <li>
                                <div className='d-flex'>
                                  <div className='order-card-head'><h6 style={{ fontWeight: 'bold' }}>Total Item</h6></div>
                                  <div className='order-card-para'><p>{item.ordermaster_total_product}</p></div>
                                </div>
                              </li>
                              <li>
                                <div className='d-flex'>
                                  <div className='order-card-head'><h6 style={{ fontWeight: 'bold' }}>Order Time</h6></div>
                                  <div className='order-card-para'><p>{item.created_at}</p></div>
                                </div>
                              </li>
                              <li>
                                <div className='d-flex'>
                                  <div className='order-card-head'><h6 style={{ fontWeight: 'bold' }}>Delivery Time</h6></div>
                                  <div className='order-card-para'><p>After Accepted Order Required Minimum 2 Days To Place Order</p></div>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-5 col-md-6 col-sm-12">
                        <div class="card" style={{ backgroundColor: '#F5F5F5', borderRadius: '7px' }}>
                          <div class="card-body">
                            <ul type='none'>
                              <li>
                                <div className='d-flex'>
                                  <div className='order-card-head'><h6 style={{ fontWeight: 'bold' }}>Cash Transaction Mode</h6>
                                  </div>
                                  <div className='order-card-para'>

                                    <p>Cash on Delivery</p>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div className='d-flex'>
                                  <div className='order-card-head'><h6 style={{ fontWeight: 'bold' }}>Delivery Fee</h6></div>
                                  <div className='order-card-para'><p>Free Of Cost Delivery</p></div>
                                </div>
                              </li>
                              <li>
                                <div className='d-flex'>
                                  <div className='order-card-head'><h6 style={{ fontWeight: 'bold' }}>Total(Incl.TAX)</h6></div>
                                  <div className='order-card-para'><p>₹549</p></div>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-2 col-md-6 col-sm-12" style={{ backgroundColor: '#F5F5F5', borderRadius: '7px' }}>
                        <div class="card" style={{ backgroundColor: '#F5F5F5', borderRadius: '7px' }}>
                          <div class="card-body">
                            <h6 style={{ fontSize: '15px', fontWeight: 'bold' }}>Delivery Location</h6>
                            <p>{user.address}</p>
                          </div>
                        </div>
                      </div>
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
                                  <th colSpan={7}></th>
                                </tr>
                                <tr style={{ marginTop: '25px' }}>
                                  <th className='cart-t-head col-1'>Sr.No</th>
                                  <th className='cart-t-head col-2'>Product</th>
                                  <th className='cart-t-head col-2'>Product Name</th>
                                  <th className='cart-t-head col-2'>Price</th>
                                  <th className='cart-t-head col-2'>Brand</th>
                                  <th className='cart-t-head col-1'>Quantity</th>
                                  <th className='cart-t-head col-2'>Action</th>
                                </tr>
                              </thead>
                              {/* Add your table body here */}
                              <tbody>
                                {Cart.map((item, index) => (
                                  <tr className='border-bottom'>
                                    <td className="pt-4 border-end">{index + 1}</td>
                                    <td className=" border-end"><img src={'https://vsmart.ajspire.com/uploads/product_image/' + item.product_image} alt="..." style={{ height: "120px", width: "120px" }} /></td>
                                    <td className="pt-4 border-end">{item.english_name}</td>
                                    <td className="pt-4 border-end">&#8377; {item.sale_price}</td>
                                    <td className="pt-4 border-end">{item.brand_name}</td>
                                    <td className="pt-4 border-end">{item.cart_product_qty}</td>
                                    <td className="pt-4 border-end"><button type="button" class="btn order-action-btn"><i class="fa-solid fa-reply" style={{ color: '#11823b' }}></i></button></td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
export default Myorder
