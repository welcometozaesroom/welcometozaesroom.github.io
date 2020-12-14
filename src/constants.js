import styled from 'styled-components';
import {ReactComponent as AppleMusicLogo} from './assets/Apple_Music_Icon_blk.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const iconDimensions = {
  width: '2.75em',
  height: '2.75em',
}

export const StyledFaIcon = styled(FontAwesomeIcon)`
  color: #FFFFFF;
  margin: .4em;

  &:hover {
    color: ${props => props.color};
  }
`

export const StyledAppleMusicIcon = styled(AppleMusicLogo)`
  fill: #FFFFFF;
  margin: .4em;

  &:hover {
    fill: ${props => props.color};
  }
`