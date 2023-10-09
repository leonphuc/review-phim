import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import classNames from 'classnames/bind';
import styles from './SliderContent.module.scss';
import { Link } from 'react-router-dom';
import config from '~/config';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

import MovieList from '~/pages/components/MovieList';
import videoGenresList from '~/data/dataVideoByGenres';
import videoDataSource from '~/data/data';
const cx = classNames.bind(styles);

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return <div className={className} style={{ ...style, display: 'block', background: 'red' }} onClick={onClick} />;
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return <div className={className} style={{ ...style, display: 'block', background: 'green' }} onClick={onClick} />;
}

function SliderContent() {
    const isMovieBanner = videoDataSource.filter((item) => item?.isBanner?.isHome === true);

    // console.log('isMovieBanner', isMovieBanner);

    const settings = {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        fade: false,
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 1000,
        // adaptiveHeight: true,
        dots: true,
        arrows: false,
        // nextArrow: <SampleNextArrow />,
        // prevArrow: <SamplePrevArrow />,
    };

    return (
        <>
            <div className={cx('wrapper')}>
                <Slider {...settings} className={cx('slider-banner')}>
                    {isMovieBanner.map((result, index) => (
                        <div key={index}>
                            <div className={cx('img-banner')}>
                                <img
                                    src={result.img_banner}
                                    title={result.title}
                                    alt={result.title}
                                    className={cx('img-banner-item')}
                                />
                                <div className={cx('wrapper-banner-info')}>
                                    <div className={cx('banner-info')}>
                                        <p className={cx('banner-title')}>{result.title}</p>
                                        <span className={cx('banner-vie-name')}>({result.vie_title})</span>
                                        <div className={cx('banner-btn-watch')}>
                                            <Link to={config.routes.title + `${result.name}`}>
                                                Xem Phim{' '}
                                                <FontAwesomeIcon
                                                    icon="fa-solid fa-play"
                                                    className={cx('banner-icon-watch')}
                                                />
                                            </Link>
                                        </div>
                                        <div>
                                            <p className={cx('banner-des')}>{result?.description?.info}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </>
    );
}

export default SliderContent;
