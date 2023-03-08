/* eslint-disable max-classes-per-file */
/* eslint-disable react/no-multi-comp */

import { createMedia } from '@artsy/fresnel';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { InView } from 'react-intersection-observer';
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
    const { children } = this.props;
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
            <HomepageHeading />
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
    const { children } = this.props

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
        <HomepageHeading mobile={true} />
        </Segment>
        {children}
      </Media>
    )
  }
};

MobileContainer.propTypes = {
  children: PropTypes.node,
};

const ResponsiveContainer = ({ children }) => (
  /* Heads up!
   * For large applications it may not be best option to put all page into these containers at
   * they will be rendered twice for SSR.
   */
  <MediaContextProvider>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </MediaContextProvider>
)

ResponsiveContainer.propTypes = {
  children: PropTypes.node,
}

const Homepage = () => (
  <ResponsiveContainer>
    <Footer/>
  </ResponsiveContainer>
);

export default Homepage;