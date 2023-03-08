/* eslint-disable max-classes-per-file */
/* eslint-disable react/no-multi-comp */

import { createMedia } from '@artsy/fresnel';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { InView } from 'react-intersection-observer';
import { Link } from "react-router-dom";
import {
  Button,
  Container,
  Header,
  Icon,
  Image,
  Item,
  Menu,
  Segment,
} from 'semantic-ui-react';
import logo from '../images/bigger.svg';
import Footer from './Footer';
import SearchHikes from './SearchHikes';
import RandomPark from './RandomPark';
import MainMenu from './MainMenu';
import HomepageHeading from './HomepageHeading';
import NoMatch from './NoMatch';

const { MediaContextProvider, Media } = createMedia({
  breakpoints: {
    mobile: 0,
    tablet: 768,
    computer: 1024,
  },
});

/* Heads up!
 * Neither Semantic UI nor Semantic UI React offer a responsive navbar, however, it can be implemented easily.
 * It can be more complicated, but you can create really flexible markup.
 */
class DesktopContainer extends Component {
  state = {};

  toggleFixedMenu = (inView) => this.setState({ fixed: !inView })

  render() {
    const { children, splash, notFound } = this.props;
    const { fixed } = this.state;

    return (
      <Media greaterThan='mobile' >
        <InView onChange={this.toggleFixedMenu}>
          <Segment
            inverted
            textAlign='center'
            style={{ minHeight: 600, padding: '1em 0em', backgroundColor: '#F0F0F0'}}
            vertical
          >
            <MainMenu fixed={fixed} />
            {splash ? <HomepageHeading /> : null}
            {notFound ? (<div><h2>Nothing to see here!</h2>
                <p>
                  <Link to="/">Go to the home page</Link>
                </p></div>) : null }
          </Segment>
        </InView>

        {children}
      </Media>
    )
  }
}

DesktopContainer.propTypes = {
  children: PropTypes.node,
}

class MobileContainer extends Component {
  state = {};

  render() {
    const { children, splash, notFound } = this.props

    return (
      <Media at='mobile'>
        <Segment
          inverted
          textAlign='center'
          style={{ minHeight: 350, padding: '1em 0em', backgroundColor: '#F0F0F0' }}
          vertical
        >
          <Container>
            <MainMenu mobile={true} />
          </Container>
          {splash ? <HomepageHeading mobile={true} /> : null}
            {notFound ? (<div><h2>Nothing to see here!</h2>
                <p>
                  <Link to="/">Go to the home page</Link>
                </p></div>) : null }
        </Segment>
        {children}
      </Media>
    )
  }
};

MobileContainer.propTypes = {
  children: PropTypes.node,
};

const ResponsiveContainer = ({ children, notFound, splash }) => (
  /* Heads up!
   * For large applications it may not be best option to put all page into these containers at
   * they will be rendered twice for SSR.
   */
  <MediaContextProvider>
    <DesktopContainer splash={splash} notFound={notFound}>{children}</DesktopContainer>
    <MobileContainer splash={splash} notFound={notFound}>{children}</MobileContainer>
  </MediaContextProvider>
)

ResponsiveContainer.propTypes = {
  children: PropTypes.node,
}

const Homepage = ({splash=true, notFound=false}) => (
  <ResponsiveContainer splash={splash} notFound={notFound}>
    <Footer/>
  </ResponsiveContainer>
);

export default Homepage;