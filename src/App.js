import React from 'react';
import Avatar from './components/Avatar';
import './style.css';


const simpson1 = {avatar:"https://www.stickees.com/files/cartoon/the-simpsons/2239-bart-simpson-.png", firstName:"Bart", lastName:"Simpson"};
const simpson2 = {avatar:"https://www.stickees.com/files/cartoon/the-simpsons/2248-homer-simpson-happy.png", firstName:"Homer", lastName:"Simpson"};
const simpson3 = {avatar:"https://www.stickees.com/files/cartoon/the-simpsons/2250-lisa-simpson-sticker.png", firstName:'Lisa', lastName:'Simpson'}


function App() {
  
// passage de 3 objets au composant Avatar (+ modification en conséquence du composant Avatar.js -> props.simpson.firstName (au lieu de props.firstName))

  return (
    <div>
      <h1 className="text-center">Simpsons App 😎</h1>
      <div>
          <Avatar simpson = {simpson1}/>
          <Avatar simpson = {simpson2}/>
          <Avatar simpson = {simpson3}/>
      </div>
    </div>
  );
}

export default App;

