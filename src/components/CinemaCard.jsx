import React from 'react';
import '../styles/CinemaCards.css';

function CinemaCard(props) {
    const {
        cinema,
        openCinemaDetails,
        favorites,
        addFavorite,
        removeFavorite
    } = props;

    const {
        posterUrlPreview: poster,
        nameRu: title,
        ratingKinopoisk: rating,
        year,
        kinopoiskId: cinemaId,
    } = cinema;


    const isFavorite = favorites.includes(cinemaId);
    const favoriteClasses = isFavorite
        ? 'favorite-icon favorite-icon-active' : 'favorite-icon';

    const handleFavoritesClick = (event) => {
        event.stopPropagation();

        if (isFavorite) {
            removeFavorite(cinemaId);
        } else {
            addFavorite(cinema);
        }
    };


    return (
        <div
            className="cinema-card"
            onClick={ () => openCinemaDetails(cinemaId) }
        >
            <div className="poster">
                <img
                    src={ poster }
                    alt={ 'Poster of ' + title }
                />
            </div>
            <div className="info">
                <div className="rating-favorite-container">
                    <p className="rating">{ rating }</p>
                    <div
                        className={ favoriteClasses }
                        onClick={ handleFavoritesClick }
                    ></div>
                </div>
                <h6 className="title">{ title }</h6>
                <p className="year">{ year }</p>
            </div>
        </div>
    );
}

export default CinemaCard;
