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
import RandomPark from './RandomPark'

const { MediaContextProvider, Media } = createMedia({
  breakpoints: {
    mobile: 0,
    tablet: 768,
    computer: 1024,
  },
});

/* Heads up!
 * HomepageHeading uses inline styling, however it's not the best practice. Use CSS or styled
 * components for such things.
 */
const HomepageHeading = ({ mobile }) => (
  <Container text>
    <Header
      as='h1'
      content='Get your hiking itinerary!'
      inverted
      style={{
        color: '#1b1c1d',
        fontSize: mobile ? '1.5em' : '3em',
        fontWeight: 'normal',
        // marginBottom: mobile ?  '0.25em' : '.5em',
        marginTop: mobile ? '0.75em' : '1.5em',
      }}
    />
    <SearchHikes mobile/>
    <RandomPark mobile />
  </Container>
)

HomepageHeading.propTypes = {
  mobile: PropTypes.bool,
}

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
            <Menu
              fixed={fixed ? 'top' : null}
              // inverted={!fixed}
              pointing={!fixed}
              secondary={!fixed}
              size='large'
            >
              <Container>
                <Menu.Item as='a'>
                  <Image size='small' src={logo} />
                </Menu.Item>
                <Menu.Item position='right'>
                    <Menu.Item active as='a'>Home</Menu.Item >
                    <Menu.Item  as='a' target="_blank" href="https://github.com/MARQUEZ93/plan-my-hikes">About</Menu.Item >
                    <Menu.Item  as='a' href="mailto:planmyhikes@gmail.com">Contact</Menu.Item >
                </Menu.Item>
              </Container>
            </Menu>
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
            <Menu pointing secondary size='large'>
            <Menu.Item as='a' style={{margin:'auto'}}>
              <Image size='small' src={logo} />
            </Menu.Item>
            </Menu>
          </Container>
        <HomepageHeading mobile />
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
  <ResponsiveContainer style={{backgroundColor: '#F0F0F0'}}>
    <Footer mobile/>
  </ResponsiveContainer>
);

export default Homepage;