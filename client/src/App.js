import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import {useEffect, useState} from 'react';

function App() {

  useEffect(() => {
    axios.get('/dogs').then(res => {
      console.log(res.data);
    })
  }, [])

  return (
    <div className="App">
    </div>
  );
}

export default App;
