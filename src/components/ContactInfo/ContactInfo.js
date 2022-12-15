import './ContactInfo.css';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
// import Link from 'react-router-dom'


function ContactInfo() {

    const navigate = useNavigate();

    return (
        <div className='contact'> 
            <p>This is the contact info page</p>
            <div>
                <a href="https://www.linkedin.com/in/gregg-bellofatto-06349810a/" target="_blank" rel="noreferrer">LinkedIn</a>
            </div>
            {/* <div>
                <a href=""></a>
            </div>
            <div>
                <a href=""></a>
            </div> */}
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