
import {BrowserRouter, Route, Routes} from "react-router-dom"
import './App.css'
import UserLayout from './components/Layout/UserLayout'
import Home from './Pages/Home'
import { Toaster } from 'sonner'
import Login from "./Pages/Login"
import Register from "./Pages/Register"
import Profile from "./Pages/Profile"
import CollectionPage from "./Pages/collectionPage"
import ProductDetails from "./components/Products/ProductDetails"
import CheckOut from "./components/Cart/CheckOut"
import OrderConfirmationPage from "./Pages/OrderConfirmationPage"
import OrderDetailsPage from "./Pages/OrderDetailsPage"
import MyOrdersPage from "./Pages/MyOrdersPage"
import AdminLayout from "./components/Admin/AdminLayout"
import AdminHomePage from "./Pages/AdminHomePage"
import UserManagement from "./components/Admin/UserManagement"
import ProductManagement from "./components/Admin/ProductManagement"
import EditProductPage from "./components/Admin/EditProductPage"
import OrderManagement from "./components/Admin/OrderManagement"
function App() {

  return (
    <BrowserRouter>
    <Toaster postition="top-right"  />
      <Routes>
        <Route path='/' element={<UserLayout/>}> 
          <Route index element={<Home/>}/>
          <Route path="login" element={<Login/>}/>
          <Route path="register" element={<Register/>}/>
          <Route path="profile" element={<Profile/>}/>
          <Route path="collections/:collection" element={<CollectionPage/>}/>
          <Route path="product/:id" element={<ProductDetails/>}/>
          <Route path="checkout" element={<CheckOut/>}/>
          <Route path="order-confirmation" element={<OrderConfirmationPage/>}/>
          <Route path="order/:id" element={<OrderDetailsPage/>}/>
          <Route path="my-orders" element={<MyOrdersPage/>}/>
        </Route>
        {/*Admin Layout */}
        <Route path="/admin" element={<AdminLayout/>}> 
          <Route  index element={<AdminHomePage/>}/>
          <Route path="users" element={<UserManagement/>}/>
          <Route path="products" element ={<ProductManagement/>}/>
          <Route path="products/:id/edit" element={<EditProductPage/>}/>
          <Route path="orders" element={<OrderManagement/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
