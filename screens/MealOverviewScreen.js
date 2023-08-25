import { StyleSheet, Text, View } from "react-native";
import { MEALS } from "../data/dummyData";

function MealOverviewScreen() {
  return (
    <View style={styles.container}>
      <Text>Meal Overview Screen</Text>
    </View>
  );
}

export default MealOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
