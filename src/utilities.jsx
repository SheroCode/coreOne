import { createContext, useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useCart } from "./context/CartContext";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const { cartItems, setCartItems } = useCart();

  const [users, setUsers] = useState(
    JSON.parse(localStorage.getItem("users")) || []
  );
  const [valid, setValid] = useState(true);
  const [validEmail, setValidEmail] = useState(true);
  const [validPassword, setValidPassword] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [isHidden, setIsHidden] = useState(true);

  function revealPassword() {
    setIsHidden(!isHidden);
  }

  const navigate = useNavigate();

  useEffect(() => {
    const localCurrentUser = JSON.parse(localStorage.getItem("currentUser"));
    if (localCurrentUser) {
      setCurrentUser(localCurrentUser);
      setIsLoggedIn(true);

      const localUsers = JSON.parse(localStorage.getItem("users")) || [];
      const user = localUsers.find((user) => user.id === localCurrentUser.id);
      if (user) {
        setCartItems(user.cart || []);
      }
    }
  }, []);

  // Sync cart changes to the current user's profile in localStorage
  useEffect(() => {
    if (currentUser) {
      const existingUser = users.find((user) => user.id === currentUser.id);

      // Only update if the cart has actually changed
      if (
        existingUser &&
        JSON.stringify(existingUser.cart) !== JSON.stringify(cartItems)
      ) {
        const updatedUsers = users.map((user) =>
          user.id === currentUser.id ? { ...user, cart: cartItems } : user
        );
        setUsers(updatedUsers);
        localStorage.setItem("users", JSON.stringify(updatedUsers));
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
      }
    }
  }, [cartItems, currentUser, users]);

  function signup(userName, email, password, phoneNumber) {
    const newUser = {
      id: uuidv4(),
      userName,
      phoneNumber,
      email,
      password,
      cart: [],
    };

    setUsers((prev) => {
      // Validate inputs
      if (!userName || !email || !password || !phoneNumber) {
        setValid(false);
        return prev;
      }
      setValid(true);

      // Validate email format
      if (!validateEmail(email)) {
        setValidEmail(false);
        return prev;
      }
      setValidEmail(true);

      // Validate password length
      if (password.length < 6) {
        setValidPassword(false);
        return prev;
      }
      setValidPassword(true);

      // Check for existing user
      const localUsers = JSON.parse(localStorage.getItem("users")) || [];
      const existingUser = localUsers.find((user) => user.email === email);
      if (existingUser) {
        toast.error("Email already exists", {
          position: "top-center",
          pauseOnHover: false,
        });
        return prev;
      }

      // Add new user and auto login
      const updatedUsers = [...prev, newUser];
      localStorage.setItem("users", JSON.stringify(updatedUsers));
      login(email, password);
      return updatedUsers;
    });
  }

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  function login(email, password) {
    if (!email || !password) {
      setValid(false);
      return;
    }
    setValid(true);
    const localUsers = JSON.parse(localStorage.getItem("users")) || [];
    if (localUsers.length > 0) {
      const currentUser = localUsers.find(
        (user) => user.email === email && user.password === password
      );

      if (currentUser) {
        setCurrentUser(currentUser);
        setIsLoggedIn(true);

        setCartItems(currentUser.cart || []);

        localStorage.setItem("currentUser", JSON.stringify(currentUser));

        navigate("/");
        toast.success(`Welcome ${currentUser.userName}`, {
          position: "top-center",
          theme: "dark",
          hideProgressBar: true,
          pauseOnHover: false,
          autoClose: 4000,
        });
      } else {
        toast.error("Incorrect email or password", {
          position: "top-center",
          pauseOnHover: false,
        });
      }
    } else {
      toast.warn("User with this email is not found. Please sign up first.", {
        position: "top-center",
      });
    }
  }

  function logout() {
    // Save the cart items for the current user before logging out
    const updatedUsers = users.map((user) =>
      user.id === currentUser.id ? { ...user, cart: cartItems } : user
    );
    localStorage.setItem("users", JSON.stringify(updatedUsers));

    setCurrentUser(null);
    setIsLoggedIn(false);
    setCartItems([]);
    localStorage.removeItem("currentUser");
    localStorage.removeItem("cartItems");

    toast.success("You have successfully logged out", {
      position: "top-center",
      theme: "dark",
      hideProgressBar: true,
      pauseOnHover: false,
      autoClose: 3000,
    });
  }

  return (
    <AuthContext.Provider
      value={{
        users,
        valid,
        validEmail,
        validPassword,
        isLoggedIn,
        currentUser,
        isHidden,
        setCurrentUser,
        setUsers,
        signup,
        login,
        logout,
        revealPassword,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
