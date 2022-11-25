import React from 'react'
import { Card, Grid, Image  } from 'semantic-ui-react';

export default function Monsters({DATA}) {
  return (
    <React.Fragment>
      <h1>Monsters</h1>
      <Grid columns={3}>
      {DATA.map((monsters, i)=>{
          return (
              <Grid.Column key={i}>
              <Card>
              <Card.Content>
              <Card.Header>{monsters.name}</Card.Header>
              <Card.Description>
              <strong>Image</strong>
              <Image src={monsters.image}></Image>
              <strong>Description</strong>
              <p>{monsters.description}</p>
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
