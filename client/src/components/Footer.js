import {
    Container,
    Grid,
    Header,
    List,
    Segment,
  } from 'semantic-ui-react';

const Footer = () => (
<Segment inverted vertical style={{ padding: '5em 0em' }}>
      <Container>
        <Grid divided inverted stackable>
          <Grid.Row>
            <Grid.Column width={3}>
              <Header inverted as='h4' content='Home' />
              <List link inverted>
                <List.Item as='a'>About</List.Item>
                <List.Item as='a'>Contact</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={6}>
              <Header inverted as='h4' content='Created by Alejandro E. Marquez' />
              <List link inverted>
                <List.Item as='a'>Github</List.Item>
                <List.Item as='a'>LinkedIn</List.Item>
                <List.Item as='a'>Portfolio</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={6}>
              <Header as='h4' inverted>
                Open Source Repository
              </Header>
              <p>
                Follow this script if you want to query & save ChatGPT results yourself! 
              </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
);
export default Footer;