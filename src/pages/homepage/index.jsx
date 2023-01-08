
import React, { useEffect, useState } from 'react'
import './style.css'
import Search from '../../component/search';
import RecipeItem from '../../recipe-item';
import FavoriteItem from '../../favorite-item';
const Homepage = () => {
    //loading state
    const [loadingState, setLoadingState] = useState(false)
    // save results that we receive from api
    const [recipes, setRecipes] = useState([])
    //state for api is succesfull or not

    const [apiCalledSucess, setApiCalledSucess] = useState(false)
    //favorites data state
    const [favorites, setFavorites] = useState([])
    const getDataFromSearchComponent = (getdata) => {
        //keep the loading state as true before we are calling the api
        setLoadingState(true)
        // console.log(getdata,'getdata');
        //calling the api
        async function getReceipes() {
            const apiResponse = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=c0d52ef932624b1da419d076b9cf8126&query=${getdata}`);
            const result = await apiResponse.json()

            const { results } = result;
            if (results && results.length > 0) {
                //set loading state as false again
                //set the recipes state
                setLoadingState(false)
                setRecipes(results)
                setApiCalledSucess(true)
            }

            // console.log(result)
        }
        getReceipes()
    };

    const addToFavorites = (getCurrentRecipeItem) => {

        let cpyFavorites = [...favorites];
        const index = cpyFavorites.findIndex(item => item.id === getCurrentRecipeItem.id)

        if (index === -1) {
            cpyFavorites.push(getCurrentRecipeItem)
            setFavorites(cpyFavorites)
            //save the favorites in location
            localStorage.setItem('favorites', JSON.stringify(cpyFavorites))
        } else {
            alert('Item is already present in favorites')
        }
    };
    const removeformFavorites = (getCurrentId) => {
        let cpyFavorites = [...favorites];
        cpyFavorites = cpyFavorites.filter(item => item.id !== getCurrentId);
        setFavorites(cpyFavorites);
        localStorage.setItem('favorites', JSON.stringify(cpyFavorites));
    }
    useEffect(() => {
        console.log('run only once');
        const extractFavoritesFromLocalStoragePageLoad = JSON.parse(localStorage.getItem('favorites'));
        // console.log(extractFavoritesFromLocalStoragePageLoad)
        setFavorites(extractFavoritesFromLocalStoragePageLoad)
    }, []);
    console.log(apiCalledSucess);
    return (
        <div className='homepage'>
            <Search getDataFromSearchComponent={getDataFromSearchComponent}
                apiCalledSucess={apiCalledSucess}
                setApiCalledSucess={setApiCalledSucess} />
            {/* show favorites items */}``
            <div className="favorites-wrapper">
                <h1 className='favorites-title'>Favorites</h1>
                <div className="favorites">
                    {
                        favorites && favorites.length > 0 ?
                            favorites.map(item => (
                                <FavoriteItem
                                    removeformFavorites={() => removeformFavorites(item.id)}
                                    id={item.id}
                                    image={item.image}
                                    title={item.title}
                                />
                            ))
                            : null
                    }
                </div>
            </div>
            {/* show loading state */}
            {
                loadingState && <div className='loading'>Loading recipes ! Please wait</div>
            }
            {/* map through all the reciipe */}
            <div className="items">
                {recipes && recipes.length > 0
                    ? recipes.map((item) => <RecipeItem
                        addToFavorites={() => addToFavorites(item)}
                        id={item.id}
                        image={item.image}
                        title={item.title}
                        item={item} />)
                    : null}
            </div>

        </div>
    )
}
export default Homepage;
