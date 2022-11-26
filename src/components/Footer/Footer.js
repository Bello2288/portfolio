import './Footer.css';
import { AiOutlineCopyrightCircle } from "react-icons/ai";



function Footer() { 
  return (
    <footer className="footer-container">
      <div className="name-tag">Gregg's Portfolio</div>
      <div className="copyright">
        <AiOutlineCopyrightCircle /> Production by Gregg Bellofatto
      </div>
    </footer>
  );
}

export default Footer;