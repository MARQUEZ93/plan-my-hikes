import React,{useState,useEffect} from 'react';

function Park() {
  const [data,setData]=useState([]);
  const getData=()=>{
    fetch('../data.json'
    ,{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    }
    )
      .then(function(response){
        console.log(response);
        return response.json();
      })
      .then(function(myJson) {
        console.log(myJson);
        setData(myJson)
      });
  }
  useEffect(()=>{
    getData();
  },[]);
  return (
    <div className="App">
        <p>HERE</p>
     {
       data && data.length>0
     }
    </div>
  );
}

export default Park;