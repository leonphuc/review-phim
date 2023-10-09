import { Link, useParams } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './GenresPageItem.module.scss';
import config from '~/config';

import videoListAll from '~/data/dataMerge';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const cx = classNames.bind(styles);

function GenresPageItem() {
    // console.log(videoListAll);
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
                            <h1>Thể Loại</h1>
                        </div>
                    </div>

                    <div className={cx('content')}>
                        {videoListAll.map((result, index) => (
                            <div className={cx('content-item')} key={index}>
                                <Link to={config.routes.content + `${result.valueCategories}`}>
                                    <div className={cx('item-wrapper')}>
                                        <div className={cx('icon-wrapper')}>
                                            <div className={cx('img-icon')}>
                                                <h4>
                                                    {result.titleCategories}{' '}
                                                    <FontAwesomeIcon
                                                        icon="fa-solid fa-angle-right"
                                                        className={cx('right-icon')}
                                                    />
                                                </h4>
                                            </div>

                                            <img
                                                src={result.data[0].source}
                                                alt={result.data[0].title}
                                                className={cx('item-img')}
                                            />
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default GenresPageItem;
