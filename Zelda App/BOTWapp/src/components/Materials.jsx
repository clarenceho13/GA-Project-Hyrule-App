import React from 'react'
import { Card, Grid, Image } from 'semantic-ui-react';
import './index.css'



export default function Materials({DATA}) {
  return (
    <React.Fragment>
      <h1>Materials</h1>
      <Grid columns={3}>
    {DATA.map((materials, i)=>{
        return (
            <Grid.Column key={i}>
            <Card className="Maincard">
            <Card.Content>
            <Card.Header className='Card'>{materials.name}</Card.Header>
            <Card.Description>
            <Image src={materials.image}></Image>
            <strong>Description:</strong>
            <p className='Text'>{materials.description}</p>
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
