import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Authuser from './Authuser';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {

const notify=(M)=>toast.error(M);


  const {http,setToken,setuser,token}=Authuser();
  const[btnDisable,setDisebale]=useState(0);
  const [Login,setLogin]=useState(
    {
      email:'',
      password:'',
    }
  );
  // console.log(Login);


  const navigate = useNavigate();
  useEffect(()=>{
    if(token!=null){
      navigate("/");
    }
    // else{
    //   navigate("/login");
    // }
    window.scrollTo({
      top:0,
      behavior:"smooth",
    },[navigate,token]);
  });
  const Onlogin=(e)=>{
    e.preventDefault();
  http.post(`/user/login`,Login).then((res)=>{
    console.log(res.data.user_data);

    if(res.data.token){
      setToken(res.data.user_data,res.data.token);
      navigate("/");
    }
    else{
      notify(res.data.message);
    }
    setDisebale(0);
  })
  .catch((error)=>{
  //  notify("The provided credentials are invlid");
    setDisebale(0);
  });
  e.preventDefault();
  toast.success("Login Successful!")
}
 
  const OninputChange=(e)=>{
    setLogin({...Login,[e.target.name]:e.target.value});
  }
  // const onSubmit=(e)=>{
  //   http.post('/user/login',Login)
  //   .then((res)=>{
  //     console.log(res.data)
  //      setDisebale(0)
  //   })
  //   .catch((error)=>{
  //     setDisebale(0);
  //   });
  //   e.preventDefault();
  // }


  return (
    <>
      <section className="vh-100 bg-success" style={{ backgroundColor: 'text-black' }}>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div className="card shadow-2-strong" style={{ borderRadius: '1rem' }}>
                <div className="card-body p-5 text-center">
                  <h3 className="mb-5" style={{fontWeight:"bold"}}>Sign Up</h3>
                  <div className="form-outline mb-4">
                    <input type="email" name='email' onChange={(e)=>OninputChange(e)}  id="typeEmailX-2" className="form-control form-control-lg" placeholder='Email' />
                    {/* <label className="form-label" htmlFor="typeEmailX-2">Email</label> */}
                  </div>
                  <div className="form-outline mb-4">
                    <input type="password"  name='password' onChange={(e)=>OninputChange(e)} id="typePasswordX-2" className="form-control form-control-lg" placeholder='password'/>
                    {/* <label className="form-label" htmlFor="typePasswordX-2">Password</label> */}
                  </div>
                  <div className="form-check d-flex justify-content-start mb-4">
                    <input className="form-check-input" type="checkbox" defaultValue id="form1Example3" />
                    <label className="form-check-label" htmlFor="form1Example3"> Remember password </label>
                  </div>
                  <button  onClick={(e)=>Onlogin(e)} className="btn btn-primary btn-lg btn-block" type="submit">Login</button>
                  <hr className="my-4" />
                  <p className='text-dark'>Don't Have Any Account?<Link to='/register' className='text-success' style={{textDecoration:'none',fontWeight:'bold'}}>Register Here</Link></p>
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

export default Login
