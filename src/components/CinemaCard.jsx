import React from 'react';
import '../styles/CinemaCards.css';

function CinemaCard({ cinema, openCinemaDetails }) {
    const {
        posterUrlPreview: poster,
        nameRu: title,
        ratingKinopoisk: rating,
        year,
        kinopoiskId: cinemaId,        
    } = cinema;

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
                    <div className="favorite-icon"></div>
                </div>
                <h6 className="title">{ title }</h6>
                <p className="year">{ year }</p>
            </div>
        </div>
    );
}

export default CinemaCard;
