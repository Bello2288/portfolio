import './HomePage.css';
import Nav from "react-bootstrap/Nav";
import ReactCurvedText from 'react-curved-text'




function HomePage() { 
  return (
    <main className="footer-container">
      <ReactCurvedText
      className="name-tag"
      width={370}
      height={300}
      cx={190}
      cy={120}
      rx={100}
      ry={100}
      startOffset={100}
      reversed={true}
      text="Gregg Bellofatto"
    />
      <div className="name-tag">Gregg Bellofatto</div>
      <Nav.Link className='aboutme-link' href="/about_me">About Me</Nav.Link>
      <Nav.Link className='projects-link' href="/my_projects">My Projects</Nav.Link>
      <Nav.Link className='contact-link' href='/contact_info'>Contact Info</Nav.Link>
    </main>
  );
}

export default HomePage;