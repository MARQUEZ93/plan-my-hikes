/* eslint-disable max-classes-per-file */
/* eslint-disable react/no-multi-comp */
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import {
  Container,
  Segment,
} from 'semantic-ui-react';
import MainMenu from './MainMenu';

import { MediaContextProvider, Media } from '../utils/breakpoints'; 

class DesktopContainer extends Component {
  render() {
    const { children} = this.props;

    return (
      <Media greaterThan='mobile' >
          <Segment
            inverted
            textAlign='center'
            style={{backgroundColor: '#F0F0F0', height: '100%'}}
            vertical
          >
            <MainMenu/>
          </Segment>
        {children}
      </Media>
    )
  }
}

DesktopContainer.propTypes = {
  children: PropTypes.node,
}

class MobileContainer extends Component {
  render() {
    const { children } = this.props;
    return (
      <Media at='mobile'>
        <Segment
          inverted
          textAlign='center'
          vertical
        >
          <Container>
            <MainMenu mobile={true} />
          </Container>
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

const SiteHeader = () => <ResponsiveContainer> </ResponsiveContainer>;

export default SiteHeader;