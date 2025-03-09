import { Outlet } from "react-router-dom";
import Nav from "../ui/Nav/Nav";
import Footer from "../ui/Footer/Footer";

export default function Index() {
  return (
    <>
      <Nav /> 
      <Outlet />
      <Footer />
    </>
  )
}
