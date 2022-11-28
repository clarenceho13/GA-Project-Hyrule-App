import React from 'react'
import { Card, Grid, Image  } from 'semantic-ui-react';
import './index.css'

export default function Monsters({DATA}) {
  return (
    <React.Fragment>
      <h1>Monsters</h1>
      <Grid columns={3}>
      {DATA.map((monsters, i)=>{
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
