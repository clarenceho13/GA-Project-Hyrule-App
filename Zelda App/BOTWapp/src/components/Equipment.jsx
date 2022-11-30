import React, {useState} from 'react'
import { Card, Grid, Image } from 'semantic-ui-react';
import './index.css'

export default function Equipment({DATA}) {
  const [query, setQuery]= useState('')
  console.log(query)
  return (
    <React.Fragment>
      <h1>Equipment 
      <h3><input key={DATA.id} 
      type="text"
      placeholder="Search..."
      className="Search"
      onChange={(e)=> setQuery(e.target.value)}/>
      </h3>
      </h1>
      <Grid columns={3}>
    {DATA.filter((equipment)=>equipment.name.toLowerCase().includes(query))
      .map((equipment, i)=>{
        return (
            <Grid.Column key={i}>
            <Card className="Maincard">
            <Card.Content>
            <Card.Header className='Card'>{equipment.name}</Card.Header>
            <Card.Description>
            <Image src={equipment.image}></Image>
            <strong>Description:</strong>
            <p className='Text'>{equipment.description}</p>
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
