import React, {Component} from "react";
import FilteredList from "./FilteredList";
import CardYou from "./CardYou";
import CodingExp from "./CodingExp";

const wics = [
  { name: "Ada Lovelace", field: "Theory", country: "England", year: 1815, death: 1852, imgIndex: 0 },
  { name: "Anita Borg", field: "Systems", country: "USA", year: 1949, death: 2003, imgIndex: 1 },
  { name: "Christine Paulin-Mohring", field: "Systems", country: "France", year: 1962, death: null, imgIndex: 2 },
  { name: "Dorothy Vaughan", field: "Programming", country: "USA", year: 1910, death: 2008, imgIndex: 3 },
  { name: "Éva Tardos", field: "Theory", country: "Hungary", year: 1957, death: null, imgIndex: 4 },
  { name: "Grace Hopper", field: "Compilers", country: "USA", year: 1906, death: 1992, imgIndex: 5 },
  { name: "Hu Qiheng", field: "Networking", country: "China", year: 1934, death: null, imgIndex: 6 },
  { name: "Kathleen Booth", field: "Systems", country: "England", year: 1922, death: null, imgIndex: 7 },
  { name: "Noriko Arai", field: "AI", country: "Japan", year: 1962, death: null, imgIndex: 8 },
  { name: "Priti Shankar", field: "Compilers", country: "India", year: 1947, death: 2011, imgIndex: 9 },
  { name: "Rózsa Péter", field: "Theory", country: "Hungary", year: 1905, death: 1997, imgIndex: 10 },
  { name: "Vera Molnár", field: "Comp. Art", country: "Hungary", year: 1924, death: null, imgIndex: 11 }
];

const you = {
  name: "You", field: "Field", country: "Country", year: "20XX"
};

const options = [
  { id: 1, option: "Never coded before. Isn't Java a synonym for coffee?" },
  { id: 2, option: "A little. I know how to code Hello World!"},
  { id: 3, option: "Some experience. I have a good understanding of the fundamentals, but I want to learn more about different fields within computer science!" }
];

class Body extends Component {
  render() {
    return (
      <div className="App-body">
        <h1 id="history">History</h1>
        <p>Learn more about influential women in computing below!</p>
        <FilteredList items={wics}/>
        <h1 id="future">The future includes <span id="future-you">YOU</span>.</h1>
        <p>Be a part of the solution.</p>
        <CardYou person={you}/>
        <h1 id="learn">Learn</h1>
        <CodingExp choices={options}/>
      </div>
    );
  }
}

export default Body;
