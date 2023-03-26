import { Link } from "react-router-dom";
import {
  Container,
  Button,
  Icon
} from 'semantic-ui-react';

import SearchHikes from './SearchHikes';

function NoMatch({mobile = false}) {
    return ( <Container text style={{backgroundColor: 
      '#F0F0F0', paddingBottom: '9em', textAlign:'center'}}>
        <SearchHikes size='large' />
        <Link to="/"><Button
              style={{marginTop: mobile ? '1em': '2em', 
              marginBottom: mobile ? '1em' : '2em',
                  fontFamily: 'Inconsolata'}} primary size='massive'>
              Nothing to see here!
              <Icon corner='right' name='home'/>
          </Button></Link>
    </Container>);
};
export default NoMatch;