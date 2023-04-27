import { Container, Header } from 'semantic-ui-react';

import SearchHikes from './SearchHikes';
import RandomPark from './RandomPark';

const HomepageHeading = ({ mobile=false }) => {
    return (
        <Container text style={{paddingBottom: '10em', textAlign:'center'}}>
            <Header
                as='h1'
                content='Get your hiking itinerary!'
                inverted
                style={{
                  color: '#1b1c1d',
                  fontSize: mobile ? '1.5em' : '3em',
                  fontWeight: 'normal',
                  marginBottom: mobile ?  '0.25em' : '.5em',
                  marginTop: mobile ? '0.5em' : '1em',
                }}
            />
            <SearchHikes />
            <RandomPark />
        </Container>
    );
};

export default HomepageHeading;