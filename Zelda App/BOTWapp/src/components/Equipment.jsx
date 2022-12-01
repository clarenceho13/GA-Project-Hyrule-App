import React, {useState} from 'react'
import { Card, Grid, Image } from 'semantic-ui-react';
import './index.css'

export default function Equipment({DATA}) {
  const [query, setQuery]= useState('');
  console.log(query)
  return (
    <React.Fragment>
      <h1>Equipment </h1>
      <h3><input key={DATA.id} 
      type="text"
      placeholder="Search..."
      className="Search"
      onChange={(e)=> setQuery(e.target.value)}/>
      </h3>
      
      <Grid columns={3}>
    {DATA.filter((equipment)=>equipment.name.toLowerCase().includes(query) ||
      equipment.description.toLowerCase().includes(query))
      .map((equipment, i)=>{
        return (
            <Grid.Column key={i}>
            <Card className="Maincard">
            <Card.Content>
            <Card.Header className='Card'>{equipment.name}</Card.Header>
            <Card.Description>
            <Image src={equipment.image}></Image>
            <strong className='Text'>Description:</strong>
            <p className='Text'>{equipment.description}</p>
            <strong className='Text'>Attack:</strong>
            <p className='Text'>{equipment.attack}</p>
            <strong className='Text'>Defense:</strong>
            <p className='Text'>{equipment.defense}</p>
            <strong className='Text'>Common Locations:</strong>
            <p className='Text'>{String(equipment.common_locations)}</p>
            </Card.Description>
            </Card.Content>
            </Card>
            </Grid.Column>
        )
    })}
    </Grid>
    </React.Fragment>
  )
}
