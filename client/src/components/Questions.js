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
    Divider
  } from 'semantic-ui-react';

import React,{useState,useEffect} from 'react';

const options = [
    { key: '1', text: 'Seven Day Itinerary', value: 'schedule'},
    { key: '2', text: "Best Experience", value: 'best' },
    { key: '3', text: 'Hidden Gem', value: 'hidden_gem' },
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
        return ( <>
                    <Button.Group fluid>
                        {options.slice(0,3).map((option) => (
                            <Button
                                style={{margin: '0.05em'}}
                                key={option.key}
                                active={option.value === selected.value}
                                onClick={() => handleButtonClick(option)}
                            >
                                {option.text}
                            </Button>
                        ))}
                    </Button.Group>
                    <Button.Group fluid>
                        {options.slice(3, 7).map((option) => (
                            <Button
                                style={{margin: '0.05em'}}
                                key={option.key}
                                active={option.value === selected.value}
                                onClick={() => handleButtonClick(option)}
                            >
                                {option.text}
                            </Button>
                        ))}
                    </Button.Group>
                </>
        );
    } else {
        return (<>
                    <Button.Group size={'mini'} widths='3'>
                            {options.slice(1,4).map((option) => (
                                <Button
                                    disabled={selected.value === option.value}
                                    key={option.key}
                                    onClick={() => handleButtonClick(option)}
                                >
                                    {option.text}
                                </Button>
                            ))}
                        </Button.Group>
                        <Divider fitted/>
                        <Button.Group size={'mini'} widths='3'>
                            {options.slice(4,7).map((option) => (
                                <Button
                                    disabled={selected.value === option.value}
                                    key={option.key}
                                    onClick={() => handleButtonClick(option)}
                                >
                                    {option.text}
                                </Button>
                            ))}
                        </Button.Group>
                        <Divider fitted />
                        <Button.Group size={'mini'} widths='1'>
                            <Button
                                disabled={selected.value === options[0].value}
                                key={options[0].key}
                                onClick={() => handleButtonClick(options[0])}
                            >
                                {options[0].text}
                            </Button>
                        </Button.Group>
                </>
        );
    }
};
export default Questions;