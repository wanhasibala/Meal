import { ScrollView, View, Text, Image } from "react-native";
import { MEALS, CATEGORIES } from "../data/dummyData";
import MealDetails from "../components/MealDetails";
import { StyleSheet } from "react-native";
import Subtitle from "../components/MealDetails/Subtitle";
import List from "../components/MealDetails/List";

function MealsDetailScreen({ route }) {
  const mealId = route.params.mealId;

  const selectedMeal = MEALS.find((meal) => meal.id === mealId);
  return (
    <ScrollView>
      <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <View>
        <MealDetails
          textStyle={styles.mealDetails}
          duration={selectedMeal.duration}
          affordability={selectedMeal.affordability}
          complexity={selectedMeal.complexity}
        />
      </View>
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <Subtitle>Ingridients</Subtitle>
          <List data={selectedMeal.ingredients} />
          <Subtitle>Steps</Subtitle>
          <List data={selectedMeal.steps} />
        </View>
      </View>
    </ScrollView>
  );
}
export default MealsDetailScreen;
const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    margin: 8,
    textAlign: "center",
    color: "white",
  },
  mealDetails: {
    color: "white",
  },
  listOuterContainer: {
    alignItems: "center",
    marginBottom:24,
  },
  listContainer: {
    width: "80%",
    alignItems: "",
  },
});
