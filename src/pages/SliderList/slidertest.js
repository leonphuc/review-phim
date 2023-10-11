<div className={cx('wrapper')}>
    <Slider {...settings} className={cx('slider-banner')}>
        {props.videoGenres.data.slice(0, limitSearchResult ? limitSearchResult : null).map((res, index, exact) => (
            <div key={index}>
                <Link to={config.routes.title + `${res.name}`} exact={`${exact}`} onClick={scrollToTop}>
                    <div className={cx('img-wrapper')}>
                        <div className={cx('img-banner')}>
                            <div className={cx('overlay-gradient')}></div>
                            <img src={res.source} title={res.title} alt={res.title} className={cx('item-img')} />
                            <FontAwesomeIcon icon="fa-solid fa-play" className={cx('img-icon')} />
                            <h3>{res.vie_title}</h3>
                        </div>
                    </div>
                </Link>
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
                        <img
                            src={props.videoGenres.data[0].source}
                            title={props.videoGenres.data[0].title}
                            alt={props.videoGenres.data[0].title}
                            className={cx('more-img')}
                        />

                        <div className={cx('more-icon')}>
                            <h3>Xem tất cả </h3> <FontAwesomeIcon icon="fa-solid fa-play" className={cx('play-icon')} />
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    </Slider>
</div>;
