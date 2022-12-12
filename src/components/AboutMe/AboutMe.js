import './AboutMe.css';
import { Button } from 'react-bootstrap';
import { useNavigate} from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import city from '../../images/city.jpeg';
import foggy from '../../images/foggy.jpeg';
import moon from '../../images/moon.jpeg';
import boy_dogs from '../../images/boy_dogs.jpeg';
import girl_dogs from '../../images/girl_dogs.jpeg';
import family from '../../images/family.jpeg';
import pigs from '../../images/pigs.jpeg';
import goats from '../../images/goats.jpeg';
import kids from '../../images/kids.jpeg';
import wife from '../../images/wife.jpeg';

// import React from 'react';
// import AliceCarousel from 'react-alice-carousel';
// import 'react-alice-carousel/lib/alice-carousel.css';


// const handleDragStart = (e) => e.preventDeafult();

// const items = [
//   <img className='testing' src={family} onDragStart={handleDragStart} role="presentation" />,
//   <img className='testing' src={kids} onDragStart={handleDragStart} role="presentation" />,
//   <img className='testing' src={wife} onDragStart={handleDragStart} role="presentation" />,
// ];

function App() {

  const navigate = useNavigate(); 

  return (
    <div className="App">
      <section>
        <h1>About Me</h1>
        <p>Hey there, my name is Gregg!</p>
        <p>I am a recent graduate of Carolina Code School. I live in South Carolina with my wife, three kids</p>
        <p>and our 11 animals (I call it our petting zoo). We moved here seven years ago from New Hampshire.</p>
        <p>When I'm not coding, I enjoy speading time with my family, being outside, playing board games,</p>
        <p>watching movies, and being active in sports.</p>
      </section>

      {/* <AliceCarousel 
      mouseTracking 
      disableButtonsControls
      items={items} /> */}



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
        variant='primary'
        onClick={() => navigate(-1)}
        >
            Back
        </Button>
    </div>
  );
}

export default App;