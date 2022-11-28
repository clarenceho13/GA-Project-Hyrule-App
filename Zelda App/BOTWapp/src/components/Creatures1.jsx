import React from 'react'
import { Card, Grid, Image  } from 'semantic-ui-react';
import './index.css'


export default function Creatures1({DATA}) {
  return (
    <React.Fragment>
      <h1>Creatures-Food</h1>
      <Grid columns={3}>
    {DATA.map((creatures1, i)=>{
        return (
            <Grid.Column key={i}>
            <Card className="Maincard">
            <Card.Content>
            <Card.Header className='Card'>{creatures1.name}</Card.Header>
            <Card.Description>
            <Image src={creatures1.image}></Image>
            <strong>Description:</strong>
            <p className='Text'>{creatures1.description}</p>
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
