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
}

export default CinemaCardList;
