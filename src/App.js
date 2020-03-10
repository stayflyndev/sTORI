import React from 'react';
import logo from './logo.svg';
import './App.css';
import ProductList from  './components/ProductList.component'
import Navbar from './components/Navagation/NavBar.component'
import {Route, Switch} from 'react-router-dom'

function App() {
  return (

    <div className="App">
    {/* switch renders one route if we dont want to accidently render more than one component */}
    <Navbar />
      <Switch>
   
     <Route exact path='/' component={ProductList} />
    </Switch>
    </div>
  );
}

export default App;

// {
//   ProductData.map(({title, id,}) => (
//       <SingleProduct title={title} key={id} />
//   ))
// }