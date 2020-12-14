import React from 'react';
import { StyledFaIcon, StyledAppleMusicIcon, iconDimensions } from '../constants'
import { 
  faSpotify,
  faBandcamp,
  faSoundcloud,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';

export default class SingleItem extends React.Component {
  render() {
    return (
      <div>
        <a href={`https://open.spotify.com/album/${this.props.spotify}`} target="_blank" rel="noopener noreferrer">
            <StyledFaIcon icon={faSpotify} color="#1DB954" style={iconDimensions} />
          </a>
          <a href={`https://music.apple.com/us/album/${this.props.apple}`} target="_blank" rel="noopener noreferrer">
            <StyledAppleMusicIcon style={iconDimensions} color="#FA57C1" />
          </a>
          <a href={`https://isaiahbullard.bandcamp.com/track/${this.props.bandcamp}`} target="_blank" rel="noopener noreferrer">
            <StyledFaIcon icon={faBandcamp} color="#629AA9" style={iconDimensions}/>
          </a>
          <a href={`https://www.soundcloud.com/isaiah_bullard/${this.props.soundcloud}`} target="_blank" rel="noopener noreferrer">
            <StyledFaIcon icon={faSoundcloud} color="#FE5000" style={iconDimensions} />
          </a>
          <a href={`https://www.youtube.com/watch?v=${this.props.youtube}`} target="_blank" rel="noopener noreferrer">
            <StyledFaIcon icon={faYoutube} color="#FF0000" style={iconDimensions} />
          </a>
      </div>
    )
  }
}