import { useEffect, useContext, useState } from "react";
import useBreedList from "./useBreedList";
import Pet from "./Pet";
import ThemeContext from "./ThemeContext";

const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptiles"];
const BREED = [];

const SearchParams = (props) => {
  const [location, setLocation] = useState("");
  const [animal, setAnimal] = useState(ANIMALS[0]);
  const [breed, setBreed] = useState("");
  const [pets, setPets] = useState([]);
  const [breeds, status] = useBreedList(animal);
  const [theme] = useContext(ThemeContext);
  console.log("color", theme);
  useEffect(() => {
    requestPets();
  }, [animal]);
  async function requestPets() {
    const url = `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`;
    const res = await fetch(url);
    const data = await res.json();
    setPets(data.pets);
  }
  const handleSubmit = (e) => {
    console.log("form submitted");
    requestPets();
    e.preventDefault();
  };
  return (
    <div className="search-params">
      Hi
      <form onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="location">Location</label>
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <label htmlFor="">
          Animals
          <select value={animal} onChange={(e) => setAnimal(e.target.value)}>
            {ANIMALS.map((animal, key) => {
              return (
                <option key={key} value={animal}>
                  {animal}
                </option>
              );
            })}
          </select>
        </label>

        <label htmlFor="">
          Breed
          <select value={breed} onChange={(e) => setBreed(e.target.value)}>
            {breeds.map((breed, key) => {
              return (
                <option key={key} value={breed}>
                  {breed}
                </option>
              );
            })}
          </select>
        </label>
        <button style={{ backgroundColor: theme }}>Submit</button>
      </form>
      {pets.map((pet) => {
        return <Pet key={pet.id} petData={pet} />;
      })}
    </div>
  );
};

export default SearchParams;
