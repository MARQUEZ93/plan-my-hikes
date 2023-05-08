import { Link } from "react-router-dom";
import {
  Container,
  Button,
  Icon
} from 'semantic-ui-react';

import SearchBar from './SearchBar';

function NoMatch({isMobile = false}) {
    return ( <Container text style={{backgroundColor: 
      '#F0F0F0', paddingBottom: '9em', textAlign:'center'}}>
        <SearchBar />
        <Link to="/"><Button
              style={{marginTop: isMobile ? '1em': '2em', 
              marginBottom: isMobile ? '1em' : '2em',
                  fontFamily: 'Inconsolata'}} primary size='massive'>
              Nothing to see here!
              <Icon corner={'top right'} name='home'/>
          </Button></Link>
    </Container>);
};
export default NoMatch;