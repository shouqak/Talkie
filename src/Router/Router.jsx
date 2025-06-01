import { createBrowserRouter, Outlet, RouterProvider } from "react-router"
import Home from "../Pages/Home"
import Aboutus from "../Pages/Aboutus"


function Layout() {
  return (
    <>

      <Outlet />
    </>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [{ path: "/", element: <Home/> },
{ path: "/aboutus", element: <Aboutus/> },
    ],
  },
])

function Router() {
  return <RouterProvider router={router} />
}

export default Router