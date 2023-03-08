import React,{useState,useEffect} from 'react';
import { useParams } from "react-router-dom";
import NoMatch from './NoMatch';

function Park() {

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
            <div className="App">
                <p>Park Name:{parkData.name}</p>
                <p>Location:{parkData.location}</p>
                <p>Schedule:{parkData.schedule}</p>
                <p>Hidden Gem:{parkData.hidden_gem}</p>
                <p>Unique:{parkData.unique}</p>
                <p>Best:{parkData.best}</p>
                <p>Camping:{parkData.camping}</p>
            </div>
        );
    }
    return (
        <div className="App">
            <p>Loading...</p>
        </div>
    );
}

export default Park;