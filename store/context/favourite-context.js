import {createContext, useState} from 'react';

export const FavouriteContext = createContext({
    ids: [],
    addFavourites: (id) => {},
    removeFavourites: (id) => {}
})

function FavouritesContextProvider({children}){

    const [FavouriteMealIds, setFavouriteMealIds] = useState([])

    function addFavourites(id){
        setFavouriteMealIds((currentFavIds) => [...currentFavIds, id])
    }
    function removeFavourites(id){
        setFavouriteMealIds((currentFavIds) =>
            currentFavIds.filter((mealId) => mealId !== id)
        )
    }

    const value = {
        ids: FavouriteMealIds,
        addFavourites: addFavourites,
        removeFavourites: removeFavourites
    }

    return <FavouriteContext.Provider value={value}>{children}</FavouriteContext.Provider>
}

export default FavouritesContextProvider;