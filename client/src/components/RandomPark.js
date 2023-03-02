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
    <Button style={{marginTop: mobile ? '1.5em': '3em'}} primary size='large'>
        Choose a park for me  
        <Icon corner='right' name='find'/>
    </Button>
);

export default RandomPark;