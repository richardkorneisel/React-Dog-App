import React, { Component } from 'react';
import './App.css';
import { Route, Link, Switch, Redirect } from "react-router-dom";
import axios from 'axios';
import BreedList from "./BreedList"
import RandomDog from "./RandomDog"

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      breeds: {},
      image: null
    }
  }  
  allBreeds = () => {
    axios.get("https://dog.ceo/api/breeds/list/all", {
      headers: {
        Accept: 'application/json'
      }
    })
      .then(response => {
        // console.log(response.data.mesage)
        this.setState({
          breeds: response.data.message
        })
      })
  }
  allImage = (breed) => {
    axios.get(`https://dog.ceo/api/breed/${breed}/images/random`, {
      headers: {
        Accept: 'application/json'
      }
    })
      .then(response => {
        this.setState({
          image: response.data.message
        })
      })
  }
  // componentDidMount = () => {
  //   this.allImage()
  // }
  render() {
    console.log("Hello", this.state);
    return ( 
      <div>
      <h2>Dog App</h2>
      {/* <RandomDog allImage = {this.allImage}/> */}
      {/* <Switch> */}
        <Route path="/" render={(routerProps) =>
          <BreedList allBreeds={this.allBreeds} {...this.state} {...routerProps} />
        }>
        </Route>
        <Route path="/" render={(routerProps) =>
          <RandomDog allImage = {this.allImage} {...this.state} {...routerProps} />
        }>
        </Route>
      {/* </Switch> */}
      
    </div>
     );
  }
}