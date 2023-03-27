import _ from 'lodash';
import React from 'react';
import { Search, Grid, Header, Segment } from 'semantic-ui-react';
import { Navigate } from "react-router-dom";

const source = [
  {
    title: 'Big Bend National Park (Texas, USA)',
    name: 'Big Bend National Park'
  },
  {
    title: 'Joshua Tree National Park (California, USA)',
    name: 'Joshua Tree National Park'
  },
  {
    title: 'Los Glaciares National Park (Argentina)',
    name: 'Los Glaciares National Park'
  }
];

const initialState = {
  loading: false,
  results: [],
  value: '',
  submit: false,
  name: ''
}

function snakeCase(parkName){
  return parkName.split(' ').join('_');
}

function exampleReducer(state, action) {
  switch (action.type) {
    case 'CLEAN_QUERY':
      return initialState;
    case 'START_SEARCH':
      return { ...state, loading: true, value: action.query };
    case 'FINISH_SEARCH':
      return { ...state, loading: false, results: action.results };
    case 'UPDATE_SELECTION':
      return { ...state, value: action.selection, submit: true, name: action.name };

    default:
      throw new Error()
  }
}

function SearchHikes({mobile = false, size = 'massive'}) {
  const [state, dispatch] = React.useReducer(exampleReducer, initialState)
  const { loading, results, value } = state

  const timeoutRef = React.useRef();

  const handleSearchChange = React.useCallback((e, data) => {
    clearTimeout(timeoutRef.current)
    dispatch({ type: 'START_SEARCH', query: data.value })

    timeoutRef.current = setTimeout(() => {
      if (data.value.length === 0) {
        dispatch({ type: 'CLEAN_QUERY' })
        return redirect("/login");
      }

      const re = new RegExp(_.escapeRegExp(data.value), 'i')
      const isMatch = (result) => re.test(result.title)

      dispatch({
        type: 'FINISH_SEARCH',
        results: _.filter(source, isMatch),
      })
    }, 300)
  }, []);

  React.useEffect(() => {
    return () => {
      clearTimeout(timeoutRef.current)
    }
  }, []);

  if (state.submit){
    return <Navigate to={`/parks/${snakeCase(state.name.toLowerCase())}`} />;
  }
  return (
    <Grid textAlign='center'>
      <Grid.Column>
        <Search
          fluid
          loading={loading}
          placeholder='Find a National Park...'
          onResultSelect={(e, data) => {
            dispatch({ type: 'UPDATE_SELECTION', selection: data.result.title, name: data.result.name})
          }}
          onSearchChange={handleSearchChange}
          results={results}
          value={value}
          size={size}
        />
      </Grid.Column>
    </Grid>
  )
}

export default SearchHikes;