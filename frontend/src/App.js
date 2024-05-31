import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Categories from "./components/Categories";
import CategoryProducts from "./components/CategoryProducts";
import AllProducts from "./components/AllProducts";
import ProductDetail from "./components/ProductDetail";
import Checkout from "./components/Checkout";
import Register from "./components/customer/Register";
import Login from "./components/customer/Login";
import Dashboard from "./components/customer/Dashboard";
import Orders from "./components/customer/Orders";
import OrderSuccess from "./components/OrderSuccess";
import OrderFailed from "./components/OrderFailed";
import Wishlist from "./components/customer/Wishlist";
import Profile from "./components/customer/Profile";
import ChangePassword from "./components/customer/ChangePassword";
import AddressList from "./components/customer/AddressList";
import AddAddress from "./components/customer/AddAddress";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import SellerRegister from "./components/seller/SellerRegister";
import SellerLogin from "./components/seller/SellerLogin";
import SellerDashboard from "./components/seller/SellerDashboard";
import SellerProduct from "./components/seller/SellerProduct";
import SellerAddProduct from "./components/seller/SellerAddProduct";
import SellerOrders from "./components/seller/SellerOrders";
import Customer from "./components/seller/Customer";
import Reports from "./components/seller/Reports";
import SellerProfile from "./components/seller/SellerProfile";
import SellerChangePassword from "./components/seller/SellerChangePassword";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
        <Route
          path="/category/:category_slug/:category_id"
          element={<CategoryProducts />}
        />
        <Route path="/products" element={<AllProducts />} />
        <Route
          path="/product/:product_slug/:product_id"
          element={<ProductDetail />}
        />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/order/success" element={<OrderSuccess />} />
        <Route path="/order/failed" element={<OrderFailed />} />
        <Route path="/customer">
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="orders" element={<Orders />} />
          <Route path="wishlist" element={<Wishlist />} />
          <Route path="profile" element={<Profile />} />
          <Route path="change-password" element={<ChangePassword />} />
          <Route path="address" element={<AddressList />} />
          <Route path="addaddress" element={<AddAddress />} />
        </Route>
        <Route path="/seller">
          <Route path="register" element={<SellerRegister />} />
          <Route path="login" element={<SellerLogin />} />
          <Route path="dashboard" element={<SellerDashboard />} />
          <Route path="products" element={<SellerProduct />} />
          <Route path="addproduct" element={<SellerAddProduct />} />
          <Route path="orders" element={<SellerOrders />} />
          <Route path="customers" element={<Customer />} />
          <Route path="reports" element={<Reports />} />
          <Route path="profile" element={<SellerProfile />} />
          <Route path="change-password" element={<SellerChangePassword />} />
        </Route>

      </Routes>
      <Footer />
    </>
  );
}

export default App;
