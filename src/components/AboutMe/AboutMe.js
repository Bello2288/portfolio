import './AboutMe.css';
import { Button } from 'react-bootstrap';
import { useNavigate} from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import boy_dogs from '../../images/boy_dogs.jpeg';
import girl_dogs from '../../images/girl_dogs.jpeg';
import family from '../../images/family.jpeg';
import pigs from '../../images/pigs.jpeg';
import goats from '../../images/goats.jpeg';
import kids from '../../images/kids.jpeg';
import wife from '../../images/wife.jpeg';


function App() {

  const navigate = useNavigate(); 

  return (
    <div className="about">
      <section className='about-box'>
        <h1>About Me</h1>
        <div className='about-text'>
          <p>Hey there, my name is Gregg! I am a recent graduate of Carolina Code School. 
            I live in South Carolina with my wife, three kids and our 11 animals (I call 
            it our petting zoo). We moved here seven years ago from New Hampshire. When I'm 
            not coding, I enjoy spending time with my family, being outside, playing board 
            games, watching movies, and being active in sports.</p>
        </div>
      </section>

      <section className='flex-carousel'>
        <Carousel fade className='carousel-container'>
          <Carousel.Item>
            <img 
              className="testing pic1"
              src={family}
              alt="First slide"
            />
            <Carousel.Caption>
              <p>This is my family!</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="testing"
              src={kids}
              alt="Second slide"
            />

            <Carousel.Caption>
              <p>My three kids (From left: Jared, Brenden, Courtney)</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="testing pic3"
              src={wife}
              alt="Third slide" 
            />

            <Carousel.Caption>
              <p>
                This is Sarah. We have been married for 17 years.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

        <Carousel fade className='carousel-container'>
          <Carousel.Item>
            <img
              className="testing pic4"
              src={pigs}
              alt="First slide"
            />
            <Carousel.Caption>
              <p>Our baby piggies - Rosie and Ginger</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="testing"
              src={goats}
              alt="Second slide"
            />
            <Carousel.Caption>
              <p>The sweet goats - Ridge, Sage, Rockey, Willow</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="testing"
              src={boy_dogs}
              alt="Third slide"
            />
            <Carousel.Caption>
              <p>
                This is Charlie and Ryder
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="testing"
              src={girl_dogs}
              alt="Third slide"
            />
            <Carousel.Caption>
              <p>
                Our guardian dogs Athena and River
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </section>

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

export default App;