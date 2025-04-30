import { Outlet, useLocation } from "react-router-dom"
import {Footer} from "../components/Footer"
import { Navibar } from "../components/Navibar"
import Login from "../pages/Login"
import Register from "../pages/Register"



export const RootLayout = () => {

    const location=useLocation();

  return (
    <>
    {/* {location.pathname="/login" && <Login/>  } */}
    {/* {location.pathname="/register" && <Register/>  } */}

    <Navibar/>
    <Outlet/>
    <Footer/>
    </>
  )
}

