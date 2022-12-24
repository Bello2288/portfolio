import './ContactInfo.css';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
// import Link from 'react-router-dom'


function ContactInfo() {

    const navigate = useNavigate();

    return (
        <div className='contact'> 
            <h1 className='contact-info'>Contact Me</h1>
            <p className='contact-text'>Please reach out to me. I would love chat over a cup of coffee, phone or video chat!</p>
            <div>
                <a href="https://www.linkedin.com/in/gregg-bellofatto-06349810a/" target="_blank" rel="noreferrer">LinkedIn</a>
            </div>
            <div>
                <a href='https://github.com/Bello2288' target='_blank'>GitHub</a>
            </div>
            <div>
                <a href='mailto:bellofattogregg@gmail.com'>Email</a>
            </div>
            <Button
                className='back-btn'
                type='button'
                variant='danger'
                onClick={() => navigate(-1)}
            >
                Back
            </Button>
        </div>
    );
}

export default ContactInfo