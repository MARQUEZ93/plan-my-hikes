import React from 'react';
import {
  Segment,
} from 'semantic-ui-react';
import MainMenu from './MainMenu';

const SiteHeader = ({isMobile=false}) => {
  if (isMobile){
    return <MainMenu isMobile={isMobile}/>;
  }

  return (
    <Segment
    inverted
    textAlign='center'
    style={{backgroundColor: '#F0F0F0', height: '100%'}}
    vertical
  >
    <MainMenu isMobile={isMobile}/>
  </Segment>
  );
};

export default SiteHeader;