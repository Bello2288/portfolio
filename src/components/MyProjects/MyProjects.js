import './MyProjects.css';
import Button from 'react-bootstrap/Button';
import {useNavigate} from "react-router-dom";



function MyProjects() { 
    
    const navigate = useNavigate();

    return (  
      <main>
        <p>This is the My Projects Page</p>
        <section className='project-list'>
          <a href="https://github.com/Bello2288">Visit my GitHub Page</a>
          <a href="https://on-deck-bello2288.herokuapp.com/">On Deck</a>
          <a href="https://bello2288.github.io/django_newspaper_app/">Django News Paper App</a>
          <a href="https://bello2288.github.io/Pixle-Perfect/">Pixel Perfect</a>
        </section>
        <Button 
            className='back-btn' 
            type='button'
            variant="primary"
            onClick={() => navigate(-1)}
        >
            Back
        </Button>         
      </main>
    );
  }
  
  export default MyProjects;