import videoDataSource from './data';
import { categories } from './data';

function videoList(categories, videoDataSource) {
    let arr = [];
    categories.forEach((i) => {
        // Lặp qua để bắt value('phim-moi','phim-hot',...) của key(valueCategories)
        let type = i.valueCategories;
        // filter loại phim trùng với value(valueCategories) bằng value(categoryType)
        let listVideoByType = videoDataSource.filter((item) => item.categoryType.includes(type));
        // tạo 1 mảng mới lấy key của value(valueCategories) bằng với value(categoryType)
        arr.push({ titleCategories: i.titleCategories, valueCategories: i.valueCategories, data: listVideoByType });
    });
    return arr;
}

const videoListAll = videoList(categories, videoDataSource);

export default videoListAll;
