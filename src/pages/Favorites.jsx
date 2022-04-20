import React from 'react';
import CinemaCardList from '../components/CinemaCardList';

function Favorites() {
    return (
        <div>
            <h2>Favorites</h2>
            <CinemaCardList
                showFavorites={ true }
            />
        </div>
    );
}

export default Favorites;
