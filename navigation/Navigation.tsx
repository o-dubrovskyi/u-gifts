import React from 'react';
import {
  StyleSheet, View, ActivityIndicator
} from 'react-native';
import Auth from '@aws-amplify/auth';
import { DarkTheme, DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { AuthNavigator } from './AuthNavigator';
import LinkingConfiguration from './LinkingConfiguration';
import { RootNavigator } from '.';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export class AuthLoadingScreen extends React.Component {
  state = {
    userToken: null,
    loading: true,
    colorScheme: null,
  };

  constructor(props: any) {
    super(props);

    this.signOut = this.signOut.bind(this);
    this.signIn = this.signIn.bind(this);

    this.state.colorScheme = props.colorScheme;
  }

  async componentDidMount() {
    await this.loadApp();
  }

  async loadApp() {
    await Auth.currentAuthenticatedUser()
      .then((user) => {
        this.signIn(user);
      })
      .catch(() => {
        console.log('err signing in');
      });
    this.setState({
      loading: false,
    });
  }

  async signOut() {
    await Auth.signOut()
      .catch((err) => {
        console.log('ERROR: ', err);
      });
    this.setState({ userToken: null });
  }

  async signIn(user: any) {
    this.setState({
      userToken: user.signInUserSession.accessToken.jwtToken,
    });
  }

  render() {
    const { userToken, loading } = this.state;
    const showLoadingSpinner = (!userToken && loading);
    let view;

    if (showLoadingSpinner) {
      view = (
        <View style={styles.container}>
          <ActivityIndicator size="large" color="#aaa" />
        </View>
      );
    } else if (!userToken) {
      view = <AuthNavigator signIn={this.signIn} />;
    } else {
      view =  <RootNavigator />;
      // view = <AppNavigator signOut={this.signOut} />;
    }

    return (
      <NavigationContainer
        linking={LinkingConfiguration}
        theme={this.state.colorScheme === 'dark' ? DarkTheme : DefaultTheme}
      >
        {view}
      </NavigationContainer>
    );
  }
}
