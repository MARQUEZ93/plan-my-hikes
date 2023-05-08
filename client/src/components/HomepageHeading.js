import { Container, Header } from 'semantic-ui-react';

import SearchHikes from './SearchHikes';
import RandomPark from './RandomPark';

const HomepageHeading = ({ isMobile=false }) => {
    return (
        <Container text style={{paddingBottom: '10em', textAlign:'center'}}>
            <Header
                as='h1'
                content='Get your hiking itinerary!'
                inverted
                style={{
                  color: '#1b1c1d',
                  fontSize: false ? '2.5em' : '3em',
                  fontWeight: 'normal',
                  marginBottom: false ?  '0.4em' : '.5em',
                  marginTop: false ? '0.8em' : '1em',
                }}
            />
            <SearchHikes isMobile/>
            <RandomPark isMobile />
        </Container>
    );
};

export default HomepageHeading;