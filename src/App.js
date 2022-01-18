import './App.css';
import { Game } from './components/Game';
import Splash from './components/Splash/Splash';
import {useEffect, useState} from 'react';

function App() {
  const  [splashTime, setSplashTime] = useState(6);

  const splashStatus = splashTime > 3 
    ? 'active'
    : splashTime === 0 ? 'finished' : 'fade-out'

  useEffect(() => {
      if(splashTime > 0){
          const timerId = setTimeout(() => {
              setSplashTime(splashTime - 1);
          }, 1000)
          return () => clearTimeout(timerId);
      }
  });

  return (
    <div className="game">
      { splashStatus !== 'finished' ? (
        <Splash splashStatus={splashStatus}/>
      ) : (
        <Game/>
      )}
    </div>
  );
}

export default App;
