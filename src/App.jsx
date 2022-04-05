import React, { useState } from 'react';
import axios from 'axios';
import Form from './components/Form';
import Status from './components/Status';
import CinemaCardList from './components/CinemaCardList';
import './styles/App.css';

function App() {
    const [ title, setTitle ] = useState({ 
        current: '',
        previous: ''
    });
    const [ type, setType ] = useState({ 
        current: 'film',
        previous: 'film'
    });

    const handleTitleChange = event => {
        setTitle({ ...title , current: event.target.value });
    };
    
    const handleTypeChange = event => {
        setType({ ...type , current: event.target.value });
    };

    const [ status, setStatus ] = useState('');
    const [ cinemaData, setCinemaData ] = useState([]);

    const fetchCinemaData = async () => {
        if (!title.current) {
            setStatus('Empty title\nPlease enter title');
            return;
        }

        if (title.current == title.previous &&
                type.current == type.previous) {
            setStatus('Repeated title and type\nPlease enter new ones');
            return;
        }

        const regexp = /^[a-zа-я0-9][a-zа-я0-9 ,.!?&\\/-:']{2,}$/i;
        if (!regexp.test(title.current)) {
            setStatus('Mistake in title\nTitle starts with letters, digits, please enter valid one');
            return;
        }

        const config = {
            method: 'get',
            url: '/films',
            baseURL: 'https://kinopoiskapiunofficial.tech/api/v2.2',
            params: {
                keyword: title.current,
                type: type.current,
                page: 1
            },
            headers: {
                'X-API-KEY': 'babd72f9-9560-4373-a5c3-9e8caae771fc'
            }
        };

        const response = await axios(config);

        if (response.status == 200) {
            const typeOutput = (type.current == 'film') ? 'Film' :
                (type.current == 'tv_show') ? 'TV Show' : 'All';
            const statusOutput = `Search for ${typeOutput}\n"${title.current}"`;
            setStatus(statusOutput);

            setTitle({ previous: title.current, current: '' });
            setType({ ...type , previous: type.current });
        }

        setCinemaData([ ...cinemaData, ...response.data.items ]);
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
