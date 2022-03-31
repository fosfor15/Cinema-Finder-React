import React, { useState } from 'react';
import axios from 'axios';
import Form from './components/Form';
import Status from './components/Status';
import CinemaCardList from './components/CinemaCardList';
import './styles/App.css';

function App() {
    const [ title, setTitle ] = useState('');
    const [ type, setType ] = useState('film');

    const handleTitleChange = event => {
        setTitle( event.target.value );
    };
    
    const handleTypeChange = event => {
        setType( event.target.value );
    };

    const [ status, setStatus ] = useState('');
    const [ cinemaData, setCinemaData ] = useState([]);

    const fetchCinemaData = async () => {
        const config = {
            method: 'get',
            url: '/films',
            baseURL: 'https://kinopoiskapiunofficial.tech/api/v2.2',
            params: {
                keyword: title,
                type,
                page: 1
            },
            headers: {
                'X-API-KEY': 'babd72f9-9560-4373-a5c3-9e8caae771fc'
            }
        };

        const response = await axios(config);

        if (response.status == 200) {
            const statusOutput = `Search for ${type}\n"${title}"`;
            setStatus(statusOutput);
        }

        setCinemaData([ ...cinemaData, ...response.data.items ]);
        setTitle('');
    };

    return (
        <div className="App">
            <h1>Cinema Finder</h1>
            <Form
                title={ title }
                handleTitleChange={ handleTitleChange }
                type={ type }
                handleTypeChange={ handleTypeChange }
                handleSearchClick={ fetchCinemaData }
            />
            <Status status={ status } />
            <CinemaCardList
                cinemaData={ cinemaData }
            />
        </div>
    );
}

export default App;
