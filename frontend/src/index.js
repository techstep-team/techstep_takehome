import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Search from './Search';
import reportWebVitals from './reportWebVitals';
import {Route, Switch, BrowserRouter} from "react-router-dom"

const Routes = () => {
return(
<BrowserRouter>
    <Switch>
      <Route exact path="/" component = {App}/>
      <Route exact path="/search" component = {Search}/>
  </Switch>
</BrowserRouter>
)}

ReactDOM.render(
  <React.StrictMode>
    <Routes/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
