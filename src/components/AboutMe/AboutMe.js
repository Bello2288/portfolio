import { Button } from 'react-bootstrap';
import './AboutMe.css';
import { useNavigate} from 'react-router-dom';

function App() {

  const navigate = useNavigate();

  return (
    <div className="App">
      <p>This will be the about me page</p>
      <Button
        className='back-btn'
        type='button'
        variant='primary'
        onClick={() => navigate(-1)}
        >
            Back
        </Button>
    </div>
  );
}

export default App;