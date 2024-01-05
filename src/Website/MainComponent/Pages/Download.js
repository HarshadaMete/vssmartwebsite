import React from 'react'
import { Link } from 'react-router-dom'

const Download = () => {
    return (
        <>
            <div className='container-fluid mt-3'>
                <div className='bg-text cart-con1'>
                    <h1 className='cart-head'>DOWNLOAD</h1>
                    <p className='wishlist-para'><i class="fa-solid fa-house"></i><Link to='/' className='wishlist-home-li'>Home</Link>/
                        Download Page</p>
                </div>
            </div>
            <div className='container' style={{ marginTop: '38px' }}>
                <div className='row'>
                    <div className='col-lg-12 col-md-6 col-sm-12'>
                        <h1 className='text-primary' style={{ fontSize: '38px', fontWeight: 'bold', textAlign: 'center' }}>DOWNLOAD</h1>
                    </div>
                </div>
            </div>
            <div className='container' style={{ marginTop: '25px' }}>
                <div className='row'>
                    <div className='col-12 text-center'>
                        <form>
                            <div className="table-content table-responsive">
                                <table className="mx-auto" style={{ width: '100%' }}>
                                    <thead>
                                        <tr>
                                            <th colSpan={3}></th>
                                        </tr>
                                        <tr>
                                            <th className='col-3 bank-head border-end'>Sr. No.</th>
                                            <th className='col-3 bank-head border-end'>File Name</th>
                                            <th className='col-6 bank-head'>Link</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className='border-bottom border-start'>
                                            <td className='pt-4 pb-2 border-end'>1</td>
                                            <td className='pt-4 pb-2 border-end'>Business Plan</td>
                                            <td className='pt-4 pb-2 border-end'>
                                                <Link to='/https://vsmart.ajspire.com/docs/business_plan.pdf'>
                                                <button type="button" class="btn btn-outline-success download-btn">
                                                <i class="fa-solid fa-file-pdf p-1"></i>Download PDF Here</button>
                                                </Link>
                                            </td>
                                        </tr>
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

export default Download
