import './Header.css';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';


function Header() {  

  // const handleSelect = (eventKey) => alert(`selected ${eventKey}`);

    return (  
      <header className='header'>        
        <Nav  activeKey="/" >
          <Nav.Item>
            <Nav.Link href="/" className='nav_link'>
              Home
            </Nav.Link> 
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/about_me" className='nav_link'>
              About Me
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/my_projects" className='nav_link'>
              My Projects
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="4" href="/contact_info" className='nav_link'>
              Contact Me
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </header>
    );
  }
  
  export default Header;


