import React, {useState} from 'react'
import { Card, Grid, Image  } from 'semantic-ui-react';
import './index.css'

export default function Monsters({DATA}) {
  const [query, setQuery]= useState('')
  console.log(query)
  return (
    <React.Fragment>
      <h1>Monsters
      <h3><input key={DATA.id} 
      type="text"
      placeholder="Search..."
      className="Search"
      onChange={(e)=> setQuery(e.target.value)}/>
      </h3>
      </h1>
      <Grid columns={3}>
      {DATA.filter((monsters)=>monsters.name.toLowerCase().includes(query))
        .map((monsters, i)=>{
          return (
              <Grid.Column key={i}>
              <Card className="Maincard">
              <Card.Content>
              <Card.Header className='Card'>{monsters.name}</Card.Header>
              <Card.Description>
              <Image src={monsters.image}></Image>
              <strong>Description</strong>
              <p className='Text'>{monsters.description}</p>
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
