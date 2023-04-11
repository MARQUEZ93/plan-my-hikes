import {
    Container,
    Grid,
    Button,
    Header,
    List,
    Icon, 
    Image, 
    Menu, 
    Segment, 
    Sidebar, 
  } from 'semantic-ui-react';

import React,{useState,useEffect} from 'react';


const Questions = ({options, handleButtonClick, selected}) => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    if (windowWidth > 768 ){
        return (<Button.Group>
            {options.map((option) => (
                <Button
                    key={option.key}
                    active={option.value === selected.value}
                    onClick={() => handleButtonClick(option)}
                >
                    {option.text}
                </Button>
            ))}
        </Button.Group>
        );
    } else {
        return (<Sidebar.Pushable as={Segment}>
            <Sidebar
              as={Menu}
              animation='overlay'
              icon='labeled'
              inverted
              vertical
              visible
              width='thin'
            >
              <Menu.Item as='a'>
                <Icon name='home' />
                Home
              </Menu.Item>
              <Menu.Item as='a'>
                <Icon name='gamepad' />
                Games
              </Menu.Item>
              <Menu.Item as='a'>
                <Icon name='camera' />
                Channels
              </Menu.Item>
            </Sidebar>
        
            <Sidebar.Pusher>
              <Segment basic>
                <Header as='h3'>Application Content</Header>
                <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
              </Segment>
            </Sidebar.Pusher>
          </Sidebar.Pushable>

        );
    }
};
export default Questions;