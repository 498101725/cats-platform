import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./Pages/Home/Home";
import Cats from "./Pages/Cats/Cats";
import CatDetails from "./Pages/CatDetails/CatDetails";
import CatAdd from "./Pages/CatAdd/CatAdd";
import CatsToBeAdopted from "./Pages/CatToBeAdopted/CatsToBeAdopted";
import Nav from "./Components/Nav/Nav";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/cats/adopted" component={CatsToBeAdopted} />
          <Route path="/cats/add" component={CatAdd} />
          <Route path="/cats/:id" component={CatDetails} />
          <Route path="/cats" component={Cats} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
