import _ from 'lodash';
import React from 'react';
import { Search, Grid } from 'semantic-ui-react';
import { Navigate } from "react-router-dom";

import parks from "../data/parks";

import { initialState, parksReducer } from '../utils/parksReducer';

function SearchHikes({isMobile = false, size = 'massive'}) {
  const [state, dispatch] = React.useReducer(parksReducer, initialState);
  const { loading, results, value } = state;

  const timeoutRef = React.useRef();

  const handleSearchChange = React.useCallback((e, data) => {
    clearTimeout(timeoutRef.current);
    dispatch({ type: 'START_SEARCH', query: data.value });

    timeoutRef.current = setTimeout(() => {
      if (data.value.length === 0) {
        dispatch({ type: 'CLEAN_QUERY' });
      }

      const re = new RegExp(_.escapeRegExp(data.value), 'i');
      const isMatch = (result) => re.test(result.title);

      dispatch({
        type: 'FINISH_SEARCH',
        results: _.filter(parks, isMatch),
      });
    }, 300);
  }, []);

  React.useEffect(() => {
    return () => {
      clearTimeout(timeoutRef.current);
    };
  }, []);

  if (state.submit) {
    return <Navigate to={`/parks/${state.route}`} />;
  }
  return (
    <Grid textAlign='center' style={{paddingTop: '1em', paddingBottom: '1em'}}>
      <Grid.Column>
        <Search
          fluid
          loading={loading}
          noResultsMessage='No parks found.'
          placeholder='Find a National Park...'
          onResultSelect={(e, data) => {
            dispatch({ type: 'UPDATE_SELECTION', selection: data.result.title, name: data.result.name, route: data.result.route})
          }}
          onSearchChange={handleSearchChange}
          results={results}
          value={value}
          size={isMobile ? 'large' : 'massive'}
        />
      </Grid.Column>
    </Grid>
  )
}

export default SearchHikes;