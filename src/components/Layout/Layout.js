import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";


function Layout() {
    return (
      <>
        <Header className="header" />
        <Outlet />
        <Footer className="footer"/>
      </>
    ); 
  }
  
  export default Layout;