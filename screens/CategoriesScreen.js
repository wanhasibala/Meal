import CategoryGridTile from "../components/CategoryGridTile";
import { CATEGORIES } from "../data/dummyData";
import { FlatList } from "react-native";

function CategoriesScreen({ navigation }) {
  function renderCategoryItem(itemData) {
    function onPressHandler() {
      navigation.navigate("MealOverview");
    }

    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={onPressHandler}
      />
    );
  }
  return (
    <FlatList
      data={CATEGORIES}
      key={(item) => item.id}
      renderItem={renderCategoryItem}
      numColumns={2}
    />
  );
}

export default CategoriesScreen;
