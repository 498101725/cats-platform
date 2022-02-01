import { Link } from "react-router-dom";
import "./Home.scss";

function Home() {
  return (
    <div className="home">
      <div className="home__image">
        <h2 className="home__about-us">About Us</h2>
      </div>
      <div className="home__bottom">
        <div className="home__up">
          <p className="home__paragraph">
            Straycats have very short lives around 3 ~ 5 years. Being homeless,
            foodless, not knowing where the next meal comes from, not always in
            good health. They are forced to bear crises emerging from around.
            Each cat is a unique living life, they deserve to be treated well.
            <br />
            <span className="home__purpose">
              This platform not only aims to help straycats to find a home, but
              also offers chances for people to find back their lost ones.{" "}
            </span>
          </p>

          <p className="home__paragraph">
            Before you bring your favorite cat home through this platform, would
            you mind asking yourself below questions ?{" "}
          </p>
        </div>
        <div className="home__condition home__paragraph">
          <section className="home__checked">
            <input id="first" type="checkbox" className="home__check" />
            <label for="first" className="home__lbl">
              You love cats !
            </label>
          </section>
          <section className="home__checked">
            <input id="second" type="checkbox" className="home__check" />
            <label for="second" className="home__lbl">
              You treat your cat well !{" "}
            </label>
          </section>
          <section className="home__checked">
            <input id="third" type="checkbox" className="home__check" />
            <label for="third" className="home__lbl">
              You will never abandon your cat !
            </label>
          </section>
          <section className="home__checked">
            <input id="fourth" type="checkbox" className="home__check" />
            <label for="fourth" className="home__lbl">
              Your families agree to raise a cat !
            </label>
          </section>
        </div>
      </div>
    </div>
  );
}
export default Home;
