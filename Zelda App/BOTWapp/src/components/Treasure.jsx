import React from 'react'
import { Card, Grid, Image } from 'semantic-ui-react';

export default function Treasure({DATA}) {
  return (
    <React.Fragment>
      <h1>Treasure</h1>
      <Grid columns={3}>
      {DATA.map((treasure, i)=>{
          return (
              <Grid.Column key={i}>
              <Card>
              <Card.Content>
              <Card.Header>{treasure.name}</Card.Header>
              <Card.Description>
              <strong>Image</strong>
              <Image src={treasure.image}></Image>
              <strong>Description</strong>
              <p>{treasure.description}</p>
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
