import { View, Text, StyleSheet } from 'react-native';

function MealDetails({duration, affordability, complexity, style, textstyle}){
    return (
        <View style={[styles.mealdetails, style]}>
            <Text style={[styles.detailsItem, textstyle]}>{duration}m</Text>
            <Text style={[styles.detailsItem, textstyle]}>{affordability.toUpperCase()}</Text>
            <Text style={[styles.detailsItem, textstyle]}>{complexity.toUpperCase()}</Text>
        </View>
    )
}

export default MealDetails;

const styles = StyleSheet.create({
    mealdetails: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 8,
        justifyContent: 'center'
    },
    detailsItem: {
        marginHorizontal: 4,
        fontSize: 12
    }
})