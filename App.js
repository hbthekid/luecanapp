import React from "react";
import * as eva from "@eva-design/eva";
import { ApplicationProvider, IconRegistry } from "@ui-kitten/components";
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { AppRegistry } from "react-native";
import { NativeRouter, Route, Switch } from "react-router-native";
import { default as theme } from './assets/custom-theme.json';
import { name as appName } from "./app.json";
import Index from "./src/Index";
import CameraComp from "./src/Camera";
import SelectImage from "./src/SelectImage";
import { BookContextProvider } from "./src/context/BookContext";

export default function App() {
  return (
    <NativeRouter>
      <Switch>
      <ApplicationProvider {...eva} theme={{ ...eva.light, ...theme }}>
        <IconRegistry icons={EvaIconsPack} />
          <BookContextProvider>
            <Route exact path="/" component={Index} />
            <Route exact path="/camera" component={CameraComp} />
            <Route exact path="/SelectItem" component={SelectImage} />
          </BookContextProvider>
        </ApplicationProvider>
      </Switch>
    </NativeRouter>
  );
}

AppRegistry.registerComponent(appName, () => App);
