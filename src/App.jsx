import React, { Component } from "react";
import NavBar from "./NavBar";
import CustomersList from "./CustomersList";
import ShoppingCard from "./ShoppingCart";
import Login from './login';
import Dashboard from "./dashboard"
// import {Route} from "react-router"
import{Routes, Route, BrowserRouter} from "react-router-dom"

export default class App extends Component {
  render() {
    return (
      
        // <BrowserRouter>
        // <NavBar />
        //   <Routes>
        //     <Route path="/" component={Login}/>
        //     <Route path="/dashboard" exact component={Dashboard} />
        //     <Route path="/customers" exact component={CustomersList} />
        //     <Route path="/cart" exact component={ShoppingCard} /> 
        //   </Routes>
        // </BrowserRouter>

        <React.Fragment>
          <NavBar />
          <ShoppingCard />
        </React.Fragment>
      
      
    );
  }
}
