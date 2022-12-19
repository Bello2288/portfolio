import './HomePage.css';
import Nav from "react-bootstrap/Nav";
import ReactCurvedText from 'react-curved-text'
import NameTitle from '../Title/Title'
import homepage_pic from '../../images/homepage_pic.jpeg';
import { AiOutlineMail } from 'react-icons/ai';
import { BsGithub } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs'





function HomePage() { 
  return (
    <main className="footer-container">
      {/* <div className="name-tag">Gregg Bellofatto</div>
      <div className="homemade-apple">Gregg Bellofatto</div>
      <div className="kaushan-script">Gregg Bellofatto</div>
      <div className="lobster">Gregg Bellofatto</div>
      <div className="nothing-you-can-do">Gregg Bellofatto</div>
      <div className="playball">Gregg Bellofatto</div> */}
      <section className='name-pic_box'>
        <div className='name_role_box'>
          <h2 className="rubik-80s-fade">Gregg Bellofatto</h2>
          <p className='role'>Software Developer</p>
        </div>
        <div className='background_box'>
          <div className='black_background'></div>
          <img className='homepage_pic' src={homepage_pic} alt="homepage pic" />
          <div className='social_icons'>
            <a className='linkedin' href='https://www.linkedin.com/in/gregg-bellofatto-06349810a/' target='_blank'><BsLinkedin /></a>
            <a className='github' href='https://github.com/Bello2288' target='_blank'><BsGithub /></a>
            <a className='email' href='mailto:bellofattogregg@gmail.com'><AiOutlineMail /></a>
          </div>
        </div>
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