import './Layout.css'
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";


function Layout() {
    return (
      <>
        <main id="page-container">
          <div id="container-wrap">
            <Header className="header" />
            <Outlet />
          </div>
          <Footer id="footer"/>
        </main>
      </>
    ); 
  }
  
  export default Layout;