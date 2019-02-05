import React from 'react';
import {
  mapping,
  style,
} from 'eva/packages/mapping-kitten/eva';
import { theme } from 'eva/packages/theme/eva';
import {
  ThemeMappingType,
  ThemeMapType,
} from 'eva/packages/common';
import {
  ApplicationProvider,
  ThemeType,
} from '@kitten/theme';
import { withNavigation } from './navigation';
import * as Screens from './ui/screen';

interface State {
  mapping: ThemeMappingType;
  styles: ThemeMapType;
  theme: ThemeType;
}

export default class App extends React.Component<any, State> {

  public state: State = {
    mapping: mapping,
    styles: style,
    theme: theme,
  };

  public render(): React.ReactNode {
    const { HomeScreen: RootScreen, ...screens } = Screens;
    const Router: React.ComponentClass = withNavigation(RootScreen, screens);

    return (
      <ApplicationProvider
        mapping={this.state.mapping}
        styles={this.state.styles}
        theme={this.state.theme}>
        <Router/>
      </ApplicationProvider>
    );
  }
}
