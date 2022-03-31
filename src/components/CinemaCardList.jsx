import React from 'react';
import '../styles/CinemaCardList.css';

function CinemaCardList(props) {
    return (
        <div id="cinema-card-list">
            <h3>{ props.status }</h3>
        </div>
    );
}

export default CinemaCardList;
