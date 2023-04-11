import { useCallback, useEffect, useRef, useReducer } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, Grid, Container } from 'semantic-ui-react';
import _ from 'lodash';

import parks from "../data/parks";

import { initialState, parksReducer } from '../utils/parksReducer';

function ParkSearchBar() {

  const [state, dispatch] = useReducer(parksReducer, initialState);
  const { results, value } = state;

  const navigate = useNavigate();

  const timeoutRef = useRef();

  const handleSearchChange = useCallback((e, data) => {
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

  useEffect(() => {
    return () => {
      clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <Container text style={{textAlign:'center', width: '50%'}}>
      <Grid textAlign='center'>
        <Grid.Column textAlign='center'>
          <Search
            size={'mini'}
            style={{textAlign: 'center', margin: 'auto'}}
            input={{ fluid: true }}
            placeholder="Search for another park..."
            value={value}
            onSearchChange={handleSearchChange}
            onResultSelect={(ev, data) => {
              dispatch({ type: 'CLEAN_QUERY' });
              navigate(`/parks/${data.result.route}`);
            }}
            resultRenderer={(parkResult) => {
              return (<Link onClick={()=>
              { 
                return dispatch({ type: 'CLEAN_QUERY' })}} to={`/parks/${parkResult.route}`}>
                <div>{parkResult.title}</div>
              </Link>);
          }}
          results={results}
        />
        </Grid.Column>
      </Grid>
    </Container>
  );
}

export default ParkSearchBar;
