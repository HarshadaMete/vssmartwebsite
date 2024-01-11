import React from 'react'
import { Link } from 'react-router-dom'

const Blog = () => {
    return (
        <>
            <div className='container-fluid mt-3'>
                <div className='bg-text cart-con1'>
                    <h1 className='cart-head'>BLOGS</h1>
                    <p className='wishlist-para'><i class="fa-solid fa-house"></i><Link to='/' className='wishlist-home-li'>Home</Link>/
                    View Blog</p>
                </div>
            </div>
            <div className='container mt-5'>
             <div className='row'>
                 <div className='col-lg-12 col-md-6 col-sm-12'>
                     <h1 style={{color:'black',fontWeight:'bold',fontSize:'40px'}}>Blogs No Added In VS Mart</h1>
                 </div>
             </div>
            </div>

        </>
    )
}

export default Blog
