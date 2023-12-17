import { View, StyleSheet, FlatList } from 'react-native';
import MealItemDetail from './MealItemDetail.js'

function MealItemList({categoryMeals}){

    function renderMealItem(itemData){

        const item = itemData.item

        const mealProp = {
            id: item.id,
            title: item.title, 
            imageUrl: item.imageUrl, 
            duration: item.duration, 
            affordability: item.affordability, 
            complexity: item.complexity, 
        }
        // function presshandler(){
        //     navigation.navigate('MealSpecificDetails', {
        //         mealId: itemData.item.id
        //     })
        // }
        return <MealItemDetail {...mealProp} /> //onPressProp={presshandler}
    }

    return (
        <View style={styles.container}>

            <FlatList
                data={categoryMeals}
                keyExtractor={(item) => item.id}
                renderItem={renderMealItem}
            />         
        </View>
        )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16

    },
  });

export default MealItemList;