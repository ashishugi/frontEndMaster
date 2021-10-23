import { StrictMode, useState } from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import ThemeContext from "./ThemeContext";
import Pet from "./Pet";
import SearchParams from "./SearchParams";
import Details from "./Details";

const App = () => {
  const [theme] = useState("blue");
  return (
    <ThemeContext.Provider value={theme}>
      <div>
        <Router>
          <Link to="/">
            <h1>Adopt Me!</h1>
          </Link>
          <Switch>
            <Route exact path="/details/:id" component={Details}></Route>
            <Route exact path="/" component={SearchParams}></Route>
          </Switch>
        </Router>
      </div>
    </ThemeContext.Provider>
  );
};

render(<App />, document.getElementById("root"));
