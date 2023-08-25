import { StyleSheet } from "react-native";
import { Image, Pressable, Text, View } from "react-native";

function MealItem({ title, imageUrl, duration, complexity, affordability }) {
  return (
    <View style={styles.mealItem}>
      <Pressable>
        <View >
          <Image source={{uri: imageUrl}} style={styles.image}/>
          <Text style={styles.title} >{title}</Text>
        </View>
        <View style={styles.details}>
            <Text style={styles.detailItem} >{duration}m</Text>
            <Text style={styles.detailItem} >{complexity.toUpperCase()}</Text>
            <Text style={styles.detailItem} > {affordability.toUpperCase()}</Text>
        </View>
      </Pressable>
    </View>
  );
}

export default MealItem;
const styles= StyleSheet.create({
    mealItem:{
        margin: 16,
        borderRadius: 8,
        overflow: 'hidden',
        backgroundColor: 'white'
    },
    image:{
        width: '100%',
        height: 200,
    },
    title: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 18,
        padding: 4,
    },
    details:{
        flexDirection: 'row',
        padding: 8,
        justifyContent: 'center'
    },
    detailItem: {
        marginHorizontal: 4,
    }
})