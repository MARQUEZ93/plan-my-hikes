import React,{useState,useEffect} from 'react';
import { useParams, useNavigate } from "react-router-dom";

import { Container, Header, Grid, Label, Image, Segment } from 'semantic-ui-react';

import SearchBar from './SearchBar';
import Questions from './Questions';

const options = [
    { key: '1', text: '7 Day Itinerary', value: 'schedule'},
    { key: '2', text: "Can't Miss Experience", value: 'best' },
    { key: '3', text: 'Hidden Gem', value: 'hidden_gem' },
    { key: '4', text: 'Camping', value: 'camping' },
    { key: '5', text: 'Busy Season', value: 'busy' },
    { key: '6', text: 'Toughest Hike', value: 'tough' },
    { key: '7', text: 'Tips', value: 'tips' },
];

function getQuestion(parkName, value){
    if (value === "best"){
        return "What is the one of the best experiences of " + parkName + "?";
    } else if (value === "hidden_gem") {
        return "What is a hidden gem of  " + parkName + "?";
    } else if (value === "schedule"){
        return "Please provide a 6 night itinerary for " + parkName + "!";
    } else if (value === "camping"){
        return "Where do you recommend to go camping in " + parkName + "?";
    } else if (value === "tips"){
        return "Please provide tips for " + parkName + "!";
    } else if (value === "busy"){
        return "What are the most crowded months to visit " + parkName + "?";
    } else if (value === "tough"){
        return "What is one of the toughest hikes in " + parkName + "?";
    }
}

const apiHost = process.env.API_HOST || "/api";

function Park({mobile=false}) {

    const { name } = useParams();
    const [park, setPark] = useState(null);

    const [selected, setSelected] = 
        useState({ key: '1', text: '7 Day Itinerary', value: 'schedule'});

    const handleButtonClick = (option) => {
        setSelected(option);
    };

    const nav = useNavigate();
    const fetchParkData = () => {
        fetch(`${apiHost}/parks/${name}`)
          .then(response => {
            return response.json();
          }).then(data => setPark(data) ).catch(err => nav("/") );
    };

    useEffect(() => fetchParkData(), [name]);
    
    if (!park){return (<div>Loading...</div>);}

    return (
        <Container style={{backgroundColor: 
            '#F0F0F0', paddingBottom: '7em',
            textAlign:'center', display: 'flex', flexDirection: 'column'}}>
                <SearchBar />
                <Header
                    as='h1'
                    content={park.name}
                    inverted
                    style={{
                    color: '#1b1c1d',
                    fontSize: mobile ? '1.25em' : '2.5em',
                    fontWeight: 'normal',
                    }}
                />
                <Label size={'large'} style={{backgroundColor: '#f0f0f0'}}>
                    {park.location}</Label>
                <Image 
                    style={{margin: 'auto', borderRadius: '3em', 
                    marginBottom: '2em'}}
                    size='large'
                    src={`${apiHost}/images/${park.route}.jpeg`} />
                <Questions handleButtonClick={handleButtonClick} 
                    selected={selected} />
                <Container style={{backgroundColor: 
            '#F0F0F0', marginTop: '2em', paddingTop: '3em',
            textAlign:'center', display: 'flex', flexDirection: 'column'}}>
                    <Header
                        as='h3'
                        content={'Hey ChatGPT...' }
                        style={{
                        fontSize: mobile ? '1.25em' : '2.5em',
                        fontWeight: 'bold',
                        }}
                    />
                    <Header
                        as='h5'
                        content={getQuestion(park.name, selected.value)}
                        style={{
                        fontSize: mobile ? '1em' : '2em',
                        paddingBottom: '2em',
                        }}
                    />
                    <Grid columns={1}>
                    <Grid.Column>
                        <Segment size={'large'} content={park[selected.value]}>
                            {/* <pre>{park[selected.value]}</pre> */}
                        </Segment>
                    </Grid.Column>
                </Grid>
                </Container>
        </Container>
    );
}

export default Park;