import React from 'react'
import { Card, Grid, Image } from 'semantic-ui-react';

export default function Materials({DATA}) {
  return (
    <React.Fragment>
      <h1>Materials</h1>
      <Grid columns={3}>
    {DATA.map((materials, i)=>{
        return (
            <Grid.Column key={i}>
            <Card>
            <Card.Content>
            <Card.Header>{materials.name}</Card.Header>
            <Card.Description>
            <strong>Image</strong>
            <Image src={materials.image}></Image>
            <strong>Description</strong>
            <p>{materials.description}</p>
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
