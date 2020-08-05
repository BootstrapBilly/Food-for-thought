import React from 'react';

//external
import { BrowserRouter, Switch, Route } from "react-router-dom"

//Components
import Food_ideas from "./Screens/Food_ideas/Food_ideas"
import Favourites from "./Screens/Favourites/Favourites"
import Accessibility from "./Screens/Accessibility/Accessibility"

const App = () => {

  return (

    <BrowserRouter>

      <Switch>

        <Route path="/" exact component={Food_ideas} />
        <Route path="/favourites" component={Favourites} />
        <Route path="/accessibility" component={Accessibility} />

      </Switch>

    </BrowserRouter>

  )

}

export default App;
