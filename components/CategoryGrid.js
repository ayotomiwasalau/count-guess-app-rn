import { Pressable, View, Text, Platform } from 'react-native';
import { StyleSheet } from 'react-native';

function CategoryGrid({title, color, onPresso}) {
    return ( <View style={styles.gridItem}>
        <Pressable android_ripple={{color: '#ccc'}} 
                style={({pressed}) => [styles.button, pressed ? styles.buttonPressed : null ]}
                onPress={onPresso}
                >
            <View style={[styles.innerCon, { backgroundColor: color }]}>
                <Text style={styles.titleFont}>
                    {title}
                </Text>
            </View>
        </Pressable>
    </View>
    );
}

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 20,
        height: 150,
        borderRadius: 8,
        elevation: 4,
        shadowColor: 'black',
        backgroundColor: 'white',
        shadowOpacity: 0.25,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 8,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible'
    },
    button: {
       flex: 1,
       justifyContent: 'center',
       alignContent: 'center',
    },
    buttonPressed: {
        opacity: 0.5
    },
    innerCon: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        alignContent: 'center',
    },
    titleFont: {
        fontSize: 18,
        fontWeight: 'bold'
    }
})

export default CategoryGrid