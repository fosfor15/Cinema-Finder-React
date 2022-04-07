import React from 'react';

function Status({ status, currentPageNumber }) {
    return (
        <div id="status">
            <h3 style={{ whiteSpace: 'pre-wrap' }}>{ status }</h3>
            { currentPageNumber
                ? <h4>Page { currentPageNumber }</h4>
                : null }
        </div>
    );
}

export default Status;
