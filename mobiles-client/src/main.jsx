import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Mobiles from "./Components/Mobiles.jsx";
import Mobile from "./Components/Mobile.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/mobiles",
        element: <Mobiles />,
        loader: () => fetch("http://localhost:5000/mobiles"),
      },
      {
        path: "/mobile/:mobileId",
        element: <Mobile />,
        loader: ({params}) => fetch(`http://localhost:5000/mobiles/${params.mobileId}`),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
