import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import {useEffect, useState} from 'react';
import Card from './components/Card';

function App() {

  const [dogs, setDogs] = useState([]);

  useEffect(() => {
    axios.get('/dogs').then(res => {
      console.log(res.data);
      setDogs(res.data);
    })
  }, [])

  return (
    <div className="App">
      <h1>Dogs</h1>
      {dogs.map(dog => <Card url={dog.url}/>)}
    </div>
  );
}

export default App;
