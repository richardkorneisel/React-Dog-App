import React, { Component } from 'react';
import { Route, Link, Switch, Redirect } from "react-router-dom";

export default class RandomDog extends Component {

    render() {
        // // console.log(this.props);
        // const breedsList = [];

        // for (const property in this.props.breeds) {
        //     // console.log(property);
        //     breedsList.push(<p>{property}</p>)
        // }
        // function noImage(props) {
            const image = <img src={this.props.image} />

            console.log("Goodbye", this.props.image)
            return (
                <div>

                    <form onSubmit={(event) => {
                        event.preventDefault();

                        this.props.allImage(event.target.breed.value)
                    }}>
                        <input type="text" id="dogPic" name="breed" />
                        <input type="submit" value='Submit' />
                    </form>
                    {/* {image !== null && */}
                    <div>
                        {image}
                    </div>
                    {/* } */}
                </div>

            );
        }
    }
// }