import classNames from 'classnames/bind';
import styles from './VideoList.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import SliderList from '~/pages/SliderList';
import { Link } from 'react-router-dom';
import config from '~/config';
import { useState } from 'react';

import videoListAll from '~/data/dataMerge';

library.add(fas);
const cx = classNames.bind(styles);

function VideoList(props) {
    return (
        <>
            {videoListAll.map((result, index) => (
                <div className={cx('hot-videos')} key={index}>
                    <div className={cx('hot-videos-title')}>
                        <Link to={config.routes.content + `${result.valueCategories}`}>
                            <h1 className={cx('videos-title')}>
                                {result.titleCategories}{' '}
                                <FontAwesomeIcon icon="fa-solid fa-angle-right" className={cx('videos-icon')} />
                            </h1>
                        </Link>
                    </div>
                    <SliderList videoGenres={result} />
                </div>
            ))}
        </>
    );
}

export default VideoList;
