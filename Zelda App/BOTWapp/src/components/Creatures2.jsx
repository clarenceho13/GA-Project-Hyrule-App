import React from 'react'
import { Card, Grid, Image  } from 'semantic-ui-react';
import './index.css'

export default function Creatures2({DATA}) {
  return (
    <React.Fragment>
      <h1>Creatures:Non-Edible</h1>
      <Grid columns={3}>
    {DATA.map((creatures2, i)=>{
        return (
            <Grid.Column key={i}>
            <Card className="Maincard">
            <Card.Content>
            <Card.Header className="Card">{creatures2.name}</Card.Header>
            <Card.Description>
            <Image src={creatures2.image}></Image>
            <strong>Description:</strong>
            <p className='Text'>{creatures2.description}</p>
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
