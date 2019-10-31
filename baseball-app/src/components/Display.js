import React from 'react';

function Display({ balls, strikes }) {
    return (
        <div className='display'>
            <div className='balls'>
                <h3>Balls</h3>
                <div className='balls-count' data-testid="ballsValue">{balls}</div>
            </div>
            <div className='strikes'>
                <h3>Strikes</h3>
                <div className='strikes-count' data-testid="strikesValue">{strikes}</div>
            </div>
        </div>
    )
}

export default Display;