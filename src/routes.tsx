import { BrowserRouter, Switch, Route } from "react-router-dom";
import Anatomy from "./pages/Anatomy";
import Home from "./pages/Home";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/anatomia" component={Anatomy} />
      </Switch>
    </BrowserRouter>
  );
}
