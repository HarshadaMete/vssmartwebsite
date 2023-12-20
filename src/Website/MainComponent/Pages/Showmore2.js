import React from 'react'
import Authuser from '../Authentication/Authuser'
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Showmore2 = () => {
    const{http,user,token}=Authuser();
    const [Product1, setProduct1] = useState([])
    // const [Brands, setBrands] = useState([])
    const getSlider = () => {
      
          http.get(`/products`).then((res) => {
              console.log(res.data);
            setProduct1(res.data.products.data);
          })

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
        http.get(`add-to-wishlist/${product_id}`).then((res) => {
            console.log(res.data);
            alert(res.data.msg)
        }).
            catch((e) => { console.log(e); });
    }


  return (
    <>
    <div className='container'>
        <div className='row'>
        {Product1.map((pro1, data) => (

            <div className='col-lg-3 col-md-6 col-sm-12 mt-4'>
          
            
              <div className="card collected-card" style={{ width: '18rem' }}>
                <div className='off-div2'>
                  <label className='off-lable'>30%OFF</label>
                </div>
                <div>
               
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
                      <i className="fa-solid fa-basket-shopping nav-sec-icon1">{token ? (<Link onClick={() => addTocart(pro1.product_id)} >Add to cart </Link>) : (
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

export default Showmore2
