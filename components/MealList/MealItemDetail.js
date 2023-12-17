import {View, Text, Pressable, StyleSheet, Image} from 'react-native'
import {useNavigation} from '@react-navigation/native'
import MealDetails from '../MealDetails.js'

function MealItemDetail({title, imageUrl, duration, affordability, complexity, id  }){ //onPressProp
    const navigation = useNavigation()

    function pressdetailsHandler(){
        navigation.navigate('MealSpecificDetails', {
            mealId: id
        })
    }
    

    return (
        <View style={styles.parent}>
            <Pressable
                android_ripple={{color: '#ccc'}}
                style={({pressed}) => pressed ? styles.buttonPressed : null}
                onPress={pressdetailsHandler}
            >
                <View style={styles.innerContainer}>
                    <View >
                        <Image source={{uri: imageUrl}}
                            style={styles.image}
                        />
                        <Text style={styles.title}>{title}</Text>
                    </View>
                    <MealDetails 
                        duration={duration}
                        affordability={affordability}
                        complexity={complexity}
                    />
                </View>
            </Pressable>
        </View>
    )
}

export default MealItemDetail
const styles = StyleSheet.create({
    parent: {
        margin: 10,
        borderRadius: 8,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
        backgroundColor: 'white',
        elevation: 8,
        shadowColor: 'black',
        backgroundColor: 'white',
        shadowOpacity: 0.25,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 8,

    },
    innerContainer:{
        borderRadius: 8,
        overflow: 'hidden',
    },
    image: {
        width: '100%',
        height: 250
    },
    title: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 16,
        padding: 5
    },
    buttonPressed:{
        opacity: 0.5
    }


})