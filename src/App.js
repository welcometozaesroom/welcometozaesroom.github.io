import React from 'react';
import './App.css';
import { 
  faSpotify,
  faBandcamp,
  faSoundcloud,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import { StyledFaIcon, StyledAppleMusicIcon, iconDimensions } from './constants'

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1 style={{textDecorationLine: 'underline'}}>Watch the video below.</h1>
        <iframe 
          title={`You've been Prank'd - Zae's Room is out now.`}
          type="text/html"
          style={{
            width: '100%',
            maxWidth: '560px',
            height: '315px',
            border: 0
          }}
          src="https://www.youtube.com/embed/yJzpm8vp9No" 
          allowFullScreen
        />
        <div>
          <a href="https://open.spotify.com/album/0SvPs6xRhvS9KIIyEtBnbv" target="_blank" rel="noopener noreferrer">
            <StyledFaIcon icon={faSpotify} color="#1DB954" style={iconDimensions} />
          </a>
          <a href="https://music.apple.com/us/album/zaes-room/1550432322" target="_blank" rel="noopener noreferrer">
            <StyledAppleMusicIcon style={iconDimensions} color="#FA57C1" />
          </a>
          <a href="https://isaiahbullard.bandcamp.com/album/zaes-room" target="_blank" rel="noopener noreferrer">
            <StyledFaIcon icon={faBandcamp} color="#629AA9" style={iconDimensions}/>
          </a>
          <a href="https://soundcloud.com/isaiah_bullard/sets/zaes-room" target="_blank" rel="noopener noreferrer">
            <StyledFaIcon icon={faSoundcloud} color="#FE5000" style={iconDimensions} />
          </a>
          <a href="https://www.youtube.com/playlist?list=PLFzSU3ciTsEeaCDkRC3NJyA7agI2fETBf" target="_blank" rel="noopener noreferrer">
            <StyledFaIcon icon={faYoutube} color="#FF0000" style={iconDimensions} />
          </a>
        </div>
        <a href={`https://www.zaemadethis.com`} style={{color: "#000000"}} target="_blank" rel="noopener noreferrer">
          <h4>Visit my website!</h4>
        </a>
      </div>
    );
  }
}