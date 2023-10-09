import classNames from 'classnames/bind';
import styles from './MovieList.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Select from 'react-select';
import Pagination from 'rc-pagination';
import 'rc-pagination/assets/index.css';
import locale from 'rc-pagination/es/locale/vi_VN';
import { optionsGenresType } from '~/data/data';

import config from '~/config';
library.add(fas);
const cx = classNames.bind(styles);

function MovieList(props) {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    };

    const movieData = props.movieGenres.data;

    const [perPage, setPerPage] = useState(20);
    const [size, setSize] = useState(perPage);
    const [current, setCurrent] = useState(1);

    const [selectedOption, setSelectedOption] = useState(optionsGenresType[0]);
    const [selectResult, setSelectResult] = useState([]);

    // console.log('selectedOption', selectedOption);

    /////////////////////

    // console.log('movieData', movieData);

    ///////////////////////////////LOGIC///////////////////////////////////////////

    function videoListByOption(optionsGenresType, movieData) {
        let arr = [];
        optionsGenresType.forEach((i) => {
            // Lặp qua để bắt value('phim-moi','phim-hot',...) của key(valueCategories)
            let type = i.value;
            // filter loại phim trùng với value(valueCategories) bằng value(categoryType)
            let listVideoByType = movieData.filter((item) => item.categoryType.includes(type));
            // tạo 1 mảng mới lấy key của value(valueCategories) bằng với value(categoryType)
            arr.push({ value: i.value, label: i.label, data: listVideoByType });
        });
        return arr;
    }

    const videoDataByOption = videoListByOption(optionsGenresType, movieData);
    // console.log('movieData', movieData);

    const videoByOption = videoDataByOption.filter((item) => item.value.includes(selectedOption.value));

    /////////////////////////////////////////////////////////////////////////////

    useEffect(() => {
        const fetchData = async () => {
            const getData = (current, pageSize) => {
                // Normally you should get the data from the server
                return videoByOption[0].data.slice((current - 1) * pageSize, current * pageSize);
            };
            setSelectResult(getData(current, size));
        };
        fetchData();
    }, [selectedOption]);

    //////////////////////////PAGINATION//////////////////////////////////////////////////
    const PerPageChange = (value) => {
        setSize(value);
        const newPerPage = Math.ceil(videoByOption[0].data.length / value);
        if (current > newPerPage) {
            setCurrent(newPerPage);
        }
    };

    // const getData = (current, pageSize) => {
    //     // Normally you should get the data from the server
    //     return movieData.slice((current - 1) * pageSize, current * pageSize);
    // };

    const PaginationChange = (page, pageSize) => {
        setCurrent(page);
        setSize(pageSize);
    };

    // const PrevNextArrow = (current, type, originalElement) => {
    //     if (type === 'prev') {
    //         return (
    //             <button>
    //                 <FontAwesomeIcon icon="fa-solid fa-angle-left" />
    //             </button>
    //         );
    //     }
    //     if (type === 'next') {
    //         return (
    //             <button>
    //                 <FontAwesomeIcon icon="fa-solid fa-angle-right" />
    //             </button>
    //         );
    //     }
    //     return originalElement;
    // };

    // console.log('selectResult', selectResult);

    // const test = { ...selectResult };
    // console.log('test', test);
    return (
        <>
            <div className={cx('wrapper')}>
                <div className={cx('wrapper-content')}>
                    <div className={cx('wrapper-content-title')}>
                        <div className={cx('wrapper-content-text')}>
                            <Link to={config.routes.home}>
                                <p>
                                    <FontAwesomeIcon icon="fa-solid fa-angle-left" /> Trang chủ
                                </p>
                            </Link>
                        </div>
                        <div className={cx('wrapper-select-title')}>
                            <h1>{props.movieGenres.titleGenresType}</h1>
                            <Select
                                value={selectedOption}
                                onChange={setSelectedOption}
                                options={optionsGenresType}
                                className={cx('react-select-container')}
                                classNamePrefix={cx('react-select')}
                                theme={(theme) => ({
                                    ...theme,
                                    borderRadius: 0,
                                    colors: {
                                        ...theme.colors,
                                        neutral50: 'grey',
                                        primary: 'black',
                                    },
                                })}
                            />
                        </div>
                    </div>

                    <div className={cx('content')}>
                        {selectResult > -1 ? (
                            <>
                                <div className={cx('content-empty')}>
                                    <p>Không Có Dữ Liệu X_X</p>
                                </div>
                            </>
                        ) : (
                            <>
                                {selectResult.map((result, index) => (
                                    <div className={cx('content-item')} key={index}>
                                        <Link to={config.routes.title + `${result.name}`} onClick={scrollToTop}>
                                            <div className={cx('item-wrapper')}>
                                                <div className={cx('icon-wrapper')}>
                                                    <div className={cx('overlay-gradient')}></div>

                                                    <FontAwesomeIcon
                                                        icon="fa-solid fa-play"
                                                        className={cx('img-icon')}
                                                    />
                                                    <h4>{result.vie_title}</h4>
                                                    <img
                                                        src={result.source}
                                                        alt={result.title}
                                                        className={cx('item-img')}
                                                    />
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                ))}
                            </>
                        )}
                    </div>
                </div>
                <div className={cx('paging-button')}>
                    <Pagination
                        className="pagination-data"
                        locale={locale}
                        onChange={PaginationChange}
                        total={videoByOption[0].data.length}
                        current={current}
                        pageSize={size}
                        showSizeChanger={false}
                        // itemRender={PrevNextArrow}
                        onShowSizeChange={PerPageChange}
                    />
                </div>
            </div>
        </>
    );
}

export default MovieList;
