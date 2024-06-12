import logo from "./logo.svg";
import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./component/Home";
import ProductDetail from "./component/ProductsDetail";
import Login from "./component/Login";
import SignUp from "./component/SingUp";
import WalkThrough from "./component/WalkThrough";
import Brand from "./component/Brand";
import BrandDetail from "./component/BrandDetail";
import NotificationDetail from "./component/NotificationDetail";
import Invoice from "./component/Invoice";
import ShopBag from "./component/ShopBag";
import InboxDetailMobile from "./component/InboxDetailMobile";
import Order from "./component/Order";
import PrivateRoute from "./route/PrivateRoute";
import BrandFilter from "./component/BrandFilter";
import ChangePass from "./component/ChangePassword";
import ForgotPassword from "./component/ForgotPassword";
import Profile from "./component/Profile";
import InvoiceList from "./component/InvoiceList";
import OrderList from "./component/OrderList";

function App() {
  return (
    <div className=" bg-[#fff]">
      <Router>
        <Routes>
          <Route element={<PrivateRoute />}>
            <Route path="/" element={<Home />}></Route>
            <Route path="/detail/:id" element={<ProductDetail />} />

            <Route path="/walkthrough" element={<WalkThrough />} />
            <Route path="/brands" element={<Brand />} />
            <Route path="/brands/:name/:img" element={<BrandDetail />} />
            <Route path="/notification" element={<NotificationDetail />} />
            <Route path="/invoice/:id" element={<Invoice />} />
            <Route path="/shopBag" element={<ShopBag />} />
            <Route path="/brandFilter" element={<BrandFilter />} />
            <Route
              path="/notification/mobile/:id"
              element={<InboxDetailMobile />}
            />
            <Route path="/order" element={<Order></Order>} />
            <Route
              path="/forgot-password/token/:token"
              element={<ChangePass />}
            />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/invoiceList" element={<InvoiceList />} />
            <Route path="/orderList" element={<OrderList />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
