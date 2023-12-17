import { View, Text, StyleSheet } from "react-native";

function List({data}){

    function Rand(){
        randomSeq = Math.floor(Math.random() * 100)+1
        randomSeq = randomSeq.toString()
        return randomSeq
    }

    randomSeq = Rand()

    return (
        data.map((datapoint, index) => (
            <View style={styles.listItems}>
               <Text style={styles.itemText} key={index}>{datapoint}</Text> 
            </View>
        ))
    )
}

export default List

const styles = StyleSheet.create({
    listItems: {
        borderRadius: 6,
        paddingHorizontal: 8,
        paddingVertical: 4,
        marginVertical: 8,
        marginHorizontal: 22,
        backgroundColor: 'white'
    },

    itemText: {
        color: 'black',
        textAlign: 'center'
    }
})