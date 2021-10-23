import React from "react";
class Carousel extends React.Component {
  state = { active: 0 };
  static defaultProps = {
    images: ["http://pets-images.dev-apis.com/pets/none.jpg"],
  };

  handleImageClick = (index) => {
    this.setState({
      active: index,
    });
  };
  render() {
    const { active } = this.state;
    const { images } = this.props;
    return (
      <div className="carousel">
        <img src={images[active]} alt="animals" />
        <div className="carousel-smaller">
          {images.map((photo, index) => {
            return (
              <img
                src={photo}
                alt={photo}
                key={photo}
                onClick={() => this.handleImageClick(index)}
                className={index === active ? "active" : ""}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default Carousel;
