// Import Spectacle Core tags
import { Link } from 'aaccurso-spectacle';

// Import styled components
import styled from 'styled-components';
import { tertiary } from '../utils/colors';
import { em } from 'polished';

const StyledLink = styled(Link)`
  color: ${props => props.color || tertiary};
  border-bottom: 1px dashed ${props => props.color || tertiary};
  position: relative;
  margin-right: ${em(8)};
  cursor: pointer;

  &:hover {
    border-bottom-style: solid;
  }
  &::after {
    content: "*";
    position: absolute;
    right: -${em(8)};
    top: 0;
  }
`;

export default StyledLink;
