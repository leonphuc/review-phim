import classNames from 'classnames/bind';
import styles from './HomeContent.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

import SliderContent from '~/pages/SliderContent';
import VideoList from '~/pages/components/VideoList';

library.add(fas);
const cx = classNames.bind(styles);

function HomeContent() {
    return (
        <>
            <div className={cx('home-wrapper')}>
                <div className={cx('banner-videos')}>
                    <SliderContent />
                </div>
                <div className={cx('slider-wrapper-content')}>
                    <VideoList />
                </div>
            </div>
        </>
    );
}

export default HomeContent;
