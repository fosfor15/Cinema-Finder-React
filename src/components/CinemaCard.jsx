import React from 'react';
import '../styles/CinemaCards.css';

function CinemaCard(props) {
    const { posterUrlPreview: poster, nameOriginal: title,
        ratingKinopoisk: rating, year } = props.cinema;

    return (
        <div className="cinema-card">
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
