import axios from "axios";
import { useState } from "react";
import "./CatAdd.scss";

const origin = "http://localhost:9001";

function CatAdd() {
  const catBreeds = [
    "",
    "Domestic Shorthair",
    "American Shorthair",
    "British Shorthair",
    "Exotic Shorthair",
    "Egyptian Mau",
    "Havana",
    "Japanese Bobtail",
    "Himalayan",
    "Javanese",
    "Korat",
    "LaPerm",
    "Manx",
    "Munchkin",
    "others",
  ];

  const personalities = [
    "",
    "Playful",
    "intelligent",
    "Friendly",
    "Sociable",
    "Curious",
    "Lazy and Sleepy",
    "Shy",
    "Timid",
    "Brave",
  ];

  const [data, setData] = useState({
    name: "",
    age: "",
    gender: "girl",
    health: "",
    personality: "",
    email: "",
    breed: "",
    city: "",
    image: null,
  });

  const inputHandler = (e) => {
    const newData = { ...data };
    newData[e.target.name] = e.target.value;
    setData(newData);
  };
  const onEmailHandler = (e) => {
    const email = e.target;
    if (email.validity.typeMismatch) {
      email.setCustomValidity("please input a valid e-mail address!");
      email.reportValidity();
    } else {
      email.setCustomValidity("");
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    debugger;
    axios
      .post(`${origin}/cats`, {
        name: data.name,
        age: data.age,
        gender: data.gender,
        health: data.health,
        personality: data.personality,
        email: data.email,
        breed: data.breed,
        city: data.city,
      })
      .then((response) => {
        console.log(response.data);
      });
  };

  return (
    <div className="container">
      <div className="container__moon"></div>
      <div className="container__cat"></div>
      <div className="add">
        <form onSubmit={submitHandler} className="add__form">
          <div className="add__combination">
            <div className="add__one">
              <div className="add__labels">
                <label className="add__gdr">Gender</label>
                <div className="add__labelss">
                  <section className="add__radio">
                    <label htmlFor="gender">Boy</label>
                    <input
                      value="boy"
                      type="radio"
                      name="gender"
                      onChange={inputHandler}
                      checked={data.gender === "boy"}
                    />
                  </section>
                  <section className="add__radio">
                    <label>Girl</label>
                    <input
                      value="girl"
                      type="radio"
                      name="gender"
                      onChange={inputHandler}
                      checked={data.gender === "girl"}
                    />
                  </section>
                </div>
              </div>
              <div className="add__labels">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Meow's Name"
                  className="add__input"
                  onChange={inputHandler}
                  required
                />
              </div>

              <div className="add__labels">
                <label htmlFor="age">Age</label>

                <input
                  autoComplete="new-password"
                  type="number"
                  name="age"
                  placeholder="please enter a number "
                  className="add__input"
                  onChange={inputHandler}
                  required
                />
              </div>
            </div>

            <div className="add__one">
              <div className="add__labels">
                <label htmlFor="breed">Breed</label>

                <select
                  className={
                    "add__input add__input--select " +
                    (data.breed === "" ? "" : "add__input--selected")
                  }
                  name="breed"
                  onChange={inputHandler}
                  required
                >
                  {catBreeds.map((breed, index) => {
                    return (
                      <option key={index} value={breed}>
                        {breed || "Please Choose Breed"}
                      </option>
                    );
                  })}
                </select>
              </div>

              <div className="add__labels">
                <label htmlFor="personality">Personality</label>

                <select
                  className={`add__input add__input--select ${
                    data.personality === "" ? "" : "add__input--selected"
                  }`}
                  name="personality"
                  onChange={inputHandler}
                  required
                >
                  {personalities.map((personality) => {
                    return (
                      <option key={personality} value={personality}>
                        {personality || "Please Choose Personality"}
                      </option>
                    );
                  })}
                </select>
              </div>

              <div className="add__labels">
                <label htmlFor="health">Health</label>
                <input
                  autoComplete="new-password"
                  type="text"
                  name="health"
                  id="health"
                  placeholder="Health Situation "
                  className="add__input"
                  onChange={inputHandler}
                  required
                />
              </div>
            </div>

            <div className="add__one">
              <div className="add__labels">
                <label htmlFor="city">City</label>
                <input
                  autoComplete="new-password"
                  type="text"
                  name="city"
                  id="city"
                  placeholder="City Found "
                  className="add__input"
                  onChange={inputHandler}
                  required
                />
              </div>

              <div className="add__labels">
                <label htmlFor="email">Email</label>
                <input
                  autoComplete="new-password"
                  type="email"
                  name="email"
                  id="email"
                  placeholder="me@example.com"
                  className="add__input"
                  onBlur={onEmailHandler}
                  onChange={inputHandler}
                  required
                />
              </div>

              <div className="add__labels">
                <button type="submit" className="add__btn">
                  <h2>Upload Meow</h2>
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
export default CatAdd;
