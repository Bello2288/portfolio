import './Header.css';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';


function Header() {  

  // const handleSelect = (eventKey) => alert(`selected ${eventKey}`);

    return (  
      // <header>
      //   <p>This is the Header</p>            
      // </header>
      <Nav variant="pills" defaultActiveKey="/" >
        <Nav.Item>
          <Nav.Link eventKey="/" href="/">
            Home
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="/about_me" href="/about_me" title="Item">
            About Me
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="/my_projects" href="/my_projects">
            My Projects
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="/contact_info" href="/contact_info">
            Contact Me
          </Nav.Link>
        </Nav.Item>
      </Nav>
    );
  }
  
  export default Header;


