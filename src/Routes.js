import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Main from './Pages/Main/Main';
import Login from './Pages/Login/Login';
import Delivery from './Pages/Delivery/Delivery';
import Purchase from './Pages/purchase/Purchase';
import CartList from './Pages/CartList/CartList';
import RecipeInfo from './Pages/RecipeInfo/RecipeInfo';
import ProductInfo from './Pages/ProductInfo/ProductInfo';
import Comments from './Pages/Comments/Comments';
import Payment from './Pages/Payment/Payment';
import Signup from './Pages/Signup/Signup';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/delivery" component={Delivery} />
          <Route exact path="/Purchase" component={Purchase} />
          <Route exact path="/Payment" component={Payment} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/recipeinfo/:id" component={RecipeInfo} />
          <Route exact path="/ingredients/:id" component={ProductInfo} />
          <Route exact path="/cartlist" component={CartList} />
          <Route exact path="/comments" component={Comments} />
          <Route exact path="/signup" component={Signup} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
