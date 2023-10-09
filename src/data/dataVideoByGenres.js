import videoDataSource from './data';
import { genresType } from './data';

function videoGenresListAll(genresType, videoDataSource) {
    let arr = [];
    genresType.forEach((i) => {
        // Lặp qua để bắt value('movie') của key(valueGenresType)
        let type = i.valueGenresType;
        // filter loại phim trùng với value(valueGenresType) bằng value(genres)
        let listVideoByGenres = videoDataSource.filter((item) => item.genres.includes(type));
        // tạo 1 mảng mới lấy key của value(valueCategories) bằng với value(categoryType)
        arr.push({
            titleGenresType: i.titleGenresType,
            valueGenresType: i.valueGenresType,
            optionsGenresType: i.optionsGenresType,
            data: listVideoByGenres,
        });
    });
    return arr;
}

const videoGenresList = videoGenresListAll(genresType, videoDataSource);

export default videoGenresList;
