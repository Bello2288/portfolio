import './HomePage.css';
import Nav from "react-bootstrap/Nav";




function HomePage() { 
  return (
    <main className="footer-container">
      <div className="name-tag">Gregg's Portfolio - Home Page</div>
      <Nav.Link className='aboutme-link' href="/about_me">About Me</Nav.Link>
      <Nav.Link className='projects-link' href="/my_projects">My Projects</Nav.Link>
      <Nav.Link className='contact-link' href='/contact_info'>Contact Info</Nav.Link>
    </main>
  );
}

export default HomePage;