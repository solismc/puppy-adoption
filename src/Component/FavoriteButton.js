import React, { Component } from "react";

class FavoriteButton extends Component {
  render() {
    if (this.props.isFavorited) {
      return <span>Saved</span>;
    } else {
      return <div />;
    }
  }
}

export default FavoriteButton;