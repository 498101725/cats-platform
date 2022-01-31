import "./Cat.scss";
import { Link } from "react-router-dom";
import axios from "axios";

const origin = "http://localhost:9001";

function Cat({ id, name, image, age }) {
  const deleteHandler = (id) => {
    const data = {
      id,
      name,
      age,
    };

    axios
      .delete(`${origin}/cats/${id}`, data)
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="cat">
      <Link className="cat__link" to={`/cats/${id}`}>
        <div className="cat__container">
          <div className="cat__name">
            <h3 className="cat__label">{name}</h3>
            <h4 className="cat__age">
              <strong className="cat__number">{age} year(s) old</strong>
            </h4>
          </div>

          <img className="cat__image" src={image} />
        </div>
      </Link>

      <div className="cat__btn-name">
        <div className="cat__btn">
          <button
            className="cat__remove"
            onClick={() => {
              deleteHandler(id);
            }}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}
export default Cat;
