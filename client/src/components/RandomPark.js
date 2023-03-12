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

const RandomPark = ({mobile}) => (
    <Button
        style={{marginTop: mobile ? '1em': '2em', 
        marginBottom: mobile ? '1em' : '2em',
            fontFamily: 'Quicksand'}} primary size='large'>
        Choose a National Park for me!  
        <Icon corner='right' name='find'/>
    </Button>
);

export default RandomPark;