import React from 'react';
import Avatar from './components/Avatar';
import './style.css';

const simpsons = [ 
  {avatar:"https://www.stickees.com/files/cartoon/the-simpsons/2239-bart-simpson-.png", firstName:"Bart", lastName:"Simpson"},
  {avatar:"https://www.stickees.com/files/cartoon/the-simpsons/2248-homer-simpson-happy.png", firstName:"Homer", lastName:"Simpson"},
  {avatar:"https://www.stickees.com/files/cartoon/the-simpsons/2250-lisa-simpson-sticker.png", firstName:'Lisa', lastName:'Simpson'}
];


function App() {

// passage d'un tableau d'objets à l'appel du composant Avatar

  return (
    <div>
      <h1 className="text-center">Simpsons App 😎</h1>
      <div>
          <Avatar simpson = {simpsons[0]}/>
          <Avatar simpson = {simpsons[1]}/>
          <Avatar simpson = {simpsons[2]}/>
      </div>
    </div>
  );
}

export default App;

