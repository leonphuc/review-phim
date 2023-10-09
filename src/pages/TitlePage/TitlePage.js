import classNames from 'classnames/bind';
import styles from './TitlePage.module.scss';
import { useParams, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
// import { fas } from '@fortawesome/free-solid-svg-icons';

import videoDataSource from '~/data/data';
import { useState, useEffect } from 'react';
import SliderList from '../SliderList';
import VideoList from '../components/VideoList';
// library.add(fas);
const cx = classNames.bind(styles);

function TitlePage() {
    const [classBtn, setClassBtn] = useState('');
    const [itemResult, setItemResult] = useState([]);
    const { path } = useParams();

    useEffect(() => {
        async function fetchData() {
            try {
                const items = await videoDataSource.find((item) => item.name === path);
                setItemResult(items);
                setClassBtn('');
            } catch (error) {
                console.log('Error');
            }
        }
        fetchData();
    }, [path]);

    // console.log('itemResult', classBtn);

    // console.log('path', path);

    // const itemsHot = videoDataSource.filter((item) => item?.categoryType?.includes('phim-hot'));

    const addClassBtn = () => {
        setClassBtn('active');
    };

    return (
        <>
            <div className={cx('wrapper')}>
                <div className={cx('banner')}>
                    <div className={cx('banner-img', classBtn)}>
                        <img alt={itemResult.title} src={itemResult.source} className={cx('banner-img-item')} />
                        <div className={cx('wrapper-icon')}>
                            <button className={cx('play-btn')}>
                                <FontAwesomeIcon
                                    icon="fa-solid fa-circle-play"
                                    className={cx('play-btn-icon')}
                                    onClick={addClassBtn}
                                />
                            </button>
                        </div>
                    </div>
                    <div className={cx('banner-video', classBtn)}>{itemResult.video_url}</div>
                </div>
            </div>
            <VideoList />
        </>
    );
}

export default TitlePage;
