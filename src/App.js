import React, { Component } from "react";
import "./App.css";
import petData from "./Data/pet.json";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pets: []
    };
  }

  componentDidMount() {
    this.setState({
      pets: petData.petfinder.pets.pet
    });
    console.log(petData);
  }

  render() {
    return (
      <div className="App">
          <header className="pets-header">Pupps Looking for a Home</header>
        <nav className="nav-ul">
          <ul>
            <li>View all pets</li>
            <li>Potential adoptees</li>
          </ul>
        </nav>
        <section className="all-pets">
        {this.state.pets.map((pet, i) => {
          return (
            <section className="pet-list" key={i}>
              <header>{pet.name.$t}</header>
              <img src={pet.media.photos.photo[3].$t} height="300" width="300"/>
              <button className="buttons">Save for Later! arf!</button>
            </section>
          );
        })}
        </section>
      </div>
    );
  }
}

export default App;
