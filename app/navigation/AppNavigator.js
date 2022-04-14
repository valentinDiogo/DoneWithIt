import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AccountNavigator from "./AccountNavigator";
import FeedNavigator from "./FeedNavigator";
import ListingEditScreen from "../screens/ListingEditScreen";
import { createStackNavigator } from "@react-navigation/stack";
import { View } from "react-native";
import colors from "../config/colors";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

const Tab = createBottomTabNavigator();
const RootStack = createStackNavigator();

const AppNavigator = () => (
  <RootStack.Navigator
    mode="modal"
    screenOptions={{
      animationEnabled: false,
    }}
  >
    <RootStack.Screen
      name="BottomTabNavigatorScreen"
      component={TabAppNavigator}
      options={{ headerShown: false }}
    />
    <RootStack.Screen
      name="ListingEditScreen"
      component={ListingEditScreen}
      options={({ navigation }) => ({
        animationEnabled: true,
        title: "Vends un article",
        headerLeft: () => (
          <TouchableWithoutFeedback
            style={{ marginLeft: 10 }}
            onPress={() => navigation.navigate("BottomTabNavigatorScreen")}
          >
            <MaterialCommunityIcons
              name="close"
              color={colors.primary}
              size={30}
            />
          </TouchableWithoutFeedback>
        ),
      })}
    />
  </RootStack.Navigator>
);

const placeholder = () => <View />;

const TabAppNavigator = () => (
  <Tab.Navigator initialRouteName="Accueil">
    <Tab.Screen
      name="Accueil"
      component={FeedNavigator}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="home" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name="Vendre"
      component={placeholder}
      options={{
        presentation: "modal",
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons
            name="plus-circle"
            color={color}
            size={size}
          />
        ),
      }}
      listeners={({ navigation }) => ({
        tabPress: (e) => {
          e.preventDefault();
          navigation.navigate("ListingEditScreen");
        },
      })}
    />
    <Tab.Screen
      name="Profil"
      component={AccountNavigator}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="account" color={color} size={size} />
        ),
      }}
    />
  </Tab.Navigator>
);

export default AppNavigator;
