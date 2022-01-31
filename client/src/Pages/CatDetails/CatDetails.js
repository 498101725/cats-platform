import { Component } from "react";
import axios from "axios";
import "./CatDetails.scss";

const origin = "http://localhost:9001";

class CatDetails extends Component {
  state = {
    CatDetails: {},
    error: undefined,
  };

  getMainCatId() {
    if (this.props.match) {
      // if match exist in props, it hits /cats/:id
      return this.props.match.params.id;
    }
  }

  componentDidMount() {
    const id = this.getMainCatId();
    if (!id) {
      this.setState({ CatDetails: {} });
      return;
    }

    axios.get(`${origin}/cats/${id}`).then(
      (response) => {
        this.setState({
          CatDetails: response.data,
          error: undefined,
        });
      },
      ({ response }) => {
        this.setState({ error: response.status });
      }
    );
  }
  render() {
    const {
      name,
      age,
      breed,
      personality,
      health,
      gender,
      city,
      image,
      email,
    } = this.state.CatDetails;

    return (
      <div className="details">
        <div className="details__img">
          <img className="details__profile" src={image} />
        </div>
        <ul className="details__cat">
          <li className="details__cat details__one">Please</li>
          <li className="details__cat details__two">Adopt</li>
          <li className="details__cat details__three">instead</li>
          <li className="details__cat details__four">of</li>
          <li className="details__cat details__five">Shop</li>
          <li className="details__cat details__six">!</li>
        </ul>
        <div className="details__outter">
          <section className="details__section">
            <label className="details__label">Name</label>
            <section className="details__container">
              <span>{name}</span>
            </section>
          </section>

          <section className="details__section">
            <label className="details__label">Age</label>
            <section className="details__container">
              <span>{age} year(s) old</span>
            </section>
          </section>

          <section className="details__section">
            <label className="details__label">Breed</label>

            <section className="details__container">
              <span>{breed}</span>
            </section>
          </section>

          <section className="details__section">
            <label className="details__label">Personality</label>

            <section className="details__container">
              <span>{personality}</span>
            </section>
          </section>

          <section className="details__section">
            <label className="details__label">Health</label>

            <section className="details__container">
              <span>{health}</span>
            </section>
          </section>

          <section className="details__section">
            <label className="details__label">Gender</label>

            <section className="details__container">
              <span>{gender}</span>
            </section>
          </section>

          <section className="details__section">
            <label className="details__label">City</label>

            <section className="details__container">
              <span>{city}</span>
            </section>
          </section>

          <section className="details__section">
            <label className="details__label">Contact</label>

            <section className="details__container">
              <span>{email}</span>
            </section>
          </section>
        </div>
      </div>
    );
  }
}
export default CatDetails;
