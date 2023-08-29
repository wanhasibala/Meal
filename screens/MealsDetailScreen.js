import { FlatList, View, Text } from "react-native";
import { MEALS, CATEGORIES } from "../data/dummyData";
import MealDetails from "../components/MealDetails";
import { StyleSheet } from "react-native";

function MealsDetailScreen({ route }) {
  const mealId = route.params.mealId;

  return (
    <View style={styles.container}>
      <Text>{mealId}</Text>
    </View>
  );
}
export default MealsDetailScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
