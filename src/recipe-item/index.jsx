import React from 'react'
import './style.css';
const RecipeItem = (props) => {
    const { id, image, title, addToFavorites } = props;
    console.log(props, 'recipe-item-props');
    return (
        <div key={id} className="recipe-item">
            <div>
                <img src={image} alt='image of recipe' />
            </div>
            <p>{title}</p>
            <button type='button' onClick={addToFavorites}>Add to favorites</button>
        </div>
    )
}

export default RecipeItem;