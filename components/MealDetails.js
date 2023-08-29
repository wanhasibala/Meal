import { View, Text, Image } from "react-native";

function MealDetails({
  title,
  imageUrl,
  duration,
  complexity,
  affordability,
  ingridients,
  steps,
}) {
  return (
    <View>
      <View>
        <Text>{title}</Text>
      </View>
      <View>
        <Image></Image>
      </View>
    </View>
  );
}

export default MealDetails;
