import React, { Component } from "react";
import FavoriteButton from "./FavoriteButton";

class Pet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFavorited: false
    };
  }

  removePetFromLocalStorage = () => {
    let _ids = localStorage.getItem("favPetId");
    _ids = _ids ? _ids.split(",") : [];
    _ids = _ids.filter(id => id != this.props.pet.id.$t);
    localStorage.setItem("favPetId", _ids)
  }

  savePetToLocalStorage = () => {
    console.log("button was clicked");
    let _ids = localStorage.getItem("favPetId");
    _ids = _ids ? _ids.split(",") : [];
    _ids.push(this.props.pet.id.$t);
    localStorage.setItem("favPetId", _ids);
  };

  toggleIsFavorite = () => {
    this.setState({
      isFavorited: !this.state.isFavorited
    });
  };

  favoriteButtonClickEventHandler = () => {
    if (this.state.isFavorited) {
      this.removePetFromLocalStorage()
    } else {
      this.savePetToLocalStorage();
    }
    this.toggleIsFavorite();
  };

  render() {
    return (
      <section className="pet">
        <header>{this.props.pet.name.$t}</header>
        <img class="img" src={this.props.pet.media.photos.photo[3].$t} />
        <button class="save-button" onClick={this.favoriteButtonClickEventHandler}>
          Save for Later!
        </button>
        <FavoriteButton isFavorited={this.state.isFavorited} />
      </section>
    );
  }
}

export default Pet;
