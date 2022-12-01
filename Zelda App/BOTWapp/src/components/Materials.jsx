import React, {useState} from 'react'
import { Card, Grid, Image } from 'semantic-ui-react';
import './index.css'

export default function Materials({DATA}) {
  const [query, setQuery]= useState('')
  console.log(query)
  return (
    <React.Fragment>
      <h1>Materials</h1>
      
      <h3><input key={DATA.id} 
      type="text"
      placeholder="Search..."
      className="Search"
      onChange={(e)=> setQuery(e.target.value)}/>
      </h3>
      
      <Grid columns={3}>
    {DATA.filter((materials)=>materials.name.toLowerCase().includes(query) ||
      materials.description.toLowerCase().includes(query))
      .map((materials, i)=>{
        return (
            <Grid.Column key={i}>
            <Card className="Maincard-Ma">
            <Card.Content>
            <Card.Header className='Card-Ma'>{materials.name}</Card.Header>
            <Card.Description>
            <Image src={materials.image}></Image>
            <strong className='Text-Ma'>Description:</strong>
            <p className='Text-Ma'>{materials.description}</p>
            <strong className='Text-Ma'>Common Locations:</strong>
            <p className='Text-Ma'>{String(materials.common_locations)}</p>
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
