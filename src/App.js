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
  faAmazon
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
          id="meet-the-cast"
          title={`Pre-Orders and Pre-Saves Available Now!`}
          component={(
            <div>
              <h4>
                Click the icon below to Pre-Order "Zae's Room" on iTunes and Amazon,
                or Pre-Save the album on Spotify!
              </h4>
              <a href="https://music.apple.com/us/album/zaes-room/1550432322" target="_blank" rel="noopener noreferrer">
                <StyledAppleMusicIcon style={iconDimensions} color="#FA57C1" />
              </a>
              <a href="https://www.amazon.com/Zaes-Room-Explicit-Isaiah-Bullard/dp/B08TTKW3T1" target="_blank" rel="noopener noreferrer">
                <StyledFaIcon icon={faAmazon} color="#FF9900" style={iconDimensions} />
              </a>
              <iframe 
                title="Pre-Save Link"
                src="https://show.co/social-unlock/09aIDBInVP8YVqJ8w3Tvf7/widget"
                style={{
                  width: '100%',
                  height: 300,
                  border: 0
                }}
                width="100%"
                height="300"
                frameborder="0"
              />
              <a href={`https://show.co/gz1BOY2`} target="_blank" rel="noopener noreferrer" style={{color: "#000000"}}>
                <h4>Or click here if the thing above doesn't work.</h4>
              </a>
            </div>
          )}
        />
        <RolloutItem
          id="meet-the-cast"
          title={`Trailer & Track List!`}
          component={(
            <div>
              <iframe 
                title={`Zae's Room - Trailer & Track List`}
                type="text/html"
                style={{
                  width: '100%',
                  maxWidth: '560px',
                  height: '315px',
                  border: 0
                }}
                src="https://www.youtube.com/embed/SXgXyOkSOVw" 
                allowFullScreen
              />
            </div>
          )}
        />
        <RolloutItem
          id="meet-the-cast"
          title={`Meet the Cast!`}
          component={(
            <div>
              <iframe 
                title={`Meet the Cast`}
                type="text/html"
                style={{
                  width: '100%',
                  maxWidth: '560px',
                  height: '315px',
                  border: 0
                }}
                src="https://www.youtube.com/embed/zKAu335n1c8" 
                allowFullScreen
              />
            </div>
          )}
        />
        <RolloutItem
          id="big-thangs-video"
          title={`"Big Thangs" - Music Video!`}
          component={(
            <div>
              <iframe 
                title={`Isaiah Bullard - Big Thangs feat. CoreyArnell & May (Official Music Video)`}
                type="text/html"
                style={{
                  width: '100%',
                  maxWidth: '560px',
                  height: '315px',
                  border: 0
                }}
                src="https://www.youtube.com/embed/FIT_DhSPpyw" 
                allowFullScreen
              />
              <a href={`#big-thangs`} style={{color: "#000000"}}>
                <h4>Listen to "Big Thangs" on your favorite streaming platform HERE!</h4>
              </a>
            </div>
          )}
        />
        <RolloutItem
          id="toy-box"
          title={`"Toy Box (feat. Mark Pheonix, CoreyArnell & Phri)" - Listen Here!`}
          component={(
            <div>
              <iframe 
                title={`"Toy Box"`}
                type="text/html"
                style={{
                  width: '100%',
                  maxWidth: '560px',
                  height: '315px',
                  border: 0
                }}
                src="https://www.youtube.com/embed/2X1ON5fZRqA" 
                allowFullScreen
              />
              <h4>Look at the cover art. We're sitting on top of a Rubik's cube...while I'm solving a Rubik's cube. Ain't that somthing? This track is the spirit of Zae's Room. 2021 is our year.</h4>
              <SingleItem 
                spotify="04RE5S7el9EmnV6sDlGnQM"
                apple="toy-box-feat-mark-pheonix-coreyarnell-phri-single/1547306457"
                bandcamp="toy-box-feat-mark-pheonix-coreyarnell-phri-single"
                soundcloud="toy-box"
                youtube="2X1ON5fZRqA"
              />
              <br />
              <a href={`https://blog.acrylicstyle.com/2021/01/isaiah-bullard-toy-box-feat-mark.html`} target="_blank" rel="noopener noreferrer" style={{color: "#000000"}}>
                <h4>Check out the Acrylic Style feature for Toy Box HERE!</h4>
              </a>
            </div>
          )}
        />
        <RolloutItem
          id="the-holly-jolly-tape"
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
          id="release-date"
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
          id="evil-plan"
          title={"\"Evil Plan feat. LouieV T & FUZE\" - Listen Here!"}
          component={(
            <div>
              <iframe 
                title={`"Evil Plan"`}
                type="text/html"
                style={{
                  width: '100%',
                  maxWidth: '560px',
                  height: '315px',
                  border: 0
                }}
                src="https://www.youtube.com/embed/TDqCg3G_zxQ" 
                allowFullScreen
              />
              <SingleItem 
                spotify="48Abax8tB9fYuzlviX0bUG"
                apple="evil-plan-feat-louiev-t-fuze-single/1506525081"
                bandcamp="evil-plan-feat-louiev-t-fuze"
                soundcloud="evil-plan"
                youtube="TDqCg3G_zxQ"
              />
            </div>
          )}
        />
        <RolloutItem
          id="big-thangs"
          title={"\"Big Thangs feat. CoreyArnell & May\" - Listen Here!"}
          component={(
            <div>
              <iframe 
                title={`"Big Thangs"`}
                type="text/html"
                style={{
                  width: '100%',
                  maxWidth: '560px',
                  height: '315px',
                  border: 0
                }}
                src="https://www.youtube.com/embed/H9M8eZOEJ_E" 
                allowFullScreen
              />
              <SingleItem 
                spotify="3D8y5cDAMeQ6UQHsN8TJr9"
                apple="big-thangs-feat-coreyarnell-may/1502027667"
                bandcamp="big-thangs-feat-coreyarnell-may"
                soundcloud="big-thangs"
                youtube="H9M8eZOEJ_E"
              />
            </div>
          )}
        />
      </div>
    );
  }
}