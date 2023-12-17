import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FoodCategoryScreen from './screens/FoodCategoryScreen.js';
import FoodOverviewScreen from './screens/FoodOverviewScreen.js';
import FavouriteScreen from './screens/FavouriteScreen.js';
import MealDetailsScreen from './screens/MealDetailsScreen.js';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {Ionicons} from '@expo/vector-icons';
// import FavouritesContextProvider from './store/context/favourite-context.js'
import {Provider} from 'react-redux'
import {store} from './store/redux/store.js'

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator(){
  return (
    <Drawer.Navigator
      screenOptions={{
          headerStyle: {backgroundColor: '#d2b48c'},
          headerTintColor: 'white',
          sceneContainerStyle: {backgroundColor: '#f5dcbf'},
          drawerContentStyle: {backgroundColor: '#f5dcbf'},
          drawerActiveTintColor: 'white',
          drawerInactiveTintColor: 'white',
          drawerActiveBackgroundColor: '#d2b48c'
        }}
    >
      <Drawer.Screen 
        name="Categories" 
        component={FoodCategoryScreen}
        options={{
          title: 'All Categories',
          drawerIcon: ({color, size}) => (
              <Ionicons name='list' color={color} size={size} />
            )
        }} />
      <Drawer.Screen name="Favourites" component={FavouriteScreen} 
        options={{
          drawerIcon: ({color, size}) => (
              <Ionicons name='square' color={color} size={size} />
            )
        }}
      />
    </Drawer.Navigator>
  )
}

export default function App() {
  return (
    <>
    <StatusBar style='light'/>
    {/* <FavouritesContextProvider> */}
    <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {backgroundColor: '#d2b48c'},
          headerTintColor: 'white',
          contentStyle: {backgroundColor: '#f5dcbf'},
        }}
      >
        <Stack.Screen 
          name="Drawer" 
          component={DrawerNavigator}
          options={{
            headerShown: false
          }}
          />
        <Stack.Screen 
          name="MealDetails" 
          component={FoodOverviewScreen}
          // options={
          //   ({route, navigation}) => {
          //     const catId = route.params.categoryId
          //     return {
          //       title: catId
          //      }
          //   }
          // }
        />

        <Stack.Screen 
          name="MealSpecificDetails"
          component={MealDetailsScreen}
          options={{
            title: 'Meal info'
            // headerRight: () => {
            //   return <Button title='Tap me!'/>
            // }
          }}
        />

      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
    {/* </FavouritesContextProvider> */}

    </>
  );
}

const styles = StyleSheet.create({
  container: {
  },
});
