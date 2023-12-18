import { useState } from 'react';
import './App.css';
import Home from './components/HomePage'; 
import SignIn from './components/SignIn'; 

function App() {
  const [route, setRoute] = useState('SignIn'); 

const onRouteChange = (route) =>{
  setRoute(route)
}

  return (
    route === 'SignIn' ? (
      <SignIn onRouteChange={onRouteChange}/>
    ) : (
      <Home onRouteChange={onRouteChange} />
    )
  );
}

export default App;
