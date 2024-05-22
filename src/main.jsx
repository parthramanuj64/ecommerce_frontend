import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import store from "./store/store.js";
import { Provider } from "react-redux";
import HomePage from "./pages/HomePage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import RegisterPage from "./pages/RegisterPage.jsx";
import ProductPage from "./pages/ProductPage.jsx";
import AuthLayout from "./components/AuthLayout.jsx";
import CustomerPage from "./pages/CustomerPage.jsx";
import TransactionPage from "./pages/TransactionPage.jsx";
import DashBoardPage from "./pages/DashBoardPage.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: (
          <AuthLayout>
            <HomePage />
          </AuthLayout>
        ),
        children: [
          {
            path: "/",
            element: <DashBoardPage />,
          },
          {
            path: "product",
            element: <ProductPage />,
          },
          {
            path: "customers",
            element: <CustomerPage />,
          },
          {
            path: "transactions",
            element: <TransactionPage />,
          },
          {
            path: "payment",
            element: <ProductPage />,
          },
        ],
      },
      {
        path: "/register",
        element: <RegisterPage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
