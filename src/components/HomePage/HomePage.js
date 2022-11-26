import './HomePage.css';
import Nav from "react-bootstrap/Nav";




function HomePage() { 
  return (
    <main className="footer-container">
      <div className="name-tag">Gregg's Portfolio - Home Page</div>
      <Nav.Link className="aboutme-link" href="/about_me">About Me</Nav.Link>
    </main>
  );
}

export default HomePage;