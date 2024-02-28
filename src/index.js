import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import state from './State';
import { Detail } from './Detail';



import reportWebVitals from './reportWebVitals';
import { App } from './App';
import { Nav } from './Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Parent } from './Parent';
import { Count } from './Count';
import { Effect } from './Effect';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Fetch } from './Fetch';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Parent/> */}
    {/* <state /> */}
    {/* {<Count/>} */}
    {/* {<Effect/>} */}
    <BrowserRouter>
    <Routes>
      <Route>
      <Route path='fetchdata' element={<Fetch/>}/>
      <Route path='detail/:id' element={<Detail/>}/>
      </Route>
    </Routes>
    </BrowserRouter>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
