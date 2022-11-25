import React from 'react'
import { Card, Grid, Image } from 'semantic-ui-react';

export default function Equipment({DATA}) {
  return (
    <React.Fragment>
      <h1>Equipment</h1>
      <Grid columns={3}>
    {DATA.map((equipment, i)=>{
        return (
            <Grid.Column key={i}>
            <Card>
            <Card.Content>
            <Card.Header>{equipment.name}</Card.Header>
            <Card.Description>
            <strong>Image</strong>
            <Image src={equipment.image}></Image>
            <strong>Description</strong>
            <p>{equipment.description}</p>
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
