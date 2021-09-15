import React from 'react';
import ListOfCharacters from '../character/ListOfCharacters';
import CharacterDetailDispaly from '../character/CharacterDetailDisplay';
import { Switch, Route } from 'react-router-dom';

export default function App() {
  return (
    <Switch>
      <Route path="/:id">
        <CharacterDetailDispaly />
      </Route>
      <Route exact path="/">
        <ListOfCharacters />
      </Route>
    </Switch>
  );
}
