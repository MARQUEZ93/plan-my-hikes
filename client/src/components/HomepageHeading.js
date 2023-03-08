import {
    Button,
    Container,
    Header,
    Icon,
    Image,
    Item,
    Menu,
    Segment,
  } from 'semantic-ui-react';

import PropTypes from 'prop-types';
import SearchHikes from './SearchHikes';
import RandomPark from './RandomPark';

/* Heads up!
 * HomepageHeading uses inline styling, however it's not the best practice. Use CSS or styled
 * components for such things.
 */
const HomepageHeading = ({ mobile=false}) => {
    return (
        <Container text>
            <Header
                as='h1'
                content='Get your hiking itinerary!'
                inverted
                style={{
                color: '#1b1c1d',
                fontSize: mobile ? '1.5em' : '3em',
                fontWeight: 'normal',
                // marginBottom: mobile ?  '0.25em' : '.5em',
                marginTop: mobile ? '0.75em' : '1.5em',
                }}
            />
            <SearchHikes mobile/>
            <RandomPark mobile />
        </Container>
    );
};
  
  HomepageHeading.propTypes = {
    mobile: PropTypes.bool,
  };

  export default HomepageHeading;