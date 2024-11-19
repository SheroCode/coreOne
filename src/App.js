import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import CustomNavbar from "./components/CustomNavbar";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CategoryPage from "./pages/CategoryPage";
import CartPage from "./pages/CartPage";
import Checkout from "./pages/Checkout";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import UserProfile from "./pages/UserProfile";
import Footer from "./components/Footer";
import AuthProvider from "./utilities";
import { ToastContainer } from "react-toastify";
import ProductDetails from "./pages/ProductDetails";
import { CartProvider } from "./context/CartContext";
import { useEffect, useState } from "react";
import Loading from "./pages/Loading";
import SupportPage from "./pages/SupportPage";
import AboutUsPage from "./pages/AboutUsPage";

function App() {
  const [loading, setLoading] = useState(true);

  // Display the initial loading for 3 secs
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  if (loading) {
    return <Loading />;
  }
  return (
    <BrowserRouter>
      <CartProvider>
        <AuthProvider>
          <CustomNavbar />
          <Routes>
            <Route path="/category/:id" element={<CategoryPage />} />
            <Route path="/details/:id" element={<ProductDetails />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/profile" element={<UserProfile />} />
            <Route path="/about" element={<AboutUsPage />} />
            <Route path="/support" element={<SupportPage />} />
            <Route path="/" element={<Home />} />
          </Routes>
          <ToastContainer />
          <Footer />
        </AuthProvider>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
