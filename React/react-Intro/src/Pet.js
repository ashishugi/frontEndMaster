import { Link } from "react-router-dom";

const Pet = (props) => {
  const { name, animal, breed, id } = props.petData;
  console.log(props.petData);
  let imageUrl = null;
  if (props.petData.images.length > 0) {
    imageUrl = props.petData.images[0];
  }
  return (
    <div>
      <Link to={`/details/${id}`} className="pet">
        <div className="image-container">
          <img src={imageUrl} alt={name} />
        </div>
        <div className="info">
          <h1>{name}</h1>
          <h2>{animal}</h2>
          <h3>{breed}</h3>
        </div>
      </Link>
    </div>
  );
};

export default Pet;
