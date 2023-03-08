import {
    Container,
    Grid,
    Header,
    List,
    Segment,
  } from 'semantic-ui-react';

const Footer = () => (
<Segment inverted vertical style={{ padding: '6em 0em' }}>
      <Container>
        <Grid divided inverted stackable>
          <Grid.Row>
            <Grid.Column width={7}>
            <Header as='h4' inverted>
                Plan My Hikes - Powered by ChatGPT
              </Header>
              <List link inverted>
                <List.Item as='a' 
                  href="mailto:planmyhikes@gmail.com">Contact</List.Item>
                <List.Item as='a' 
                  target="_blank"
                  href="https://github.com/MARQUEZ93/plan-my-hikes">
                    Github</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={7}>
              <Header inverted as='h4' 
              content='Created by Alejandro E. Marquez' />
              <List link inverted>
                <List.Item href="https://www.linkedin.com/in/dromarquez/" 
                  target="_blank"
                  as='a'>LinkedIn</List.Item>
                <List.Item href="https://www.dromarquez.com/projects"
                  target="_blank"
                  as='a'>Portfolio</List.Item>
              </List>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
);
export default Footer;