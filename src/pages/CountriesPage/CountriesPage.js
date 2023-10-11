import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './CountriesPage.module.scss';
import Select from 'react-select';
import videoListAll from '~/data/dataMerge';
import { useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { fetchAllUser } from '~/services/UserService';
const cx = classNames.bind(styles);

const options = [
    { value: 'phim-moi', label: 'Phim mới' },
    { value: 'anime', label: 'Anime' },
    { value: 'phim-tinh-cam', label: 'Phim Tình Cảm' },
];

const images = [
    {
        id: 1,
        src: 'https://phimmoiyyy.net/wp-content/uploads/2023/10/Phim-Biyak.jpg',
    },
    {
        id: 2,
        src: 'https://vcdn-ngoisao.vnecdn.net/2022/02/09/hot1_m_900x540.jpg',
    },
    {
        id: 3,
        src: 'https://afamilycdn.com/zoom/640_400/2019/2/25/avatar1551079860411-1551079860411686096470-crop-15510798867791793347140.jpg',
    },
    {
        id: 4,
        src: 'https://image.tmdb.org/t/p/w500/vsrYscw6M5g1OEPxll9QTy6C9IK.jpg',
    },
    {
        id: 5,
        src: 'https://image.tmdb.org/t/p/w500/tC78Pck2YCsUAtEdZwuHYUFYtOj.jpg',
    },
];

function CountriesPage() {
    const itemVideo = videoListAll[0].data[0].categoryType;
    // console.log('videoListAll', itemVideo);

    const result = itemVideo.map((value, index) => ({ [`value`]: value, [`label`]: value }));

    // console.log('result', result);
    const getUsers = async () => {
        let res = await fetchAllUser();
        // console.log('>>>>> check res: ', res);
    };
    useEffect(() => {
        getUsers();
    }, []);

    const [selectedOption, setSelectedOption] = useState(null);

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 720,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div className={cx('wrapper')}>
            {/* <Select defaultValue={selectedOption} onChange={setSelectedOption} options={result} /> */}
            <div className={cx('wrapper-content')}>
                <h1>Đang Cập Nhật</h1>
            </div>
            {/* <div>
                <h2> Responsive </h2>
                <Slider {...settings}>
                    {images.map((res) => (
                        <div className={cx('img-wrapper')}>
                            <div className={cx('img-banner')} key={res.id}>
                                <img alt="sdsd" src={res.src} />
                            </div>
                        </div>
                    ))}
                </Slider>
            </div> */}
        </div>
    );
}

export default CountriesPage;
