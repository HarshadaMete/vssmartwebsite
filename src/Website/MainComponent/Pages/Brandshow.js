import React, { useEffect, useState } from 'react'
import Authuser from '../Authentication/Authuser'

const Brandshow = () => {
    const {http,user,token}=Authuser();

    const [Brands, setBrands] = useState([])
    const getSlider = () => {

        http.get(`/brands`).then((res) => {
            // console.log(res.data);
            setBrands(res.data.brands);
      
          });
        }
        useEffect(() => {
          getSlider()
        }, [])
    return (
        <>
            <div className='container'>
                <div className='row'>
                    {Brands.map(item => (
                        <div className='col-lg-4 col-md-6 col-sm-12'>
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
                                <div className='name'><h5  style={{paddingTop:'160px'}}>{item.brand_name}</h5></div>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Brandshow
