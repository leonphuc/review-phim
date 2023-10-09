import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import classNames from 'classnames/bind';
import styles from './TvSeriesItem.module.scss';
import { Link } from 'react-router-dom';
import config from '~/config';
import dataItems from '~/data/data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

import MovieList from '~/pages/components/MovieList';
import videoGenresList from '~/data/dataVideoByGenres';

library.add(fas);
const cx = classNames.bind(styles);

function TvSeriesItem() {
    const isMovieBanner = dataItems.filter((item) => item?.isBanner?.isTvSeries === true);

    const isMovieGenresList = videoGenresList.filter((item) => item.valueGenresType.includes('tvseries'));
    const movieGenres = { ...isMovieGenresList[0] };

    const settings = {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 1000,
        adaptiveHeight: true,
        dots: true,
        arrows: false,
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
            <div className={cx('body-content')}>
                <MovieList movieGenres={movieGenres} />
            </div>
        </>
    );
}

export default TvSeriesItem;
