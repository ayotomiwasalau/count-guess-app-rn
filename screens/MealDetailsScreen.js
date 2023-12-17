import {useDispatch, useSelector } from 'react-redux'
import { View, Text, Image, StyleSheet, ScrollView, Button } from "react-native";
import { MEALS } from "../data/dummy_data";
import MealDetails from '../components/MealDetails.js'
import Subtitle from '../components/MealDetail/Subtitle.js'
import List from '../components/MealDetail/List.js'
import { useContext, useLayoutEffect } from "react";
import ButtonIcon from "../components/MealDetail/ButtonIcon";
import { addFavourite, removeFavourite } from "../store/redux/favourites";
// import {FavouriteContext} from '../store/context/favourite-context.js'

function MealDetailsScreen({route, navigation}){

    // const favouriteMealCxt = useContext(FavouriteContext)
    const favouriteMealids = useSelector((state) => state.favouriteMeals.ids);
    console.log(favouriteMealids)
    const dispatch = useDispatch();

    const mealId = route.params.mealId
    const selectedMeal = MEALS.find((meal) => meal.id === mealId)

    const mealFav = favouriteMealids.includes(mealId)

    function changeToFavourite(){
        if (mealFav){
            // favouriteMealCxt.removeFavourites(mealId)
            dispatch(removeFavourite({id: mealId}))
        } else {
            // favouriteMealCxt.addFavourites(mealId)
            dispatch(addFavourite({id: mealId}))

        }
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return <ButtonIcon 
                icon={mealFav? 'star' : 'star-outline'} 
                size={25} 
                color='black'
                onPress={changeToFavourite}/>
            }
        })
    }, [navigation, changeToFavourite])

    return (
        <ScrollView style={styles.root}>
            <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }}/>
            <Text style={styles.title}>{selectedMeal.title}</Text>
            <MealDetails 
                duration={selectedMeal.duration}
                affordability={selectedMeal.affordability}
                complexity={selectedMeal.complexity}
                textstyle={styles.detailText}
            />
            <View style={styles.listOuterContainer}>
               <View style={styles.listContainer}>
                <Subtitle>Ingredients</Subtitle>
                <List data={selectedMeal.ingredients}/>
                <Subtitle>Steps</Subtitle>
                <List data={selectedMeal.steps}/> 
            </View> 
            </View>
             
        </ScrollView>
    )
}

export default MealDetailsScreen;

const styles = StyleSheet.create({
    root: {
        marginBottom: 20
    },
    image: {
        width: '100%',
        height: 350
    },
    title: {
        fontWeight: 'bold',
        fontSize: 24,
        margin: 8,
        textAlign: 'center',
        color: 'grey'
    }, 
    detailText: {
        color: 'grey'
    },
    listOuterContainer: {
        alignItems: 'center'
    }, 
    listContainer: {
        width: '80%'
    }
})