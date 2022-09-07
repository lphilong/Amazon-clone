import React, { useRef } from 'react';
import { homepageBanner } from '../../data/HomePageData';
import './Banner.css';
import { CgChevronRight, CgChevronLeft } from 'react-icons/cg';
import { SmoothHorizontalScrolling } from '../../utils/index';
function Banner() {
    const slideRef = useRef();
    const bannerRef = useRef();
    const handleScrollRight = () => {
        console.log(slideRef.current.scrollWidth);
        console.log(bannerRef.current.clientWidth);
        const maxScrollLeft = slideRef.current.scrollWidth - slideRef.current.clientWidth;
        if (slideRef.current.scrollLeft < maxScrollLeft) {
            SmoothHorizontalScrolling(
                slideRef.current,
                250,
                bannerRef.current.clientWidth * 1,
                slideRef.current.scrollLeft,
            );
        }
    };

    const handleScrollLeft = () => {
        if (slideRef.current.scrollLeft > 0) {
            SmoothHorizontalScrolling(
                slideRef.current,
                250,
                -bannerRef.current.clientWidth,
                slideRef.current.scrollLeft,
            );
        }
    };
    return (
        <div className="home__banner" ref={slideRef}>
            {homepageBanner.map((item) => {
                return (
                    <div key={item.id} ref={bannerRef}>
                        <img src={item.img} alt="" className="banner__img" />
                    </div>
                );
            })}
            <div className="banner__button  right " onClick={handleScrollRight}>
                <CgChevronRight className="buttonIcon" />
            </div>
            <div className="banner__button left">
                <CgChevronLeft className="buttonIcon" onClick={handleScrollLeft} />
            </div>
        </div>
    );
}

export default Banner;
