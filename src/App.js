import React, { Component } from "react";
import "./App.css";
import petData from "./Data/pet.json";
import Pet from "./Component/Pet";
import PetList from "./Component/PetList";

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
        <PetList pets={this.state.pets}/>

      </div>
    );
  }
}

export default App;
