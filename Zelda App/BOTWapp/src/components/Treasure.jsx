import React from 'react'
import { Card, Grid, Image } from 'semantic-ui-react';
import './index.css'

export default function Treasure({DATA}) {
  return (
    <React.Fragment>
      <h1>Treasure</h1>
      <br />
      <br />
      <Grid columns={4}>
      {DATA.map((treasure, i)=>{
          return (
              <Grid.Column key={i}>
              <Card className="Maincard-T">
              <Card.Content>
              <Card.Header className='Card-T'>{treasure.name}</Card.Header>
              <Card.Description>
              <Image src={treasure.image}></Image>
              <strong className='Text-T'>Description:</strong>
              <p className='Text-T'>{treasure.description}</p>
              <strong className='Text-T'>Common Locations:</strong>
              <p className='Text-T'>{String(treasure.common_locations)}</p>
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
