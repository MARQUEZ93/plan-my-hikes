import {
    Button,
    Icon,
  } from 'semantic-ui-react';

import parks from "../data/parks";
import { useNavigate } from "react-router-dom";


const RandomPark = ({isMobile=false}) => {
    const navigate = useNavigate();
    const random = parks[Math.floor(Math.random()*parks.length)];
    const onClick = () => {
        navigate(`/parks/${random.route}`);
    };
    return (<Button
        onClick={onClick}
        style={{marginTop: isMobile ? '1.5em': '2em', 
        marginBottom: isMobile ? '1.5em' : '2em',
            fontFamily: 'Inconsolata'}} primary size={isMobile ? 'medium': 'large'}>
        Choose a National Park for me!  
        <Icon corner='top right' name='find'/>
    </Button>);
};

export default RandomPark;