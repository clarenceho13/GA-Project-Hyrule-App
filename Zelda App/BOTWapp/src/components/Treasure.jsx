import React from 'react'
import { Card, Grid, Image } from 'semantic-ui-react';
import './index.css'


export default function Treasure({DATA}) {
  return (
    <React.Fragment>
      <h1>Treasure</h1>
      <Grid columns={3}>
      {DATA.map((treasure, i)=>{
          return (
              <Grid.Column key={i}>
              <Card className="Maincard">
              <Card.Content>
              <Card.Header className='Card'>{treasure.name}</Card.Header>
              <Card.Description>
              <Image src={treasure.image}></Image>
              <strong>Description:</strong>
              <p className='Text'>{treasure.description}</p>
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
