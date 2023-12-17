// import { useContext } from 'react';
import { useSelector } from 'react-redux'
import {View, Text, StyleSheet} from 'react-native'
import MealItemList from '../components/MealList/MealItemList';
import { MEALS } from '../data/dummy_data';
// import {FavouriteContext} from '../store/context/favourite-context.js';

function FavouriteScreen (){
    // const favMealCtx = useContext(FavouriteContext);
    const favouriteMealids = useSelector((state) => state.favouriteMeals.ids);


    const favMeal = MEALS.filter(
        meal => favouriteMealids.includes(meal.id)
    );
    if (favMeal.length === 0){
        return (
            <View style={styles.root}>
                <Text style={styles.text}> Your favourites list is empty</Text>
            </View>
        )
    }
    return (
            <MealItemList categoryMeals={favMeal}/>
    )
}

export default FavouriteScreen;


const styles = StyleSheet.create({
    root: {
        flex: 18,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black'
    }
})