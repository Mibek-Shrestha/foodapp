import React from 'react'
import './style.css';
const FavoriteItem = (props) => {
    const { id, image, removeformFavorites, title } = props;

    return (
        <div key={id} className="favorite-item">
            <div>
                <img src={image} alt='image of recipe' />
            </div>
            <p>{title}</p>
            <button type='button' onClick={removeformFavorites}>Remove fromfavorites</button>
        </div>
    )
}

export default FavoriteItem;