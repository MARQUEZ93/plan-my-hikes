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

import parks from "../data/parks";
import { useNavigate } from "react-router-dom";


const RandomPark = ({mobile}) => {
    const navigate = useNavigate();
    const random = parks[Math.floor(Math.random()*parks.length)];
    const onClick = () => {
        navigate(`/parks/${random.route}`);
    };
    return (<Button
        onClick={onClick}
        style={{marginTop: mobile ? '1em': '2em', 
        marginBottom: mobile ? '1em' : '2em',
            fontFamily: 'Inconsolata'}} primary size='large'>
        Choose a National Park for me!  
        <Icon corner='top right' name='find'/>
    </Button>);
};

export default RandomPark;