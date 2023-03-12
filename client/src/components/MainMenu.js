import {
    Container,
    Image,
    Menu,
  } from 'semantic-ui-react';
import logo from '../images/bigger.svg';

function MainMenu({mobile=false}){
    if (mobile) {
        return (
            <Menu pointing secondary size='large'>
                <Menu.Item as='a' style={{margin:'auto'}}>
                    <Image size='small' src={logo} />
                </Menu.Item>
            </Menu>
        );
    }
    return (<Menu
              pointing
              secondary
              size='large'
            >
              <Container>
                <Menu.Item as='a'>
                  <Image size='small' src={logo} />
                </Menu.Item>
                <Menu.Item position='right'>
                    <Menu.Item active as='a'>Home</Menu.Item >
                    <Menu.Item as='a' target="_blank" href=
                        "https://github.com/MARQUEZ93/plan-my-hikes">
                            About</Menu.Item >
                    <Menu.Item  as='a' href=
                        "mailto:planmyhikes@gmail.com">Contact</Menu.Item >
                </Menu.Item>
              </Container>
            </Menu>
    );
};

export default MainMenu;