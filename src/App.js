import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import home from "./pages/home";
import knowledges from "./pages/knowledges";
import contact from "./pages/contact";
import err404 from "./pages/err404";

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={home} />
          <Route path="/competences" component={knowledges} />
          <Route path="/contact" component={contact} />
          <Route component={err404} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
