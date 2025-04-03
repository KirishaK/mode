import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import LoginScreen from './src/screens/LoginScreen';
import DashboardScreen from './src/screens/DashboardScreen';
import ProjectDetailsScreen from './src/screens/ProjectDetailsScreen';
import DetailsScreen from './src/screens/DetailsScreen';
import DirectLabourScreen from './src/screens/DirectLabourScreen';
import SubcontractorLabourScreen from './src/screens/SubContractorLabourScreen';
import ConstructionMaterialsScreen from './src/screens/ConstructionsMaterialsScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Dashboard" component={DashboardScreen} />
        <Stack.Screen name="ProjectDetails" component={ProjectDetailsScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="DirectLabour" component={DirectLabourScreen} />
        <Stack.Screen name="SubcontractorLabour" component={SubcontractorLabourScreen} />
        <Stack.Screen name="ConstructionMaterials" component={ConstructionMaterialsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
