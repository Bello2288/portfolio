import './MyProjects.css';
import Button from 'react-bootstrap/Button';
import {useNavigate} from "react-router-dom";



function MyProjects() { 
    
    const navigate = useNavigate();

    return (  
      <>
        <p>This is the My Projects Page</p>
        <Button 
            className='back-btn' 
            type='button'
            variant="primary"
            onClick={() => navigate(-1)}
        >
            Back
        </Button>         
      </>
    );
  }
  
  export default MyProjects;