import React from 'react';
import './HomePage.css';
import Banner from '../../components/Banner/Banner';
import Category from '../../components/Category/Category';

function HomePage() {
    return (
        <div className="home">
            <div className="home__container">
                <Banner />
                {/*{homepageProduct.map((item) => {
                    return <Category value={item} />;
                })}*/}
                <Category />
            </div>
        </div>
    );
}
export default HomePage;
