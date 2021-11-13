import "./App.css";
import Home from "./components/Pages/Home/Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import AuthProvider from "./Context/AuthProvider";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Shared/Navbar/Navbar";
import PrivetRoute from "./components/Shared/Login/PrivateRoute/PrivateRoute";
import About from "./components/Pages/About/About";
import Footer from "./components/Shared/Footer/Footer";
import Vehicles from "./components/Pages/Vehicles/Vehicles";
import VehicleDetail from "./components/Pages/VehicleDetail/VehicleDetail";
import Login from "./components/Shared/Login/Login";
import Register from "./components/Shared/Login/register";
import Order from "./components/Pages/Order/Order";
import NotFound from "./components/Shared/NotFound/NotFound";
import Reviews from "./components/Pages/Reviews/Reviews";
import Contact from "./components/Pages/Contact/Contact";
import Dashboard from "./components/Admin/dashboard/Dashboard";
import Pay from "./components/user/Pay/Pay";
import MyOrders from "./components/user/MyOrders/MyOrders";
import AddReview from "./components/user/AddReview/AddReview";
import AdminRoute from "./components/Shared/Login/AdminRoute/AdminRoute";
import AddProduct from "./components/Admin/AddProduct/AddProduct";
import AllOrders from "./components/Admin/AllOrders/AllOrders";
import MakeAdmin from "./components/Admin/MakeAdmin/MakeAdmin";
import ManageProducts from "./components/Admin/ManageProducts/ManageProducts";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar></Navbar>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/register">
            <Register></Register>
          </Route>
          <Route path="/vehicles">
            <Vehicles></Vehicles>
          </Route>
          <Route path="/dashboard">
            <Dashboard></Dashboard>
          </Route>
          <Route path="/reviews">
            <Reviews></Reviews>
          </Route>
          <Route path="/contact">
            <Contact></Contact>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/vehicle/:vehicleId">
            <VehicleDetail></VehicleDetail>
          </Route>
          <PrivetRoute path="/pay">
            <Pay></Pay>
          </PrivetRoute>
          <PrivetRoute path="/myorders">
            <MyOrders></MyOrders>
          </PrivetRoute>
          <PrivetRoute path="/addreview">
            <AddReview></AddReview>
          </PrivetRoute>
          <PrivetRoute path="/order/:vehicleId">
            <Order></Order>
          </PrivetRoute>
          <AdminRoute path="/addproduct">
            <AddProduct></AddProduct>
          </AdminRoute>
          <AdminRoute path="/allorders">
            <AllOrders></AllOrders>
          </AdminRoute>
          <AdminRoute path="/makeadmin">
            <MakeAdmin></MakeAdmin>
          </AdminRoute>
          <AdminRoute path="/manageproducts">
            <ManageProducts></ManageProducts>
          </AdminRoute>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </AuthProvider>
  );
}

export default App;
