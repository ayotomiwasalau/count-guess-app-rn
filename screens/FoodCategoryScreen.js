import { FlatList } from 'react-native';
import { CATEGORIES } from '../data/dummy_data.js';
import CategoryGrid from '../components/CategoryGrid.js'




function FoodCategoryScreen({navigation}) {
    function renderFunc(itemData){
        function presshandler(){
            navigation.navigate('MealDetails', {
                categoryId: itemData.item.id
            })
        }
    
        return (<CategoryGrid title={itemData.item.title} color={itemData.item.color} onPresso={presshandler}/>)
    }
    return (<FlatList 
                data={CATEGORIES} 
                keyExtractor={(item) => item.id}
                renderItem={renderFunc}
                numColumns={2}
                // renderItem={({item}) => (<CategoryGrid title={item.title} color={item.color} />)}
            />)
}


export default FoodCategoryScreen;