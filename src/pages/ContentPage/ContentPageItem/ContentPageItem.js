import { Link, useParams } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './ContentPageItem.module.scss';
import config from '~/config';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function ContentPageItem(props) {
    const itemVideo = { ...props.videoItem[0] };

    console.log('itemVideo', itemVideo);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('wrapper-content')}>
                <div className={cx('wrapper-content-title')}>
                    <Link to={config.routes.home}>
                        <p>
                            <FontAwesomeIcon icon="fa-solid fa-angle-left" /> Trang chủ
                        </p>
                    </Link>
                    <h1>{itemVideo.titleCategories}</h1>
                </div>

                <div className={cx('content')}>
                    {itemVideo.data.map((result, index) => (
                        <div className={cx('content-item')} key={index}>
                            <Link to={config.routes.title + `${result.name}`}>
                                <div className={cx('item-wrapper')}>
                                    <div className={cx('icon-wrapper')}>
                                        <FontAwesomeIcon icon="fa-solid fa-play" className={cx('img-icon')} />
                                        <img src={result.source} alt={result.title} className={cx('item-img')} />
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ContentPageItem;
