import React from 'react';
import {
  Container,
  Segment,
} from 'semantic-ui-react';
import MainMenu from './MainMenu';

const DesktopHeader = ({isMobile}) => (
          <Segment
            inverted
            textAlign='center'
            style={{backgroundColor: '#F0F0F0', height: '100%'}}
            vertical
          >
            <MainMenu/>
          </Segment>
);

const MobileHeader = ({isMobile}) => (
  <Segment
          textAlign='center'
          vertical
        >
          <Container><MainMenu isMobile={isMobile} /></Container>
        </Segment>
);

const SiteHeader = ({isMobile=false}) => {
  console.log(isMobile);
  if (isMobile){
    return <MobileHeader isMobile={isMobile}/>;
  } else {
    return <DesktopHeader />;
  }
};

export default SiteHeader;