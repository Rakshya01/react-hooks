import logo from './logo.svg';
import './App.css';
import {useState, useCallback, useMemo,useEffect, useRef} from 'react';
import Header from './components/Header';

function App() {
const [ count, setCount] = useState(0);

const newFn = ()=> useCallback(()=>{},[])


 
  return (
<>
<Header newFn={newFn}/>
<h1>{count}</h1>
<button onClick={()=>setCount(prev=>prev+1)}>Click Here</button>
    </>
  );
}

export default App;
