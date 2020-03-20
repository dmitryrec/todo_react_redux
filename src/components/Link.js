import React from 'react';

export default function Link({ active, onClick, children }) {
    return (
        <div
            onClick = { onClick }
            className="btn"
        >
            {children}
        </div>
    )
}
