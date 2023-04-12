import {
    Container,
    Image,
    Menu,
  } from 'semantic-ui-react';
import { Link } from "react-router-dom";
import logo from '../images/bigger.svg';


function MainMenu({mobile=false}){
    if (mobile) {
        return (
            <Menu widths='1' borderless pointing size='large'>
                <Link to="/"><Menu.Item as='a' style={{margin:'auto'}}>
                    <Image size='small' src={logo} />
                </Menu.Item></Link>
            </Menu>
        );
    }
    return (<Menu
              pointing
              secondary
              size='large'
            >
              <Container>
                <Link to="/">
                  <Menu.Item as='a'>
                    <Image size='small' src={logo} />
                  </Menu.Item>
                </Link>
                <Menu.Item position='right'>
                    <Link to="/"><Menu.Item active as='a'>Home
                      </Menu.Item ></Link>
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