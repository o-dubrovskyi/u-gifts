import React, { useCallback, useEffect, useState } from 'react';
import {
  StyleSheet, View, ActivityIndicator
} from 'react-native';
import Auth, { CognitoUser } from '@aws-amplify/auth';
import { DarkTheme, DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { AuthNavigator } from './AuthNavigator';
import LinkingConfiguration from './LinkingConfiguration';
import { RootNavigator } from './index';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export const AuthLoadingScreen = (props: Props) => {
  const [userToken, setUserToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const { colorScheme } = props;

  const showLoadingSpinner = (!userToken && loading);
  let view;

  const signIn = useCallback(async (user: CognitoUser) => {
    const jwtToken = user.getSignInUserSession()?.getAccessToken().getJwtToken();

    if (!jwtToken) {
      throw Error('Unexpected behaviour - empty jwt token.');
    }

    const user1: CognitoUser = await Auth.currentAuthenticatedUser()

    setUserToken(jwtToken);

    console.log(user1.getUsername());
  }, []);

  useEffect(() => {
    Auth.currentAuthenticatedUser()
      .then((user) => signIn(user).then())
      .catch(() => console.log('err signing in'));

    setLoading(false);
  }, []);

  const signOut = useCallback(async () => {
    await Auth.signOut()
      .catch((err) => console.log('ERROR: ', err));

    setUserToken(null);
  }, []);

  if (showLoadingSpinner) {
    view = (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#aaa" />
      </View>
    );
  } else if (!userToken) {
    view = <AuthNavigator signIn={signIn} />;
  } else {
    view =  <RootNavigator />;
    // view = <AppNavigator signOut={this.signOut} />;
  }

  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}
    >
      {view}
    </NavigationContainer>
  );
}

type Props = {
  colorScheme: string,
};
