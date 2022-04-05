import React from 'react';
import CinemaCard from './CinemaCard';
import '../styles/CinemaCards.css';

function CinemaCardList(props) {
    const { cinemaData } = props;

    if (cinemaData.length) {
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
    } else {
        return <h3>Loading...</h3>;
    }
}

export default CinemaCardList;
