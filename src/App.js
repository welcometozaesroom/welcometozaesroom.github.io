import React from 'react';
import './App.css';
import RolloutItem from './components/RolloutItem';
import { 
  faFacebook, 
  faInstagram,
  faTwitter,
  faTiktok,
  faSpotify,
  faBandcamp,
  faSoundcloud,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import { StyledFaIcon, StyledAppleMusicIcon, iconDimensions } from './constants'
import SingleItem from './components/SingleItem';

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1 style={{textDecorationLine: 'underline'}}>Zae's Room Rollout</h1>
        <h4>
          "Zae's Room" will be released on February 12, 2021.
          In the meantime, here's a one-stop shop for all the
          stuff to keep y'all entertained until the album is out.
          Enjoy :)
        </h4>
        <div>
          <a href="https://www.facebook.com/zaemadethis" target="_blank" rel="noopener noreferrer">
            <StyledFaIcon icon={faFacebook} color="#4267B2" style={iconDimensions} />
          </a>
          <a href="https://www.instagram.com/zaemadethis" target="_blank" rel="noopener noreferrer">
            <StyledFaIcon icon={faInstagram} color="#E1306C" style={iconDimensions} />
          </a>
          <a href="https://www.twitter.com/zaemadethis" target="_blank" rel="noopener noreferrer">
            <StyledFaIcon icon={faTwitter} color="#1DA1F2" style={iconDimensions} />
          </a>
          <a href="https://www.tiktok.com/@zaemadethis" target="_blank" rel="noopener noreferrer">
            <StyledFaIcon icon={faTiktok} color="#000000" style={iconDimensions} />
          </a>
          <a href="https://open.spotify.com/artist/0idP6NmikrVzi8j9fDPIo6" target="_blank" rel="noopener noreferrer">
            <StyledFaIcon icon={faSpotify} color="#1DB954" style={iconDimensions} />
          </a>
          <a href="https://music.apple.com/us/artist/isaiah-bullard/1422919410" target="_blank" rel="noopener noreferrer">
            <StyledAppleMusicIcon style={iconDimensions} color="#FA57C1" />
          </a>
          <a href="https://isaiahbullard.bandcamp.com/" target="_blank" rel="noopener noreferrer">
            <StyledFaIcon icon={faBandcamp} color="#629AA9" style={iconDimensions}/>
          </a>
          <a href="https://www.soundcloud.com/isaiah_bullard" target="_blank" rel="noopener noreferrer">
            <StyledFaIcon icon={faSoundcloud} color="#FE5000" style={iconDimensions} />
          </a>
          <a href="https://www.youtube.com/channel/UCMMDfi3G5xXLj7vVqq9yr9w" target="_blank" rel="noopener noreferrer">
            <StyledFaIcon icon={faYoutube} color="#FF0000" style={iconDimensions} />
          </a>
        </div>
        <RolloutItem
          title={`"The Holly Jolly Tape" - Listen Here!`}
          component={(
            <div>
              <iframe 
                title={`"The Holly Jolly Tape" Re-Release Drop Trailer`}
                type="text/html"
                style={{
                  width: '100%',
                  maxWidth: '560px',
                  height: '315px',
                  border: 0
                }}
                src="https://www.youtube.com/embed/lJcgnZHEM0s" 
                allowFullScreen
              />
              <h4>If you like beat tapes, click below to listen to one! If you like me, click below to listen to my beat tape! If you like Christmas music, click below to listen to some! Merry Christmas and Happy Holidays!</h4>
              <a href={`https://isaiahbullard.bandcamp.com/album/the-holly-jolly-tape`} target="_blank" rel="noopener noreferrer">
                <StyledFaIcon icon={faBandcamp} color="#629AA9" style={iconDimensions}/>
              </a>
              <a href={`https://soundcloud.com/isaiah_bullard/sets/the-holly-jolly-tape`} target="_blank" rel="noopener noreferrer">
                <StyledFaIcon icon={faSoundcloud} color="#FE5000" style={iconDimensions} />
              </a>
              <a href={`https://www.youtube.com/playlist?list=PLFzSU3ciTsEcmfB37W02rAgZRJumtB4F7`} target="_blank" rel="noopener noreferrer">
                <StyledFaIcon icon={faYoutube} color="#FF0000" style={iconDimensions} />
              </a>
            </div>
          )}
        />
        <RolloutItem
          title={`"The Holly Jolly Tape" Re-Release Announcement!`}
          component={(
            <iframe 
              title={`"The Holly Jolly Tape" Re-Release Announcement!`}
              type="text/html"
              style={{
                width: '100%',
                maxWidth: '560px',
                height: '315px',
                border: 0
              }}
              src="https://www.youtube.com/embed/nm_9lYWMjBk" 
              allowFullScreen
            />
          )}
        />
        <RolloutItem
          title="Release Date Announcement!"
          component={(
            <iframe 
              title="Zae's Room - Release Date Announcement!"
              type="text/html"
              style={{
                width: '100%',
                maxWidth: '560px',
                height: '315px',
                border: 0
              }}
              src="https://www.youtube.com/embed/OqbWpWoAoh0" 
              allowFullScreen
            />
          )}
        />
        <RolloutItem
          title={"\"Evil Plan\" - Listen Here!"}
          component={(
            <SingleItem 
              spotify="48Abax8tB9fYuzlviX0bUG"
              apple="evil-plan-feat-louiev-t-fuze-single/1506525081"
              bandcamp="evil-plan-feat-louiev-t-fuze"
              soundcloud="evil-plan"
              youtube="TDqCg3G_zxQ"
            />
          )}
        />
        <RolloutItem
          title={"\"Big Thangs\" - Listen Here!"}
          component={(
            <SingleItem 
              spotify="3D8y5cDAMeQ6UQHsN8TJr9"
              apple="big-thangs-feat-coreyarnell-may/1502027667"
              bandcamp="big-thangs-feat-coreyarnell-may"
              soundcloud="big-thangs"
              youtube="H9M8eZOEJ_E"
            />
          )}
        />
      </div>
    );
  }
}