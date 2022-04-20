import React, { useState, useEffect } from 'react';
import CinemaCard from './CinemaCard';
import CinemaDetails from './CinemaDetails';
import '../styles/CinemaCards.css';

function CinemaCardList({ cinemaData, showFavorites }) {
    const [ modalActive, setModalActive ] = useState(false);
    const [ cinemaId, setCinemaId ] = useState(0);
    
    const openCinemaDetails = (cinemaId) => {
        setModalActive(true);
        setCinemaId(cinemaId);
    };

    
    const [ favorites, setFavorites ] = useState([]);

    useEffect(() => {
        console.log(localStorage);
        setFavorites(Object.keys(localStorage).map(key => +key));
    }, []);

    const addFavorite = (cinema) => {
        const { kinopoiskId: cinemaId, ...cinemaData } = cinema;
        localStorage.setItem(cinemaId, JSON.stringify(cinemaData));
        console.log(localStorage);
        setFavorites([ ...favorites, cinemaId ]);
    };

    const removeFavorite = (cinemaId) => {
        localStorage.removeItem(cinemaId);
        console.log(localStorage);
        setFavorites(favorites.filter(_cinemaId => _cinemaId != cinemaId));
    };

    if (showFavorites) {
        cinemaData = Object.values(localStorage)
            .map(entry => JSON.parse(entry));
        console.log(cinemaData);
    }

    return (
        <div id="cinema-card-list">
            { cinemaData.map((cinema, ind) => 
                <CinemaCard
                    key={ ind }
                    cinema={ cinema }
                    openCinemaDetails={ openCinemaDetails }
                    favorites={ favorites }
                    addFavorite={ addFavorite }
                    removeFavorite={ removeFavorite }
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
