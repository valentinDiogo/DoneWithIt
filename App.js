import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AppButton from './app/components/AppButton';
import AppPicker from './app/components/AppPicker';
import AppText from './app/components/AppText';
import AppTextInput from './app/components/AppTextInput';
import Card from './app/components/Card';
import Icon from './app/components/Icon';
import ListItem from './app/components/ListItem';
import Screen from './app/components/Screen';
import AccountScreen from './app/screens/AccountScreen';
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';
import ListingsScreen from './app/screens/ListingsScreen';
import MessagesScreen from './app/screens/MessagesScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';

export default function App() {
  return (
    <Screen>
      <AppTextInput placeholder="Username" icon="email" />
      <AppPicker placeholder="Category" icon="apps" />
    </Screen>
  );
}
