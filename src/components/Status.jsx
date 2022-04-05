import React from 'react';

function Status({ status }) {
    return (
        <h3
            id="status"
            style={{ whiteSpace: 'pre-wrap' }}
        >{ status }</h3>
    );
}

export default Status;
