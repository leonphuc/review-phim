import { useParams } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './ContentPage.module.scss';

import dataItems from '~/data/data';
import videoListAll from '~/data/dataMerge';

import ContentPageItem from './ContentPageItem';
import ContentPagingItem from './ContentPagingItem';
const cx = classNames.bind(styles);

function ContentPage() {
    const { path } = useParams();

    const videoItem = videoListAll.filter((item) => item.valueCategories.includes(path));

    return (
        <div>
            {/* <ContentPageItem videoItem={videoItem} /> */}
            <ContentPagingItem videoItem={videoItem} />
        </div>
    );
}

export default ContentPage;
