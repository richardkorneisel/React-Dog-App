import React, { Component } from 'react';
import { Route, Link, Switch, Redirect } from "react-router-dom";

export default class BreedList extends Component {    
    
    render() {
        // console.log(this.props);
        const breedsList = [];
        
        for (const property in this.props.breeds) {
            // console.log(property);
            breedsList.push(<p>{property}</p>)
        }
        
        return (
            <div>
                {/* <div class="container">
                    {breedsList}
                </div> */}
                <div className="button">
                    <button onClick={this.props.allBreeds}>All Breeds</button>
                        {breedsList}
                </div>
            </div>
            
        );
    }
}