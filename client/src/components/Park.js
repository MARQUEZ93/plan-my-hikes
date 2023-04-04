import React,{useState,useEffect} from 'react';
import { useParams } from "react-router-dom";

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
    { key: '2', text: "Can't Miss Experience", value: 'best' },
    { key: '3', text: 'Hidden Gem', value: 'hidden_gem' },
    { key: '4', text: 'Camping', value: 'camping' },
    { key: '5', text: 'Busy Season', value: 'busy' },
    { key: '6', text: 'Toughest Hike', value: 'toughest' },
    { key: '7', text: 'Tips', value: 'unique' },
  ];

function getQuestion(park_name, value){
    if (value === "best"){
        return "What is the one of the single best experiences of " + park_name + "?";
    } else if (value === "hidden_gem") {
        return "What is a hidden gem of  " + park_name + "?";
    } else if (value === "schedule"){
        return "Please provide a detailed 6 night itinerary for " + park_name + "!";
    } else if (value === "camping"){
        return "Where do you recommend to go camping in " + park_name + "?";
    } else if (value === "unique"){
        return "Please provide me some unique tips for " + park_name + "?";
    } else if (value === "busy"){
        return "What are the most crowded months to visit " + park_name + "?";
    } else if (value === "toughest"){
        return "What is one of the toughest hikes in " + park_name + "?";
    }
}

function Park({mobile=false}) {

    const { name } = useParams();
    const [ park, setPark ] = useState('');

      const [selected, setSelected] = useState(options[0]);

      const handleButtonClick = (option) => {
        setSelected(option);
      };

      useEffect(() => {
        fetch(`http://localhost:5000/parks/${name}`)
          .then(response => response.json())
          .then(dataRes => {
              console.log(dataRes);
              setPark(dataRes);
          })   
          .catch(error => console.error(error));
      }, [name]);
    
      if (!park) {
        return <div>{name}</div>;
      }
      console.log(park);
        return (
            <Container style={{backgroundColor: 
                '#F0F0F0', paddingBottom: '7em',
              textAlign:'center', display: 'flex', flexDirection: 'column'}}>
                  <SearchHikes size={'mini'} />
                    <Header
                        as='h1'
                        content={park.name}
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
                        src={`http://localhost:5000/images/${park.route}.jpeg`} />
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
                    <Container style={{backgroundColor: 
                '#F0F0F0', marginTop: '2em', paddingTop: '3em',
              textAlign:'center', display: 'flex', flexDirection: 'column'}}>
                        <Header
                            as='h3'
                            content={'Hey ChatGPT...' }
                            // inverted
                            style={{
                            // color: '#10a37f',
                            fontSize: mobile ? '1.25em' : '2.5em',
                            fontWeight: 'bold',
                            }}
                        />
                        <Header
                            as='h5'
                            content={getQuestion(park.name, selected.value)}
                            style={{
                            // color: '#10a37f',
                            fontSize: mobile ? '1em' : '2em',
                            paddingBottom: '2em',
                            }}
                        />
                        <Grid columns={1}>
                        <Grid.Column>
                            <p style={{fontWeight: '700', 
                                textAlign: 'center'}}>
                                {park.schedule}</p>
                        </Grid.Column>
                    </Grid>
                    </Container>
            </Container>
        );
}

export default Park;