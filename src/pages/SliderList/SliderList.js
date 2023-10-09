import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import classNames from 'classnames/bind';
import styles from './SliderList.module.scss';
import config from '~/config';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useState } from 'react';

library.add(fas);

const cx = classNames.bind(styles);
const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
};

// function SampleNextArrow(props) {
//     const { className, style, onClick } = props;
//     return <div className={className} style={{ ...style, display: 'block', background: 'red' }} onClick={onClick} />;
// }

// function SamplePrevArrow(props) {
//     const { className, style, onClick } = props;
//     return <div className={className} style={{ ...style, display: 'block', background: 'green' }} onClick={onClick} />;
// }

function SliderList(props) {
    const [limitSearchResult, setLimitSearchResult] = useState(5);

    const settings = {
        className: 'center',
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        // autoplay: true,
        // autoplaySpeed: 5000,
        speed: 1000,
        arrows: true,
        initialSlide: 1,
        centerMode: true,
        centerPadding: '60px',
        // nextArrow: <SampleNextArrow />,
        // prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1590,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    centerMode: false,
                },
            },
            {
                breakpoint: 1090,
                settings: {
                    centerMode: true,

                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1,
                },
            },
            {
                breakpoint: 720,
                settings: {
                    centerMode: false,

                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <>
            <div className={cx('wrapper')}>
                <Slider {...settings} className={cx('slider-banner')}>
                    {props.videoGenres.data
                        .slice(0, limitSearchResult ? limitSearchResult : null)
                        .map((res, index, exact) => (
                            <div key={index}>
                                {/* {limitSearchResult <= props.videoGenres.data.length ? ( */}
                                <Link to={config.routes.title + `${res.name}`} exact={`${exact}`} onClick={scrollToTop}>
                                    <div className={cx('img-wrapper')}>
                                        <div className={cx('img-banner')}>
                                            <div className={cx('overlay-gradient')}></div>

                                            <img
                                                src={res.source}
                                                title={res.title}
                                                alt={res.title}
                                                className={cx('item-img')}
                                            />
                                            <FontAwesomeIcon icon="fa-solid fa-play" className={cx('img-icon')} />
                                            <h3>{res.vie_title}</h3>
                                        </div>
                                    </div>
                                </Link>
                                {/* ) : (
                                    <div key={index}>
                                        <Link
                                            to={config.routes.title + `${res.name}`}
                                            exact={`${exact}`}
                                            onClick={scrollToTop}
                                        >
                                            <div className={cx('img-wrapper')}>
                                                <div className={cx('img-banner')}>
                                                    <div className={cx('overlay-gradient')}></div>
                                                    <img
                                                        src={res.source}
                                                        title={res.title}
                                                        alt={res.title}
                                                        className={cx('item-img')}
                                                    />
                                                    <FontAwesomeIcon
                                                        icon="fa-solid fa-play"
                                                        className={cx('img-icon')}
                                                    />
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                )} */}
                            </div>
                        ))}

                    <div>
                        <Link
                            to={config.routes.content + `${props.videoGenres.valueCategories}`}
                            // exact={`${exact}`}
                            onClick={scrollToTop}
                        >
                            <div className={cx('more-wrapper')}>
                                <div className={cx('more-banner')}>
                                    <div>
                                        <img
                                            src={props.videoGenres.data[0].source}
                                            title={props.videoGenres.data[0].title}
                                            alt={props.videoGenres.data[0].title}
                                            className={cx('more-img')}
                                        />
                                    </div>
                                    <div className={cx('more-icon')}>
                                        <h3>Xem tất cả </h3>{' '}
                                        <FontAwesomeIcon icon="fa-solid fa-play" className={cx('play-icon')} />
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                </Slider>
            </div>
        </>
    );
}

export default SliderList;
