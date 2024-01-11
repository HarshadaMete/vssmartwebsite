import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Master from './Website/MainComponent/Master';
import Index from './Website/MainComponent/Pages/Index';
import Shop from './Website/MainComponent/Pages/Shop';
import Subcategory from './Website/MainComponent/Pages/Subcategory';
import Register from './Website/MainComponent/Authentication/Register';
import Login from './Website/MainComponent/Authentication/Login';
import About from './Website/MainComponent/Pages/About';
import Subbrand from './Website/MainComponent/Pages/Subbrand';
import Cart from './Website/MainComponent/Pages/Cart';
import Wishlist from './Website/MainComponent/Pages/Wishlist';
import Showmore1 from './Website/MainComponent/Pages/Showmore1';
import Showmore2 from './Website/MainComponent/Pages/Showmore2';
import Brandshow from './Website/MainComponent/Pages/Brandshow';
import Search from './Website/MainComponent/Pages/Search';
import Checkout from './Website/MainComponent/Pages/Checkout';
import Myorder from './Website/MainComponent/Pages/Myorder';
import BankDetail from './Website/MainComponent/Pages/BankDetail';
import Download from './Website/MainComponent/Pages/Download';
import Blog from './Website/MainComponent/Pages/Blog';


function App() {
  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Master Comp={Index}></Master>}></Route>
      <Route path='/shop' element={<Master Comp={Shop}></Master>}></Route>
      <Route path='/about' element={<Master Comp={About}></Master>}></Route>
      <Route path='/product-shop/:cat_id/:sub_id' element={<Master Comp={Subcategory}></Master>}></Route>
      <Route path='/product-shop/:brand_id' element={<Master Comp={Subbrand}></Master>}></Route>
      <Route path='/register' element={<Master Comp={Register}></Master>}></Route>
      <Route path='/login' element={<Master Comp={Login}></Master>}></Route>
      <Route path='/cart' element={<Master Comp={Cart}></Master>}></Route>
      <Route path='/wishlist' element={<Master Comp={Wishlist}></Master>}></Route>
      <Route path='/showmore1' element={<Master Comp={Showmore1}></Master>}></Route>
      <Route path='/showmore2' element={<Master Comp={Showmore2}></Master>}></Route>
      <Route path='/brandshow' element={<Master Comp={Brandshow}></Master>}></Route>
      <Route path='/search' element={<Master Comp={Search}></Master>}></Route>
      <Route path='/checkout' element={<Master Comp={Checkout}></Master>}></Route>
      <Route path='/myorder' element={<Master Comp={Myorder}></Master>}></Route>
      <Route path='/bank' element={<Master Comp={BankDetail}></Master>}></Route>
      <Route path='/download' element={<Master Comp={Download}></Master>}></Route>
      <Route path='/blog' element={<Master Comp={Blog}></Master>}></Route>
     </Routes>
     </BrowserRouter>
    </>
  );
}

export default App;
