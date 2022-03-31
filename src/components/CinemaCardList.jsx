import React from 'react';
import CinemaCard from './CinemaCard';
import '../styles/CinemaCards.css';

function CinemaCardList(props) {
    const { cinemaData } = props;

    return (
        <div id="cinema-card-list">            
            { cinemaData.map(cinema => {
                return (
                    <CinemaCard
                        key={ cinema.kinopoiskId }
                        cinema={ cinema }
                    />
                );
            }) }
        </div>
    );
}

export default CinemaCardList;
