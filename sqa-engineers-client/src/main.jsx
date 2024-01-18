import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppLayout from "./Components/AppLayout";
import Engineers from "./Components/Engineers";
import Details from "./Components/Details";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/engineers",
        element: <Engineers />,
        loader: () => fetch("http://localhost:5000/engineers"),
      },
      {
        path: "/engineer/:id",
        element: <Details />,
        loader: ({params}) => fetch(`http://localhost:5000/engineers/${params.id}`),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
