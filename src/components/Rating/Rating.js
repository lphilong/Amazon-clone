import React from 'react';
import { useAuth } from '../../authContext';
import Rating from '@mui/material/Rating';
function Rate() {
    const { rating, setRating } = useAuth();
    return (
        <div style={{ paddingLeft: '10px' }}>
            <h2 style={{ margin: '10px 0' }}>Customer Reviews</h2>
            <Rating
                value={rating}
                size="large"
                onChange={(event, newValue) => {
                    setRating(newValue);
                }}
            />
        </div>
    );
}

export default Rate;
