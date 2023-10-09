import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './CountriesPage.module.scss';
import Select from 'react-select';
import videoListAll from '~/data/dataMerge';
import { useEffect } from 'react';

import { fetchAllUser } from '~/services/UserService';
const cx = classNames.bind(styles);

const options = [
    { value: 'phim-moi', label: 'Phim mới' },
    { value: 'anime', label: 'Anime' },
    { value: 'phim-tinh-cam', label: 'Phim Tình Cảm' },
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
    return (
        <div className={cx('wrapper')}>
            <Select defaultValue={selectedOption} onChange={setSelectedOption} options={result} />
        </div>
    );
}

export default CountriesPage;
