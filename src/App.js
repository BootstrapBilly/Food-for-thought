import React from 'react';

//external
import { BrowserRouter, Switch, Route } from "react-router-dom"

//Components
import Recommended from "./Screens/Recommended/Recommended"
import Favourites from "./Screens/Favourites/Favourites"
import Accessibility from "./Screens/Accessibility/Accessibility"

const App = () => {

  return (

    <BrowserRouter>

      <Switch>

        <Route path="/" exact component={Recommended} />
        <Route path="/favourites" component={Favourites} />
        <Route path="/accessibility" component={Accessibility} />

      </Switch>

    </BrowserRouter>

  )

}

export default App;
