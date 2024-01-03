import React from 'react'
import { Link } from 'react-router-dom'

const BankDetail = () => {
    return (
        <>
            <div className='container-fluid mt-3'>
                <div className='bg-text cart-con1'>
                    <h1 className='cart-head'>Banking Details</h1>
                    <p className='wishlist-para'><i class="fa-solid fa-house"></i><Link to='/' className='wishlist-home-li'>Home</Link>/
                        BankDetail</p>
                </div>
            </div>
            <div className='container' style={{ marginTop: '160px' }}>
                <h1 style={{ textAlign: 'center', fontSize: '45px', fontWeight: 'bold' }}>Banking Details</h1>
                <div className='text-center mt-3'>
                    <img src='https://vsmart.ajspire.com/images/icici.png' className='bank-img'></img>
                </div>
            </div>
            <div className='container' style={{marginTop:'25px'}}>
                <div className='row'>
                    <div className='col-12 text-center'>
                        <form>
                            <div  className="table-content table-responsive">
                                <table className="mx-auto" style={{width:'100%'}}>
                                    <thead>
                                        <tr>
                                            <th colSpan={2}></th>
                                        </tr>
                                        <tr>
                                            <th className='col-6 bank-head border-end'>Bank Name</th>                                      
                                            <th className='col-6 bank-head'>ICICI Bank</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className='border-bottom border-start'>
                                            <td className='pt-4 border-end'>Name:</td>
                                            <td className='pt-4 border-end'>Vishwakarma Super Mart Private Limited</td>
                                        </tr>
                                        <tr className='border-bottom border-start'>
                                            <td className='pt-4 border-end'>A/c No :</td>
                                            <td className='pt-4 border-end'>646005004085</td>
                                        </tr>
                                        <tr className='border-bottom border-start'>
                                            <td className='pt-4 border-end'>Branch :</td>
                                            <td className='pt-4 border-end'>Raviwar Peth Satara</td>
                                        </tr>
                                        <tr className='border-bottom border-start'>
                                            <td className='pt-4 border-end'>IFSC Code :</td>
                                            <td className='pt-4 border-end'>ICIC0006460</td>
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

export default BankDetail
