import React, { Component } from "react";
import "./App.css";
import petData from "./Data/pet.json";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pets: []
    }
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
        <header>Pets for Adoption</header>
        {/*  */}
        <nav>
          <ul>
            <li>View all pets</li>
            <li>Potential adoptees</li>
          </ul>
        </nav>
        {/*  */}
        {this.state.pets.map((pet, i) => {
          return (
            <section className="pet-list" key={i}>
              <header>{pet.name.$t}</header>
              <img src={pet.media.photos.photo[3].$t} />
              <button>Save for Later! arf!</button>
            </section>
          );
        })}
      </div>
    );
  }
}

export default App;
