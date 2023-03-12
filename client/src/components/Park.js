import React,{useState,useEffect} from 'react';
import { useParams } from "react-router-dom";
import NoMatch from './NoMatch';

import {
    Container,
    Header,
  } from 'semantic-ui-react';

import SearchHikes from './SearchHikes';
import RandomPark from './RandomPark';

function Park({mobile=false}) {

    const { name } = useParams();

    const [ data, setData ] = useState( [] );

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
            <Container text style={{backgroundColor: 
                '#F0F0F0', paddingBottom: '7em',
              textAlign:'center'}}>
                  <SearchHikes size={'mini'}/>
                    <Header
                        as='h1'
                        content={parkData.name}
                        inverted
                        style={{
                        color: '#1b1c1d',
                        fontSize: mobile ? '1.5em' : '3em',
                        fontWeight: 'normal',
                        marginBottom: mobile ?  '0.25em' : '.5em',
                        // marginTop: mobile ? '0.5em' : '1em',
                        }}
                    />
            </Container>
                // <p>Location:{parkData.location}</p>
                // <p>Schedule:{parkData.schedule}</p>
                // <p>Hidden Gem:{parkData.hidden_gem}</p>
                // <p>Unique:{parkData.unique}</p>
                // <p>Best:{parkData.best}</p>
                // <p>Camping:{parkData.camping}</p>
        );
    }
    return (
        <div className="App">
            <p>Loading...</p>
        </div>
    );
}

export default Park;