import React from 'react';
import Avatar from './components/Avatar';
import './style.css';

function App() {
// passage de valeurs aux propriétés lors de l'appel du composant Avatar
  return (
    <div>
      <h1 className="text-center">Simpsons App 😎</h1>
      <div>
          <Avatar avatar="https://www.stickees.com/files/cartoon/the-simpsons/2239-bart-simpson-.png" firstName="Bart" lastName="Simpson" />
          <Avatar avatar="https://www.stickees.com/files/cartoon/the-simpsons/2248-homer-simpson-happy.png" firstName="Homer" lastName="Simpson" />
          <Avatar avatar="https://www.stickees.com/files/cartoon/the-simpsons/2250-lisa-simpson-sticker.png" firstName='Lisa' lastName='Simpson'/>
      </div>
    </div>
  );
}

export default App;

