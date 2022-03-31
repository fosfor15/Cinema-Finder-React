import React, { useState } from 'react';
import Form from './components/Form';
import './styles/App.css';

function App() {
    const [ title, setTitle ] = useState('');
    const [ type, setType ] = useState('film');

    const handleTitleChange = event => {
        setTitle( event.target.value );
        console.log('title :>> ', title);
    };
    
    const handleTypeChange = event => {
        setType( event.target.value );
        console.log('type :>> ', type);
    };

    return (
        <div className="App">
            <h1>Cinema Finder</h1>
            <Form
                title={ title }
                handleTitleChange={ handleTitleChange }
                type={ type }
                handleTypeChange={ handleTypeChange }
            />
        </div>
    );
}

export default App;
