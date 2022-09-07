import React from 'react';
import PriceRanges from '../../components/PriceRanges/priceranges';
import Rate from '../../components/Rating/Rating';
import './Sidebar.css';
export function Sidebar() {
    return (
        <div className="sidebar__container">
            <div className="sidebar__content">
                <PriceRanges />
                <Rate />
            </div>
        </div>
    );
}
