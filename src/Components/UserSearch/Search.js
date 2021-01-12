import React from "react";
import ReactDOM from "react-dom";
import "./Search.css";
import { Card } from "@material-ui/core";

const availableLocations = ["Berlin", "Frankfurt", "Munich"];

const fakeDishes = [
  { id: 1, img: "", name: "pad thai", category: "thai" }, // img, allergies, price, preparationTime
  { id: 2, img: "", name: "pizza", category: "chinese" }, // img, allergies, price, preparationTime
  { id: 3, img: "", name: "water", category: "german" }, // img, allergies, price, preparationTime
  { id: 4, img: "", name: "couscous salad", category: "norwegian" }, // img, allergies, price, preparationTime
];
const fakeChefs = [
  {
    id: 1,
    profile_img: "qdjoqiwdjqiwjd",
    restauarant_logo_img: "qdjoqiwdjqiwjd",
    name: "greg",
    restName: "Chez Greg",
    location: "Berlin",
    dishes: [1, 2, 3, 4],
  },
  { id: 2, name: "bob", restName: "Chez bob", location: "Berlin", dishes: [4] },
  {
    id: 3,
    name: "steve",
    restName: "Chez steve",
    location: "Frankfurt",
    dishes: [1, 4],
  },
  {
    id: 4,
    name: "mick",
    restName: "Chez mick",
    location: "Munich",
    dishes: [3, 4],
  },
];

function LocalChefs(props) {
  return (
    <div>
      {props.localChefs.map((chef) => (
        <div className="chef-card">
          <h3>{chef.name}</h3>
          <div className="dishes-list">
            {chef.dishes.map((dishID) => (
              <Card>
                {fakeDishes.find((fakeDish) => fakeDish.id === dishID).name}
              </Card>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default function UserSearch() {
  const [cityTerm, setCityTerm] = React.useState("");
  const [cuisineTerm, setCuisineTerm] = React.useState("");
  const [searchResults, setSearchResults] = React.useState([]);
  const [localChefs, setLocalChefs] = React.useState([]);

  const handleCityTermChange = (e) => {
    setCityTerm(e.target.value);
  };
  const handleCuisineTermChange = (e) => {
    setCuisineTerm(e.target.value);
  };
  React.useEffect(() => {
    const localChefs = fakeChefs.filter((chef) =>
      chef.location.includes(cityTerm)
    );
    setLocalChefs(localChefs);

    const results = fakeDishes.filter((dish) =>
      dish.category.includes(cuisineTerm)
    );
    //setSearchResults(results);
  }, [cityTerm, cuisineTerm]);
  return (
    <div className="App">
      <input
        type="text"
        placeholder="City"
        value={cityTerm}
        onChange={handleCityTermChange}
      />
      <input
        type="text"
        placeholder="Cuisine"
        value={cuisineTerm}
        onChange={handleCuisineTermChange}
      />
      {cityTerm && <h2>Your local chefs in {cityTerm}</h2>}
      <LocalChefs localChefs={localChefs} />
      <ul>
        {searchResults.map((item) => (
          <li>
            {item.category} - {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
