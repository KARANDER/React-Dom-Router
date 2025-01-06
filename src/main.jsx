/* eslint-disable no-unused-vars */
import { createRoot } from "react-dom/client";
import "./index.css";
import Header from "./assets/components/Header/Header.jsx";
import Footer from "./assets/components/Footer/Footer.jsx";
import Home from "./assets/components/Home/Home.jsx";
import About from "./assets/components/about/About.jsx";
import Contact from "./assets/components/Contactus/Contactus.jsx";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router";
import Layout from "./Layout.jsx";
import User from "./assets/components/User/User.jsx";
import Github ,{githubinfoLoader} from "./assets/components/github/github.jsx";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     children: [
//       {
//         path: "",
//         element: <Home />,
//       },
//       {
//         path: "about",
//         element: <About />,
//       },
//       {
//         path: "contact",
//         element: <Contact />,
//       },
//     ],
//   },
// ]);

const router = createBrowserRouter(
  createRoutesFromElements(
      <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="user/:id" element={<User />} />
      <Route loader={githubinfoLoader} path="github" element={<Github/>}/>
      </Route>
  )
);
createRoot(document.getElementById("root")).render(
  <>
    <RouterProvider router={router} />
  </>
);
