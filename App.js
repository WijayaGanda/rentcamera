import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NativeBaseProvider, Text } from "native-base";
import Ionicons from "@expo/vector-icons/Ionicons";
import Login from './screens/login';
import Home from "./screens/home";
import Register from "./screens/register";
import Equipment from "./screens/equipment";
import AboutUs from "./screens/aboutus";
import Featured from "./screens/featured";
import Detail from "./screens/detail";
import DetailItem from "./screens/detail-item";
import Booking from "./screens/booking";
import OrderPaket from "./screens/orderpaket";
import AdminNavigation from "./screens/admin-navigation";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const noHead = { headerShown: false };

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color }) => {
          let iconName;
          switch (route.name) {
            case "Home":
              iconName = "home-outline";
              break;
            case "Equipment":
              iconName = "camera-outline";
              break;
            case "Featured":
              iconName = "book-outline";
              break;
            case "About Us":
              iconName = "person-circle-outline";
              break;
          }
          return (
            <Ionicons
              name={iconName}
              size={28}
              color={focused ? "blue" : color}
            />
          );
        },
        tabBarIconStyle: { marginTop: 5 },
        tabBarStyle: {
          height: 70,
          borderTopWidth: 0,
        },
        tabBarLabel: ({ children, color, focused }) => {
          return (
            <Text color={focused ? "" : color} mb={2}>
              {children}
            </Text>
          );
        },
      })}
    >
      <Tab.Screen name="Home" component={Home} options={noHead} />
      <Tab.Screen name="Equipment" component={Equipment} options={noHead} />
      <Tab.Screen name="Featured" component={Featured} options={noHead} />
      <Tab.Screen name="About Us" component={AboutUs} options={noHead} />
    </Tab.Navigator>
  )
}

const App = () => {
  useEffect(() => {
    console.log("App initialized");
  }, []);

  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={Login} options={noHead} />
          <Stack.Screen name="Tabs" component={Tabs} options={noHead} />
          <Stack.Screen name="Register" component={Register} options={noHead} />
          <Stack.Screen name="Detail" component={Detail} options={noHead} />
          <Stack.Screen name="DetailItem" component={DetailItem} options={noHead} />
          <Stack.Screen name="Booking" component={Booking} options={noHead} />
          <Stack.Screen name="AdminDashboard" component={AdminNavigation} options={noHead} />
          <Stack.Screen name="OrderPaket" component={OrderPaket} options={noHead} />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
};

export default App;