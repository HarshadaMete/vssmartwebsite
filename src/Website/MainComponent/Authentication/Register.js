import React from 'react'
import Authuser from '../Authentication/Authuser';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const Register = () => {

  const {http}=Authuser();
   
  const[btnDisebale,setDisebale]=useState(0);
  const[formData,setformData]=useState(
    {
      name:'',
      mob_no:'',
      address:'',
      email:'',
      password:'',
      cpassword:'',
    
    } );
     console.log(formData);

    const OninputChange=(e)=>{
      setformData({...formData,[e.target.name]:e.target.value});
    }
    const onSubmit=(e)=>{
      http.post('/userregister',formData)
      .then((res)=>{
         console.log(res.data)
        setDisebale(0)
      })
      .catch((error)=>{
        setDisebale(0);
      });
      e.preventDefault();
      toast.success("Registraion Succefull!");
    }


  return (
    <>
      <section className="vh-50 bg-image mb-5" style={{backgroundColor:'#CCCCFF'}}>

        <div className="mask d-flex align-items-center h-80 gradient-custom-3">
          <div className="container h-80">
            <div className="row d-flex justify-content-center align-items-center h-80">
              <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                <div className="card" style={{ borderRadius: 15 }}>
                  <div className="card-body p-5">
                    <h2 className="text-uppercase text-center mb-5">Create an account</h2>
                    {/* <form> */}
                      <div className="form-outline mb-3">
                        <input name="name" onChange={(e)=>OninputChange(e)}  type="text" id="form3Example1cg" className="form-control form-control-lg" />
                        <label className="form-label" htmlFor="form3Example1cg">Your Name</label>
                      </div>
                      <div className="form-outline mb-3">
                        <input name='email' onChange={(e)=>OninputChange(e)}  type="email" id="form3Example3cg" className="form-control form-control-lg" />
                        <label className="form-label" htmlFor="form3Example3cg">Your Email</label>
                      </div>
                      <div className="form-outline mb-3">
                        <input  name='mob_no' onChange={(e)=>OninputChange(e)} type="tel" id="form3Example4cg" className="form-control form-control-lg" />
                        <label className="form-label" htmlFor="form3Example4cg">Mobile No</label>
                      </div>
                      <div className="form-outline mb-3">
                        <input  name='address' onChange={(e)=>OninputChange(e)}  type="text" id="form3Example4cg" className="form-control form-control-lg" />
                        <label className="form-label" htmlFor="form3Example4cg">Address</label>
                      </div>
                      <div className="form-outline mb-3">
                        <input  name='password' onChange={(e)=>OninputChange(e)} type="password" id="form3Example4cg" className="form-control form-control-lg" />
                        <label className="form-label" htmlFor="form3Example4cg">Password</label>
                      </div>
                      <div className="form-outline mb-3">
                        <input  name='cpassword' onChange={(e)=>OninputChange(e)} type="password" id="form3Example4cdg" className="form-control form-control-lg" />
                        <label className="form-label" htmlFor="form3Example4cdg">Confirm Password</label>
                      </div>
                      
                      <div className="form-check d-flex justify-content-center mb-5">
                        <input className="form-check-input me-2" type="checkbox" defaultValue id="form2Example3cg" />
                        <label className="form-check-label" htmlFor="form2Example3g">
                          I agree all statements in <a href="#!" className="text-body"><u>Terms of service</u></a>
                        </label>
                      </div>
                      <div className="d-flex justify-content-center">
                        <button type="submit" onClick={(e)=>onSubmit(e)} className="btn btn-success btn-block btn-lg gradient-custom-4 text-body">Register</button>
                      </div>
                      <p className="text-center text-muted mt-5 mb-0">Have already an account? <Link to='/login' className="fw-bold text-body"><u>Login here</u></Link></p>
                    {/* </form> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ToastContainer />

    </>
  )
}

export default Register
