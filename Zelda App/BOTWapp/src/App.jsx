import React, { useState,useEffect } from 'react'
import { Container, Dimmer, Loader } from 'semantic-ui-react';
import { Routes , Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Creatures from './components/Creatures';
import Equipment from './components/Equipment';
import Materials from './components/Materials';
import Monsters from './components/Monsters';
import Treasure from './components/Treasure';

function App() {
  const [creatures, setCreatures]=useState([]);
  //const [creatures2, setCreatures2]=useState([]); //set the initial as empty arrays, data will be pushed in setState
  const [equipment, setEquipment]=useState([]);
  const [materials, setMaterials]=useState([]);
  const [monsters, setMonsters]=useState([]);
  const [treasure, setTreasure]=useState([]);
  const [loading, setLoading]=useState(true); //keep track of whether the api is fetched

//assign variables to api
const creaturesUrl="https://botw-compendium.herokuapp.com/api/v2/category/creatures?format=json"
const equipmentUrl="https://botw-compendium.herokuapp.com/api/v2/category/equipment?format=json"
const materialsUrl="https://botw-compendium.herokuapp.com/api/v2/category/materials?format=json"
const monstersUrl="https://botw-compendium.herokuapp.com/api/v2/category/monsters?format=json"
const treasureUrl="https://botw-compendium.herokuapp.com/api/v2/category/treasure?format=json"


//fetch data through useEffect 
useEffect(()=>{
const fetchCreatures=async ()=>{
  const res=await fetch(creaturesUrl);
  let DATA= await res.json();
  setLoading(true);
  setCreatures([...DATA.data.food,...DATA.data.non_food]);
  //setCreatures(DATA.data.non_food);
  setLoading(false);
}

const fetchEquipment=async ()=>{
  const res=await fetch(equipmentUrl);
  let DATA= await res.json();
  setLoading(true);
  setEquipment(DATA.data)
  setLoading(false);
}
const fetchMaterials=async ()=>{
  const res=await fetch(materialsUrl);
  let DATA= await res.json();
  setLoading(true);
  setMaterials(DATA.data)
  setLoading(false);
}
const fetchMonsters=async ()=>{
  const res=await fetch(monstersUrl);
  let DATA= await res.json();
  setLoading(true);
  setMonsters(DATA.data)
  setLoading(false);
}
const fetchTreasure=async ()=>{
  const res=await fetch(treasureUrl);
  let DATA= await res.json();
  setLoading(true);
  setTreasure(DATA.data)
  setLoading(false);
}
//call the functions
fetchCreatures(); 
fetchEquipment();
fetchMaterials();
fetchMonsters();
fetchTreasure();
},[])
  return (
    <div>
    <Navbar />
     <Container> 
     {loading ? (
      <Dimmer active>
      <Loader>Loading</Loader>
      </Dimmer>
      ): ( <Routes> 
        <Route path='/' element={<Home />}> 
        </Route>
        <Route path='/creatures' element={<Creatures DATA={creatures}/>}> 
        </Route>
        <Route path='/equipment' element={<Equipment DATA={equipment} />}>
        </Route>
        <Route path='/materials' element={<Materials DATA={materials} />}>
        </Route>
        <Route path='/monsters' element={<Monsters DATA={monsters} />}> 
        </Route>
        <Route path='/treasure' element={<Treasure DATA={treasure} />}> 
        </Route>
      </Routes>)}
      
     </Container>
      <Container>
      
      
      </Container>
    </div>
  )
}

export default App
