import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName } from 'react-native';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import CreateScreen from '../screens/CreateScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import TabSearchScreen from '../screens/TabSearchScreen';
import TabListsScreen from '../screens/TabListsScreen';
import TabSettingsScreen from '../screens/TabSettingsScreen';
import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../types';
import LinkingConfiguration from './LinkingConfiguration';
import { TabBarIcon } from '../components/TabBarIcon';
import { HeaderRightIcon } from '../components/HeaderRightIcon';
import { StyledPressable } from '../components/StyledPressable';

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

export function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }} />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name="Create"
                      component={CreateScreen}
                      options={({route, navigation}) => ({
                        headerRight: () => (
                          <StyledPressable onPress={() => navigation.navigate('TabSearch')}>
                            <HeaderRightIcon name="check" />
                          </StyledPressable>
                        )
                      })}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="TabSearch"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
      }}>
      <BottomTab.Screen
        name="TabSearch"
        component={TabSearchScreen}
        options={({ navigation }: RootTabScreenProps<'TabSearch'>) => ({
          title: 'Search',
          tabBarIcon: ({ color }) => <TabBarIcon name="search" color={color} />,
          headerRight: () => (
            <StyledPressable onPress={() => navigation.navigate('Create')}>
              <HeaderRightIcon name="plus" />
            </StyledPressable>
          ),
        })}
      />
      <BottomTab.Screen
        name="TabLists"
        component={TabListsScreen}
        options={{
          title: 'Lists',
          tabBarIcon: ({ color }) => <TabBarIcon name="list" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="TabSettings"
        component={TabSettingsScreen}
        options={{
          title: 'Settings',
          tabBarIcon: ({ color }) => <TabBarIcon name="gear" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}
