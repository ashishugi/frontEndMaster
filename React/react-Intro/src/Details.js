import React from "react";
import Carousel from "./Carousel";
import { withRouter } from "react-router";
import ErrorBoundary from "./ErrorBoundary";

class Details extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      data: "",
    };
  }
  async componentDidMount() {
    const url = `http://pets-v2.dev-apis.com/pets?id=${this.props.match.params.id}`;
    const data = await fetch(url);
    const res = await data.json();
    this.setState({
      data: res.pets.length > 0 ? res.pets[0] : "",
      loading: false,
    });
  }
  render() {
    console.log(this.state.data);
    const { name, animal, breed, description, images } = this.state.data;
    // const imageUrl =
    //   this.state.animal.images.length > 0 ? this.state.animal.images[0] : null;
    const imageUrl = "";
    return (
      <div>
        {this.state.loading ? (
          <h1>Loading ....</h1>
        ) : (
          <div className="details">
            <Carousel images={images} />
            <div>
              <h1>{name}</h1>
              <h2>{breed}</h2>
              <h3>{description}</h3>

              <button>Adopt {name}</button>
            </div>
          </div>
        )}
      </div>
    );
  }
}
const DetailsWithRouter = withRouter(Details);

export default function DetailsErrorBoundary(props) {
  return (
    <ErrorBoundary>
      <DetailsWithRouter {...props} />
    </ErrorBoundary>
  );
}
