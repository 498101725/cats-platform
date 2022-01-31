import { Component } from "react";
import "./CatsToBeAdopted.scss";

class CatsToBeAdopted extends Component {
  state = {
    reasons: [
      "You Save a Life",
      "You Save Money",
      "Your Heart Benefits",
      "Your Mental Health Benefits",
      "You Change a Homeless Cat's Whole World",
    ],
  };
  render() {
    return (
      <div className="toBeAdopted">
        <div className="toBeAdopted__moon"></div>
        <div className="toBeAdopted__cat"></div>
        <section className="toBeAdopted__bottom">
          <h1 className="toBeAdopted__header">
            <ul className="details__cat">
              <li className="details__cat details__two">Adopt</li>
              <li className="details__cat details__three">instead</li>
              <li className="details__cat details__four">of</li>
              <li className="details__cat details__five">Shop</li>
            </ul>
          </h1>
          {this.state.reasons.map((reason) => {
            return (
              <h3 className="toBeAdopted__sentence" key={reason}>
                {reason}
              </h3>
            );
          })}
        </section>
      </div>
    );
  }
}
export default CatsToBeAdopted;
