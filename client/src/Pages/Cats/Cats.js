import { Component } from "react";
import axios from "axios";
import Cat from "../../Components/Cat/Cat";
import "./Cats.scss";

const origin = "http://localhost:9001";

class Cats extends Component {
  constructor() {
    super();
    this.state = {
      catsList: [],
      ageFilterType: "olderThan1",
      image: null,
      name: "",
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

    // axios.get(`${origin}/cats/upload`).then(({ data }) => {
    //   this.setState({ image: `${origin}${data.path}` });
    // });
  }

  onAgeFilterChanged = (e) => {
    this.setState({
      ageFilterType: e.target.value,
    });
    localStorage.setItem("ageFilterType", JSON.stringify(e.target.value));
  };
  onNameChanged = (e) => {
    console.log(e.target.value);
    this.setState({
      name: e.target.value,
    });
  };

  render() {
    return (
      <div className="catss">
        <section className="catss__bottom">
          <div className="catss__row">
            <label
              className="catss__ages catss__ages--years"
              htmlFor="olderThan1"
            >
              Years old
            </label>
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
            <label className="catss__ages catss__ages--feature">
              <span className="catss__num">{this.displayedCats.length}</span>
            </label>
          </div>
          <div className="catss__row">
            <label className="catss__ages" htmlFor="lessThan1">
              Months old
            </label>
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

        <section className="catss__name">
          <input
            className="catss__ipt"
            type="text"
            placeholder="Please enter Meow's name"
            value={this.state.name}
            onChange={(e) => {
              this.onNameChanged(e);
            }}
          />
        </section>

        {/* duplicate code */}
        <div>
          {" "}
          {this.displayedCats
            .filter((cat) => {
              return cat.name === this.state.name;
            })
            .map((cat) => {
              return (
                <div className="filtered" key={cat.id}>
                  <Cat
                    id={cat.id}
                    name={cat.name}
                    image={cat.image}
                    age={cat.age}
                  />
                </div>
              );
            })}
        </div>
        {/* duplicate code */}
        <ul className="catss__cats">
          {this.displayedCats
            .filter((cat) => {
              return cat.name !== this.state.name;
            })
            .map((cat) => {
              return (
                <li className="cats__cat" key={cat.id}>
                  <Cat
                    id={cat.id}
                    name={cat.name}
                    image={cat.image}
                    age={cat.age}
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
