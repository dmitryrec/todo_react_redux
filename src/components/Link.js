import React from 'react';

export default function Link({ active, onClick, children }) {
    return (
        <button
            onClick = { onClick }
        >
            {children}
        </button>
    )
}
