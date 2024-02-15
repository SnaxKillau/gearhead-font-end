import logo from './logo.svg';
import './App.css';


import { BrowserRouter as Router , Routes, Route } from "react-router-dom";


import Home from './component/Home';
import ProductDetail from './component/ProductsDetail';
import Login from './component/Login';
import SignUp from './component/SingUp';
import WalkThrough from './component/WalkThrough';
import FirstPage from './component/FirstPage';
import Brand from './component/Brand';
import BrandDetail from './component/BrandDetail';



function App() {
  return (
    <div className=' bg-[#fff]'>

          <Router>
            <Routes>
               <Route path="/" element = {<Home/>}/>
               <Route path="/detail" element = {<ProductDetail/>}/>
               <Route path='/login' element={<Login/>}/>
               <Route path='/signup' element={<SignUp/>}/>
               <Route path='/walkthrough' element={<WalkThrough/>}/>
               <Route path='/brands' element = {<Brand/>}/>
               <Route path='/brands/:name' element = {<BrandDetail/>}/>
            </Routes>
          </Router>
    

    </div>
  );
}

export default App;
