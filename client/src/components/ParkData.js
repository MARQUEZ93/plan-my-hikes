import React,{useState,useEffect} from 'react';
import { useParams } from "react-router-dom";
import NoMatch from './NoMatch';

import {
    Container,
    Header,
    Grid,
    Image,
    Button
  } from 'semantic-ui-react';

import SearchHikes from './SearchHikes';

const options = [
    { key: '1', text: '7 Day Itinerary', value: 'schedule'},
    { key: '2', text: 'Hidden Gem', value: 'hidden_gem' },
    { key: '3', text: "Can't Miss Experience", value: 'best' },
    { key: '4', text: 'Tips', value: 'unique' },
    { key: '5', text: 'Camping', value: 'camping' },
    { key: '6', text: 'Toughest Hike', value: 'toughest' },
    { key: '7', text: 'Busy Season', value: 'busy' },
  ];

function getQuestion(park_name, value){
    if (value === "best"){
        return "What is the one of the single best experiences of " + park_name + "?";
    } else if (value === "hidden_gem") {
        return "What is a hidden gem of  " + park_name + "?";
    } else if (value === "schedule"){
        return "What is the one of the single best experiences of " + park_name + "?";
    } else if (value === "camping"){
        return "What is the one of the single best experiences of " + park_name + "?";
    } else if (value === "unique"){
        return "What are some unique advice/tips for " + park_name + "?";
    } else if (value === "busy"){
        return "What are the most crowded months to visit " + park_name + "?";
    } else if (value === "toughest"){
        return "I am in great physical shape. What is one of the toughest hikes in " + park_name + "? Include hike duration & specific details for why this hike is demanding. " + park_name + "?";
    }
}

function ParkData({mobile=false}) {

    const { name } = useParams();

    const [ data, setData ] = useState( [] );

      const [selected, setSelected] = useState(options[0]);

      const handleButtonClick = (option) => {
        setSelected(option);
      };

    useEffect(()=>{
        getData();
    },[]);

    if (data && data[0]){
        const parkData = data[0][name];
        if (!parkData){
            return <NoMatch />;
        }
        return (
            <Container style={{backgroundColor: 
                '#F0F0F0', paddingBottom: '7em',
              textAlign:'center', display: 'flex', flexDirection: 'column'}}>
                    <Header
                        as='h1'
                        content={parkData.name}
                        inverted
                        style={{
                        color: '#1b1c1d',
                        fontSize: mobile ? '1.25em' : '2.5em',
                        fontWeight: 'normal',
                        // marginBottom: mobile ?  '0.25em' : '.5em',
                        // marginTop: mobile ? '0.5em' : '1em',
                        }}
                    />
                    <Image 
                        style={{margin: 'auto', borderRadius: '3em', 
                            marginBottom: '2em'}}
                        size='large'
                        src={parkData.url} />
                    <Button.Group>
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
                    <Header
                        as='h3'
                        content={'Hey ChatGPT,' }
                        inverted
                        style={{
                        color: '#10a37f',
                        fontSize: mobile ? '1.25em' : '2.5em',
                        fontWeight: 'bold',
                        }}
                    />
                    <Header
                        as='h5'
                        content={getQuestion(parkData.name, selected.value)}
                        inverted
                        style={{
                        color: '#10a37f',
                        fontSize: mobile ? '1em' : '2em',
                        }}
                    />
                    {/* <Grid columns={1}>
                        <Grid.Column>
                            <p style={{color: '#10a37f', fontWeight: '700'}}>
                                {parkData.schedule}</p>
                        </Grid.Column>
                    </Grid> */}
            </Container>
        );
    }
    return (
        <div>
            <p>Loading...</p>
        </div>
    );
}

export default ParkData;