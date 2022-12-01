import React, {useState} from 'react'
import { Card, Grid, Image  } from 'semantic-ui-react';
import './index.css'


export default function Creatures({DATA}) {
  const [query, setQuery]= useState('');
 // const [selects, setSelects]=useState();
  console.log(query)
  return (
    <React.Fragment>
      <h1>Creatures 
      <h3><input key={DATA.id} 
      type="text"
      placeholder="Search..."
      className="Search"
      onChange={(e)=> setQuery(e.target.value)}/>
      </h3>
      </h1>
     
      <Grid columns={3}>
    {DATA.filter((creatures)=>creatures.name.toLowerCase().includes(query) ||
      creatures.description.toLowerCase().includes(query))
      .map((creatures, i)=>{
        return (
            <Grid.Column key={i}>
            <Card className="Maincard-Cr">
            <Card.Content>
            <Card.Header className='Card-Cr'>{creatures.name}</Card.Header>
            <Card.Description>
            <Image src={creatures.image}></Image>
            <strong className='Text-Cr'>Description:</strong>
            <p className='Text-Cr'>{creatures.description}</p>
            <strong className='Text-Cr'>Common Locations:</strong>
            <p className='Text-Cr'>{String(creatures.common_locations)}</p>
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


