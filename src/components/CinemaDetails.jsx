import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/CinemaDetails.css';

function CinemaDetails({ modalActive, setModalActive, cinemaId }) {
    const [ cinemaDetails, setCinemaDetails ] = useState({});

    const fetchCinemaDetails = async (cinemaId) => {
        const config = {
            method: 'get',
            url: `/films/${cinemaId}`,
            baseURL: 'https://kinopoiskapiunofficial.tech/api/v2.2',
            headers: {
                'X-API-KEY': 'babd72f9-9560-4373-a5c3-9e8caae771fc'
            }
        };

        return await axios(config);
    };

    useEffect(async () => {
        const response = await fetchCinemaDetails(cinemaId);
        setCinemaDetails(response.data);
    }, [ cinemaId ]);

    const {
        nameRu: title,
        ratingKinopoisk: rating,
        countries,
        genres,
        year,
        posterUrl: poster,
        description,
        webUrl
    } = cinemaDetails;

    let modalClasses = modalActive ? 'modal modal-active' : 'modal';
    const closeCinemaDetails = () => {
        setModalActive(false);
        setCinemaDetails({});
    };

    return (
        <div
            className={ modalClasses }
            onClick={ closeCinemaDetails }
        >
            <div
                id="cinema-details"
                onClick={ event => event.stopPropagation() }
            >    
                <div className="poster">
                    <img src={ poster } alt={ `Poster of ${ title }` } />
                </div>
                <div className="info">
                    <p className="rating">
                        Rating { rating }
                    </p>
                    <h2 className="title">{ title }</h2>
                    <h3 className="genre">
                        { genres?.map(entry => entry.genre).join(', ')
                            .replace(/^./, letter => letter.toUpperCase()) }
                    </h3>
                    <h3 className="countries-year">
                        { countries?.map(entry => entry.country).join(', ') }, { year }
                    </h3>
                    <p className="description">{ description }</p>
                    <a
                        href={ webUrl }
                        target="_blank"
                        className="link"
                    >Link to Kinopoisk</a>
                </div>
                <button
                    className="close-cinema-details"
                    onClick={ closeCinemaDetails }
                >&times;</button>
            </div>
        </div>
    );
}

export default CinemaDetails;
