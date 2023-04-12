import React from 'react';
import {
  Container,
  Segment,
} from 'semantic-ui-react';
import MainMenu from './MainMenu';

const SiteHeader = ({isMobile=false}) => (
  <Segment
    inverted
    textAlign='center'
    style={{backgroundColor: '#F0F0F0', height: '100%'}}
    vertical
  >
    <MainMenu isMobile/>
  </Segment>
);

export default SiteHeader;