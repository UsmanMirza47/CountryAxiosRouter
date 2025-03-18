import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home.jsx";
import About from "./Pages/About.jsx";
import Country from "./Pages/Country.jsx";
import Contact from "./Pages/Contact.jsx";
import "./App.css";
import AppLayout from "./Components/Layout/AppLayout.jsx";
import ErrorPage from "./Pages/ErrorPage.jsx";
import CountryDetails from "./Components/Layout/CountryDetails.jsx";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/country",
          element: <Country />,
        },
        {
          path: "/country/:id",
          element: <CountryDetails />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
