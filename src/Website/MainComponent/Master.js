import React from 'react'
import Header from './Pages/Header'
import Footer from './Pages/Footer'

const Master = (props) => {
  return (
    <>
    <Header></Header>

    <props.Comp></props.Comp>
    <Footer></Footer>
    
    </>
  )
}

export default Master
