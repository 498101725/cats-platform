import "./Cat.scss";
import { Link } from "react-router-dom";
import axios from "axios";

const origin = "http://localhost:9001";

function Cat({ id, name, image, age, refreshList }) {
  const deleteHandler = (id) => {
    const data = {
      id,
      name,
      age,
      image,
    };

    axios
      .delete(`${origin}/cats/${id}`, data)
      .then((data) => {
        refreshList();
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
            <span className="cat__label">{name}</span>
            <span className="cat__age">
              <strong className="cat__number">{age} year(s) </strong>
            </span>
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
