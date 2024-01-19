import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/Home.jsx";
import Employees from "./Components/Employees.jsx";
import UpdateEmployee from "./Components/UpdateEmployee.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/employees",
        element: <Employees />,
        loader: () => fetch("http://localhost:5000/employees"),
      },
      {
        path: "/update-employee/:id",
        element: <UpdateEmployee />,
        loader: ({params}) => fetch(`http://localhost:5000/employees/${params.id}`),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
