import React, { useState } from 'react';
import axios from 'axios';
import Form from './components/Form';
import Status from './components/Status';
import CinemaCardList from './components/CinemaCardList';
import Pagination from './components/Pagination';
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

    const [ currentPageNumber, setCurrentPageNumber ] = useState(1);
    const [ totalPages, setTotalPages ] = useState(0);

    const handleTitleChange = event => {
        setTitle({ ...title , current: event.target.value });
    };
    
    const handleTypeChange = event => {
        setType({ ...type , current: event.target.value });
    };

    const [ status, setStatus ] = useState('');
    const [ cinemaData, setCinemaData ] = useState([]);

    const fetchCinemaData = async (pageNumber) => {
        const config = {
            method: 'get',
            url: '/films',
            baseURL: 'https://kinopoiskapiunofficial.tech/api/v2.2',
            params: {
                keyword: title.current,
                type: type.current,
                page: pageNumber
            },
            headers: {
                'X-API-KEY': 'babd72f9-9560-4373-a5c3-9e8caae771fc'
            }
        };

        return await axios(config);
    };

    const processInitialRequest = async () => {
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

        const response = await fetchCinemaData(currentPageNumber);

        if (response.status == 200) {
            const typeOutput = (type.current == 'film') ? 'Film' :
                (type.current == 'tv_show') ? 'TV Show' : 'All';
            const statusOutput = `Search for ${typeOutput}\n"${title.current}"`;
            setStatus(statusOutput);

            setTitle({ previous: title.current, current: '' });
            setType({ ...type , previous: type.current });
            setTotalPages(response.data.totalPages);
            setCinemaData(response.data.items);
        }        
    };

    const processRequestByPage = async (pageNumber) => {
        setCinemaData([]);
        setCurrentPageNumber(pageNumber);
        const response = await fetchCinemaData(pageNumber);
        setCinemaData(response.data.items);
    };

    return (
        <div className="App">
            <h1>Cinema Finder</h1>
            <Form
                title={ title }
                handleTitleChange={ handleTitleChange }
                type={ type }
                handleTypeChange={ handleTypeChange }
                handleSearchClick={ processInitialRequest }
            />
            <Status status={ status } />
            <CinemaCardList
                cinemaData={ cinemaData }
            />
            <Pagination
                currentPage={ currentPageNumber }
                processRequestByPage={ processRequestByPage }
                totalPages={ totalPages }
            />
        </div>
    );
}

export default App;
