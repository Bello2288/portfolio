import './MyProjects.css';
import Button from 'react-bootstrap/Button';
import {useNavigate} from "react-router-dom";
import github from '../../images/github.png'
import on_deck from '../../images/on_deck.png'
import news_app from '../../images/news_app.png'
import pixel_perfect from '../../images/pixel_perfect.png'
import calculator from '../../images/calculator.png'
import war_game from '../../images/war_game.png'



function MyProjects() { 
    
    const navigate = useNavigate();

    return (  
      <main>
        <p>This is the My Projects Page</p>
        <section className='project-list'>
          <div className='link-box'>
            <a href="https://github.com/Bello2288" target="_blank"><img className='link-img github' src={github} alt="github_logo"></img></a>
            <p>Visit my GitHub Page</p>
          </div>
          <div className='link-box'>
            <a href="https://on-deck-bello2288.herokuapp.com/" target="_blank"><img className='link-img' src={on_deck} alt="on_deck"></img></a>
            <p>On Deck</p>
          </div>
          <div className='link-box'>
            <a href="https://newspaper-app-bello2288.herokuapp.com/" target="_blank"><img className='link-img' src={news_app} alt="news_app"></img></a>
            <p>Django News Paper App</p>
          </div>
          <div className='link-box'>
            <a href="https://bello2288.github.io/Pixle-Perfect/" target="_blank"><img className='link-img' src={pixel_perfect} alt="pixel_perfect"></img></a>
            <p>Pixel Perfect</p>
          </div>
          <div className='link-box'>
            <a href="https://bello2288.github.io/js-calculator/" target="_blank"><img className='link-img' src={calculator} alt="calculator"></img></a>
            <p>JS Calculator</p>
          </div>
          <div className='link-box'>
            <a href="https://bello2288.github.io/js-war-game/" target="_blank"><img className='link-img' src={war_game} alt="war_game"></img></a>
            <p>War Game</p>
          </div>
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