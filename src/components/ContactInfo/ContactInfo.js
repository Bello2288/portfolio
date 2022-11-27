import './ContactInfo.css';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


function ContactInfo() {

    const navigate = useNavigate();

    return (
        <div className='App'>
            <p>This is the contact info page</p>
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

export default ContactInfo