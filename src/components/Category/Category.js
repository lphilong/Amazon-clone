import React, { useRef } from 'react';
import { category } from '../../data/HomePageData';
import { Link } from 'react-router-dom';
import { CgChevronRight, CgChevronLeft } from 'react-icons/cg';
import { SmoothHorizontalScrolling } from '../../utils/index';
import './Category.css';

function Category() {
    const slideRef = useRef();
    const categoryRef = useRef();

    const handleScrollRight = () => {
        console.log(slideRef.current.scrollWidth);
        console.log(categoryRef.current.clientWidth);
        const maxScrollLeft = slideRef.current.scrollWidth - slideRef.current.clientWidth;
        if (slideRef.current.scrollLeft < maxScrollLeft) {
            SmoothHorizontalScrolling(
                slideRef.current,
                250,
                categoryRef.current.clientWidth * 3,
                slideRef.current.scrollLeft,
            );
        }
    };

    const handleScrollLeft = () => {
        if (slideRef.current.scrollLeft > 0) {
            SmoothHorizontalScrolling(
                slideRef.current,
                250,
                -categoryRef.current.clientWidth * 3,
                slideRef.current.scrollLeft,
            );
        }
    };
    return (
        <div className="category__main">
            <div className="category__container">
                <div className="category__content" ref={slideRef}>
                    {category.map((item) => {
                        return (
                            <Link to="/sp" key={item.id}>
                                <div className="category__box" ref={categoryRef}>
                                    <div className="category__description">{item.des}</div>
                                    <img src={item.img} alt="" className="category__img" />
                                </div>
                            </Link>
                        );
                    })}
                </div>
                <div className="category__button  right " onClick={handleScrollRight}>
                    <CgChevronRight className="buttonIcon" />
                </div>
                <div className="category__button left">
                    <CgChevronLeft className="buttonIcon" onClick={handleScrollLeft} />
                </div>
            </div>
        </div>
    );
}

export default Category;
