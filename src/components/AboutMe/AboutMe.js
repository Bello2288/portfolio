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

import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';


const handleDragStart = (e) => e.preventDeafult();

const items = [
  <img className='testing' src={family} onDragStart={handleDragStart} role="presentation" />,
  <img className='testing' src={kids} onDragStart={handleDragStart} role="presentation" />,
  <img className='testing' src={wife} onDragStart={handleDragStart} role="presentation" />,
];

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

      <AliceCarousel 
      mouseTracking 
      disableButtonsControls
      items={items} />



      {/* <section className='flex-carousel'>
        <Carousel fade className='carousel-container'>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={family}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 carousel-img"
              src={kids}
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={wife}
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel> */}

        {/* <Carousel fade className='carousel-container'>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={city}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={foggy}
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={moon}
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel> */}
      {/* </section> */}

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