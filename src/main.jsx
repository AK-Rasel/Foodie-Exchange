import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import routerPath from "./Router/routerPath.jsx";
import { HelmetProvider } from "react-helmet-async";
import AuthProvider from "./Provider/AuthProvider.jsx";
import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Toaster position="left" reverseOrder={false} />
    <AuthProvider>
      <HelmetProvider>
        <RouterProvider router={routerPath}></RouterProvider>
      </HelmetProvider>
    </AuthProvider>
  </React.StrictMode>
);
