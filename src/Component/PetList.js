import React, { Component } from "react";
import Pet from "./Pet";

class PetList extends Component {
  render() {
    return (
      <div>
        {this.props.pets.map((pet, i) => {
          return <Pet pet={pet} key={i} />;
        })}
      </div>
    );
  }
}

export default PetList;
