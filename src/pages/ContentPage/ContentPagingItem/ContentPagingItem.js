import { Link, useParams } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './ContentPagingItem.module.scss';
import config from '~/config';
import { useState } from 'react';
import Pagination from 'rc-pagination';
import 'rc-pagination/assets/index.css';
import locale from 'rc-pagination/es/locale/vi_VN';
import Select from 'react-select';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

import videoDataSource from '~/data/data';

const cx = classNames.bind(styles);

function ContentPagingItem(props) {
    const itemVideo = { ...props.videoItem[0] };

    // console.log('itemVideo', itemVideo);
    const videoData = itemVideo.data;

    // console.log('videoData', videoData);

    // videoData.forEach((element) => console.log(element.categoryType.includes('phim-hanh-dong')));
    const videoDataGenres = videoData.map((element) => element.categoryType);

    // console.log('videoDataGenres', videoDataGenres);

    const [perPage, setPerPage] = useState(20);
    const [size, setSize] = useState(perPage);
    const [current, setCurrent] = useState(1);
    const [selectedOption, setSelectedOption] = useState(null);

    const PerPageChange = (value) => {
        setSize(value);
        const newPerPage = Math.ceil(videoData.length / value);
        if (current > newPerPage) {
            setCurrent(newPerPage);
        }
    };

    const getData = (current, pageSize) => {
        // Normally you should get the data from the server
        return videoData.slice((current - 1) * pageSize, current * pageSize);
    };

    const PaginationChange = (page, pageSize) => {
        setCurrent(page);
        setSize(pageSize);
    };

    const PrevNextArrow = (current, type, originalElement) => {
        if (type === 'prev') {
            return (
                <button>
                    <FontAwesomeIcon icon="fa-solid fa-angle-left" />
                </button>
            );
        }
        if (type === 'next') {
            return (
                <button>
                    <FontAwesomeIcon icon="fa-solid fa-angle-right" />
                </button>
            );
        }
        return originalElement;
    };

    return (
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
                    <h1>{itemVideo.titleCategories}</h1>
                </div>

                <div className={cx('content')}>
                    {getData(current, size).map((result, index) => (
                        <div className={cx('content-item')} key={index}>
                            <Link to={config.routes.title + `${result.name}`}>
                                <div className={cx('item-wrapper')}>
                                    <div className={cx('icon-wrapper')}>
                                        <div className={cx('overlay-gradient')}></div>
                                        <FontAwesomeIcon icon="fa-solid fa-play" className={cx('img-icon')} />
                                        <h4>{result.vie_title}</h4>
                                        <img src={result.source} alt={result.title} className={cx('item-img')} />
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
                <div className={cx('paging-content')}>
                    <Pagination
                        className="pagination-data"
                        // showTotal={(total, range) => (
                        //     <div>
                        //         Showing {range[0]}-{range[1]} of {total}
                        //     </div>
                        // )}
                        locale={locale}
                        onChange={PaginationChange}
                        total={videoData.length}
                        current={current}
                        pageSize={size}
                        showSizeChanger={false}
                        // itemRender={PrevNextArrow}
                        onShowSizeChange={PerPageChange}
                    />
                </div>
            </div>
        </div>
    );
}

export default ContentPagingItem;
