import { BrowserRouter, Switch, Route } from "react-router-dom";
import Anatomy from "./pages/Anatomy";
import AnatomyGroup from "./pages/AnatomyGroup";
import Contact from "./pages/Contact";
import Home from "./pages/Home";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/anatomia" component={Anatomy} />
        <Route exact path="/anatomia/:slug" component={AnatomyGroup} />
        <Route exact path="/contato" component={Contact} />
      </Switch>
    </BrowserRouter>
  );
}
