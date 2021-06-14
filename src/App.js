import './App.css';
import React from 'react';
import HomePage from './pages/homepage/homepage.component';
import { Route, Switch } from 'react-router-dom';
import ShopPage from './pages/shop/shop.component.jsx';
import Header from './components/header/header.component.jsx';


// const HatsPage = () => (
//   <div>
//     <h1> HATS PAGE </h1>
//   </div>
// );

function App() {
  return (
    <div> 
    <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
{/*        <Route path='/hats' component={HatsPage} />
*/}      
        <Route path='/shop' component={ShopPage} />
      </Switch>
      {/*<HomePage />*/}
    </div>
  );
}

export default App;
