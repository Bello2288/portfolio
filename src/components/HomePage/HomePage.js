import './HomePage.css';
import Nav from "react-bootstrap/Nav";
import ReactCurvedText from 'react-curved-text'




function HomePage() { 
  return (
    <main className="footer-container">
      {/* <ReactCurvedText
      className="name-tags"
      width={370}
      height={300}
      cx={190}
      cy={120}
      rx={100}
      ry={100}
      startOffset={100}
      reversed={true}
      textProps={{ style: { fontSize: '45' }}}
      text="Gregg Bellofatto"
    /> */}



      <div className="name-tag">Gregg Bellofatto</div>
      <div className="homemade-apple">Gregg Bellofatto</div>
      <div className="kaushan-script">Gregg Bellofatto</div>
      <div className="lobster">Gregg Bellofatto</div>
      <div className="nothing-you-can-do">Gregg Bellofatto</div>
      <div className="playball">Gregg Bellofatto</div>
      <div className="rubik-80s-fade">Gregg Bellofatto</div>
      <div className="black-ops-one">Gregg Bellofatto</div>
      <div className="bree-serif">Gregg Bellofatto</div>
      <div className="cabin-sketch">Gregg Bellofatto</div>
      <div className="caveat">Gregg Bellofatto</div>
      <div className="">Gregg Bellofatto</div>
      <Nav.Link className='aboutme-link' href="/about_me">About Me</Nav.Link>
      <Nav.Link className='projects-link' href="/my_projects">My Projects</Nav.Link>
      <Nav.Link className='contact-link' href='/contact_info'>Contact Info</Nav.Link>
    </main>
  );
}

export default HomePage;