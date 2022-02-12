import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Main from "./Main";
import NextScreen from "./NextScreen";

export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={Main}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Details" component={NextScreen} />
        <Stack.Screen name="Preview" component={NextScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
