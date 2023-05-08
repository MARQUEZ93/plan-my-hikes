import { Container, Header } from 'semantic-ui-react';

import SearchHikes from './SearchHikes';
import RandomPark from './RandomPark';

const HomepageHeading = ({ isMobile=false }) => {
    return (
        <Container text style={{paddingBottom: isMobile ? '8em' : '4em', textAlign:'center', paddingTop: '2em'}}>
            <Header
                as='h1'
                content='Plan your hike with ChatGPT!'
                inverted
                style={{
                  color: '#1b1c1d',
                  fontSize: isMobile ? '1.5em' : '3em',
                  fontWeight: 'normal',
                  marginBottom: '.5em',
                  marginTop: isMobile ? '1em' : '1em',
                }}
            />
            <SearchHikes isMobile={isMobile}/>
            <RandomPark isMobile={isMobile} />
        </Container>
    );
};

export default HomepageHeading;