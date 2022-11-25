import React from 'react'
import { Card, Grid, Image  } from 'semantic-ui-react';

export default function Creatures2({DATA}) {
  return (
    <React.Fragment>
      <h1>Creatures-NonFood</h1>
      <Grid columns={3}>
    {DATA.map((creatures2, i)=>{
        return (
            <Grid.Column key={i}>
            <Card>
            <Card.Content>
            <Card.Header>{creatures2.name}</Card.Header>
            <Card.Description>
            <strong>Image</strong>
            <Image src={creatures2.image}></Image>
            <strong>Description</strong>
            <p>{creatures2.description}</p>
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
