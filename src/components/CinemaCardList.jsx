import React from 'react';
import CinemaCard from './CinemaCard';
import '../styles/CinemaCards.css';

function CinemaCardList(props) {
    const { cinemaData } = props;

    return (
        <div id="cinema-card-list">            
            { cinemaData.map((cinema, ind) => {
                return (
                    <CinemaCard
                        key={ ind }
                        cinema={ cinema }
                    />
                );
            }) }
        </div>
    );
}

export default CinemaCardList;
