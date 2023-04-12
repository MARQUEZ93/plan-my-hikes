import {
    Container,
    Grid,
    Button,
    Header,
    List,
    Icon, 
    Image, 
    Menu, 
    Segment, 
    Sidebar, 
  } from 'semantic-ui-react';

import React,{useState,useEffect} from 'react';

const options = [
    { key: '1', text: '7 Day Itinerary', value: 'schedule'},
    { key: '2', text: "Can't Miss Experience", value: 'best' },
    { key: '3', text: 'Hidden Gem', value: 'gem' },
    { key: '4', text: 'Camping', value: 'camping' },
    { key: '5', text: 'Busy Season', value: 'busy' },
    { key: '6', text: 'Toughest Hike', value: 'tough' },
    { key: '7', text: 'Tips', value: 'tips' },
];

const Questions = ({handleButtonClick, selected}) => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    if (windowWidth > 768 ){
        return (<Button.Group>
            {options.map((option) => (
                <Button
                    key={option.key}
                    active={option.value === selected.value}
                    onClick={() => handleButtonClick(option)}
                >
                    {option.text}
                </Button>
            ))}
        </Button.Group>
        );
    } else {
        console.log(options);
        console.log(selected);
        const filteredOptions = options.filter(op => op.value !== selected.value);
        const top = filteredOptions.slice(0, 3);
        const bottom = filteredOptions.slice(3);
        return (<><Button.Group widths='3'>
            {top.map((option) => (
                <Button
                    key={option.key}
                    onClick={() => handleButtonClick(option)}
                >
                    {option.text}
                </Button>
            ))}
        </Button.Group>
        <Button.Group widths='3'>
            {bottom.map((option) => (
                <Button
                    key={option.key}
                    onClick={() => handleButtonClick(option)}
                >
                    {option.text}
                </Button>
            ))}
        </Button.Group>
        </>
        );
    }
};
export default Questions;