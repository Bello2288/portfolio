import './HomePage.css';
import Nav from "react-bootstrap/Nav";
import ReactCurvedText from 'react-curved-text'
import NameTitle from '../Title/Title'




function HomePage() { 
  return (
    <main className="footer-container">
      {/* <div className="name-tag">Gregg Bellofatto</div>
      <div className="homemade-apple">Gregg Bellofatto</div>
      <div className="kaushan-script">Gregg Bellofatto</div>
      <div className="lobster">Gregg Bellofatto</div>
      <div className="nothing-you-can-do">Gregg Bellofatto</div>
      <div className="playball">Gregg Bellofatto</div> */}
      <section>
        <div className="rubik-80s-fade">Gregg Bellofatto</div>
        <img src="" alt="homepage pic" />
      </section>
      
      {/* <div className="black-ops-one">Gregg Bellofatto</div>
      <div className="bree-serif">Gregg Bellofatto</div>
      <div className="cabin-sketch">Gregg Bellofatto</div>
      <div className="caveat">Gregg Bellofatto</div> */}
{/*       
      <Nav.Link className='aboutme-link' href="/about_me">About Me</Nav.Link>
      <Nav.Link className='projects-link' href="/my_projects">My Projects</Nav.Link>
      <Nav.Link className='contact-link' href='/contact_info'>Contact Info</Nav.Link> */}
      <div className='quote-box'>
        <h2 className='quote'>Don't count the days. Make the days count.</h2>
        <p className='author'> -Muhammad Ali</p>
      </div>
    </main>
  );
}

export default HomePage;