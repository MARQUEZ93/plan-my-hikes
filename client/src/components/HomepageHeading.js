import { Container, Header } from 'semantic-ui-react';

import SearchHikes from './SearchHikes';
import RandomPark from './RandomPark';

const HomepageHeading = ({ isMobile=false }) => {
    return (
        <Container text style={{paddingBottom: '6em', textAlign:'center'}}>
            <Header
                as='h1'
                content='Get your hiking itinerary!'
                inverted
                style={{
                  color: '#1b1c1d',
                  fontSize: isMobile ? '2.5em' : '3em',
                  fontWeight: 'normal',
                  marginBottom: isMobile ?  '0.4em' : '.5em',
                  marginTop: isMobile ? '0.8em' : '1em',
                }}
            />
            <SearchHikes isMobile={isMobile}/>
            <RandomPark isMobile={isMobile} />
        </Container>
    );
};

export default HomepageHeading;