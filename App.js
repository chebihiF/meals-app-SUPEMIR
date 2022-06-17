/** @format */

import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import CategoriesScreen from "./screens/CategoriesScreen";
import { createStackNavigator } from "@react-navigation/stack";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import { CATEGORIES } from "./data/dummy-data";
import MealDetailScreen from "./screens/MealDetailScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: "#351401" },
          headerTintColor: "white",
          cardStyle: { backgroundColor: "#3f2f25" },
        }}
      >
        <Stack.Screen
          name="MealsCategories"
          component={CategoriesScreen}
          options={{
            title: "All Categories",
          }}
        />
        <Stack.Screen
          name="MealsOverview"
          component={MealsOverviewScreen}
          options={({ route, navigation }) => {
            const catId = route.params.categoryId;
            const mycategory = CATEGORIES.filter((category) => {
              return category.id == catId;
            });

            return {
              title: mycategory[0].title,
            };
          }}
        />
        <Stack.Screen name="MealDetail" component={MealDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
