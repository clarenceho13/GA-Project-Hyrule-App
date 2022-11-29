import React from 'react'
import { Menu, Container } from 'semantic-ui-react';
import { Link } from 'react-router-dom';


export default function Navbar() {
  
  return (
    <Menu inverted>
    <Container>
     <Link to='/'>
     <Menu.Item name="The Legend of Zelda: Breathe of the Wild" /> 
     </Link>
    
     <Link to='/creatures1'>
     <Menu.Item name="creatures1" />
     </Link>

     <Link to='/creatures2'>
     <Menu.Item name="creatures2" />
     </Link>
     
     <Link to='/equipment'>
     <Menu.Item name="equipment" />
     </Link>

     <Link to='/materials'>
     <Menu.Item name="materials" /> 
     </Link>

     <Link to='/monsters'>
     <Menu.Item name="monsters" /> 
     </Link>

     <Link to='/treasure'>
     <Menu.Item name="treasure" /> 
     </Link>
     
    </Container>
    </Menu>
  )
}
