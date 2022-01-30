import { Link } from "react-router-dom";
import { Component } from "react";
import axios from "axios";
import Icon from "../../assets/icon/left.png";
import IconRight from "../../assets/icon/right.png";
import Cat from "../../Components/Cat/Cat";
import CatsToBeAdopted from "../CatToBeAdopted/CatsToBeAdopted";
import "./Cats.scss";

const origin = "http://localhost:9001";

class Cats extends Component {
  constructor() {
    super();
    this.state = {
      catsList: [],
      ageFilterType: "olderThan1",
    };
  }

  get displayedCats() {
    return this.state.catsList.filter(({ age }) => {
      return this.state.ageFilterType === "olderThan1" ? age >= 1 : age < 1;
    });
  }

  componentDidMount() {
    axios.get(`${origin}/cats`).then((response) => {
      const ageFilterType =
        JSON.parse(localStorage.getItem("ageFilterType")) ||
        this.state.ageFilterType;
      this.setState({
        ageFilterType,
        catsList: response.data,
      });
    });
  }

  onAgeFilterChanged = (e) => {
    this.setState({
      ageFilterType: e.target.value,
    });
    localStorage.setItem("ageFilterType", JSON.stringify(e.target.value));
  };

  render() {
    return (
      <div className="catss">
        <section className="catss__bottom">
          <div className="catss__row">
            <h4 className="catss__ages catss__ages--years" htmlFor="olderThan1">
              Years old
            </h4>
            <input
              checked={this.state.ageFilterType === "olderThan1"}
              type="radio"
              name="age"
              id="olderThan1"
              value="olderThan1"
              onChange={(e) => {
                this.onAgeFilterChanged(e);
              }}
            />
          </div>
          <div className="catss__row">
            <h4 className="catss__ages catss__ages--feature">
              <span className="catss__num">{this.displayedCats.length}</span>
            </h4>
          </div>
          <div className="catss__row">
            <h4 className="catss__ages" htmlFor="lessThan1">
              Months old
            </h4>
            <input
              className="catss__ages--months"
              checked={this.state.ageFilterType === "lessThan1"}
              type="radio"
              name="age"
              id="lessThan1"
              value="lessThan1"
              onChange={(e) => {
                this.onAgeFilterChanged(e);
              }}
            />
          </div>
        </section>

        <ul className="catss__cats">
          {this.displayedCats.map((cat) => {
            return (
              <li className="cats__cat" key={cat.id}>
                <Cat
                  id={cat.id}
                  name={cat.name}
                  image={cat.image}
                  age={cat.age}
                  getData={this.chosenCat}
                />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
export default Cats;
