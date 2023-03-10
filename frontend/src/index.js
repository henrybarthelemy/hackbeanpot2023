import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import App from "./App";
import NewCard from "./NewCard";
import SeeSets from "./SeeSet";
import Review from "./Review";
import Login from "./Login";
import Signup from "./Signup";
import NavBar from "./NavBar";
import NewSet from "./NewSet";
import Search from "./SearchSets"
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/search/",
    element: <Search />
  },
  {
    path: "/newcard/:id",
    element: <NewCard />,
  },
  { //TODO: delete this when finished with post for a newcard
    path: "/newcard/",
    element: <NewCard />,
  },
  {
    path: "/newset/",
    element: <NewSet />,
  },
  {
    path: "/sets/",
    element: <SeeSets />,
  },
  {
    path: "/review/:id",
    element: <Review />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ChakraProvider>
      <NavBar />
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
