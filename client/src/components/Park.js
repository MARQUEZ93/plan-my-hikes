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
    { key: '1', text: 'Option 1', value: 'Option 1' },
    { key: '2', text: 'Option 2', value: 'Option 2' },
    { key: '3', text: 'Option 3', value: 'Option 3' },
    { key: '4', text: 'Option 4', value: 'Option 4' },
    { key: '5', text: 'Option 5', value: 'Option 5' },
  ];



function Park({mobile=false}) {

    const { name } = useParams();

    const [ data, setData ] = useState( [] );

      const [selected, setSelected] = useState(options[0]);

      const handleButtonClick = (option) => {
        setSelected(option);
      };

    const getData=()=>{
        fetch('../data.json'
        , {
            headers : { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }).then(function(response){
            return response.json();
        }).then(function(myJson) {
            setData(myJson);
        });
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
                  <SearchHikes size={'mini'} />
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

export default Park;