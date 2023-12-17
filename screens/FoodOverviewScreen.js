import { useLayoutEffect } from 'react';
import { CATEGORIES } from '../data/dummy_data.js';
import { MEALS } from '../data/dummy_data.js';
import MealItemList from '../components/MealList/MealItemList.js';


function FoodOverviewScreen({route, navigation}){

    let catId = route.params.categoryId;

    const categoryMeals = MEALS.filter((mealItem) => {
        return mealItem.categoryIds.indexOf(catId) >= 0
    });

    useLayoutEffect(() => {
        const catTitle = CATEGORIES.find(
            (category) => { return category.id === catId}
            ).title
        
        navigation.setOptions({
            title: catTitle
        })
    }, [catId, navigation])

    return <MealItemList categoryMeals={categoryMeals}/>
 
}



export default FoodOverviewScreen;