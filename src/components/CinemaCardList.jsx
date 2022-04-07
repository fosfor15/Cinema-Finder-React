import React, { useState } from 'react';
import CinemaCard from './CinemaCard';
import CinemaDetails from './CinemaDetails';
import '../styles/CinemaCards.css';

function CinemaCardList({ cinemaData }) {
    const [ modalActive, setModalActive ] = useState(false);
    const [ cinemaId, setCinemaId ] = useState(0);    

    const openCinemaDetails = (cinemaId) => {
        setModalActive(true);
        setCinemaId(cinemaId);
    };

    if (cinemaData.length) {
        return (
            <div id="cinema-card-list">
                { cinemaData.map((cinema, ind) => 
                    <CinemaCard
                        key={ ind }
                        cinema={ cinema }
                        openCinemaDetails={ openCinemaDetails }
                    />) }
                { cinemaId
                    ? <CinemaDetails
                        modalActive={ modalActive }
                        setModalActive={ setModalActive }
                        cinemaId={ cinemaId }
                    />
                    : null }                
            </div>
        );
    } else {
        return <h3>Loading...</h3>;
    }
}

export default CinemaCardList;
