import { createBrowserRouter, createRoutesFromElements,Route, RouterProvider } from "react-router-dom";

import { RootLayout } from "./Layout/RootLayout";
import Home from "./components/Home";
import { BuildResume } from "./components/BuildResume";
import "./App.css";
import { Template } from "./components/Template";
import Login from "./pages/Login";
import Register from "./pages/Register";

import { Page404 } from "./components/Page404";

import "./responsive.css"

function App() {

  const router=createBrowserRouter(createRoutesFromElements(
    <>
    <Route path="/" element={<RootLayout/>}>
      <Route index element={<Home/>} />
      <Route path="builresume" element={<BuildResume/>} />
      <Route path="template" element={<Template/>}/>
      {/* <Route path="login" element={<Login/>}/>
      <Route path="register" element={<Register/>}/> */}
      <Route path="*" element={<Page404/>}/>
    </Route>
    <Route path="/login" element={<Login/>} />
    <Route path="/register" element={<Register/>} />
    </>
  ));
   
  // ));
  return <RouterProvider router={router} />;
}

export default App;
