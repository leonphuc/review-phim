import image1 from '~/assets/New folder/ky-hon.jpg';
import image1_banner from '~/assets/Banner/Tvseries/Hikaru-no-Go.jpg';
import image2 from '~/assets/New folder/nuoc-hoa-bien-hinh.jpg';
import image2_banner from '~/assets/Banner/Tvseries/Perfume.jpg';
import image3 from '~/assets/New folder/tro-choi-con-muc.jpg';
import image4 from '~/assets/New folder/tinh-than-gia-dinh.jpg';
import image5 from '~/assets/New folder/robot-hau-gai.jpg';
import image6 from '~/assets/New folder/Delightfully-Deceitful.jpg';
import image6_banner from '~/assets/Banner/Tvseries/Delightfully_Deceitful.jpg';
import image7 from '~/assets/New folder/the-brace-one.jpg';
import image8 from '~/assets/New folder/hijack.jpg';
import image8_banner from '~/assets/Banner/Movie/hijack.jpg';
import image9 from '~/assets/New folder/tidal-wave.jpg';
import image9_banner from '~/assets/Banner/Movie/Tidal-Wave.jpg';
import image10 from '~/assets/New folder/Big-Brother.jpg';
import image10_banner from '~/assets/Banner/Movie/Big-Brother.jpg';
import image11 from '~/assets/New folder/phim-dien-anh/sieu-lon-okja.jpg';
import image12 from '~/assets/New folder/phim-kinh-di/mo-quy.jpg';
import image13 from '~/assets/New folder/phim-kinh-di/bien-than.jpg';
import image14 from '~/assets/New folder/phim-kinh-di/the-boogeyman.jpg';
import image15 from '~/assets/New folder/New folder/anime/watashi-no-shiawase-na-kekkon.jpg';
import image16 from '~/assets/New folder/New folder/anime/jobless-reincarnation-recap-1.jpg';

const categories = [
    {
        titleCategories: 'Phim Hot',
        valueCategories: 'phim-hot',
    },
    {
        titleCategories: 'Phim Mới',
        valueCategories: 'phim-moi',
    },
    {
        titleCategories: 'Phim Hành Động',
        valueCategories: 'phim-hanh-dong',
    },
    {
        titleCategories: 'Phim Kinh Dị',
        valueCategories: 'phim-kinh-di',
    },
    // {
    //     titleCategories: 'Anime',
    //     valueCategories: 'anime',
    // },
];
export { categories };
///////////////////////////////////////////////////////////
const genresType = [
    {
        titleGenresType: 'Phim Điện Ảnh',
        valueGenresType: 'movie',
    },
    {
        titleGenresType: 'Phim Bộ',
        valueGenresType: 'tvseries',
    },
    {
        titleGenresType: 'Hoạt Hình',
        valueGenresType: 'anime',
    },
];

export { genresType };
///////////////////////////////////////
const optionsGenresType = [
    { value: 'phim-moi', label: 'Phim Mới' },
    { value: 'phim-tinh-cam', label: 'Phim Tình Cảm' },
    { value: 'phim-hanh-dong', label: 'Phim Hành Động' },
];
export { optionsGenresType };
/////////////////////////////////////////////////////////
const videoDataSource = [
    {
        source: image16,
        img_banner: image16,
        name: 'jobless-reincarnation-recap-1',
        title: 'Jobless Reincarnation Recap 1',
        vie_title: 'Thất Nghiệp Chuyển Sinh',
        genres: ['anime'],
        categoryType: ['phim-moi', 'phim-hanh-dong'],
        isBanner: {
            isAnime: true,
        },
        video_url: (
            <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/uyKFRKLg3IQ?si=-i5LDkQLF4iiqfIp"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
            ></iframe>
        ),
    },
    {
        source: image15,
        img_banner: image15,
        name: 'watashi-no-shiawase-na-kekkon',
        title: 'Watashi no Shiawase na Kekkon',
        vie_title: 'Cuộc Hôn Nhân Hạnh Phúc Của Tôi',
        genres: ['anime'],
        categoryType: ['phim-moi', 'phim-tinh-cam'],
        isBanner: {
            isAnime: true,
        },
        video_url: (
            <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/kvt86JR1E7c?si=fFht9P-sXPROsyVX"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
            ></iframe>
        ),
    },
    {
        source: image14,
        name: 'the-boogeyman',
        title: 'The Boogeyman',
        vie_title: 'Ông Kẹ',
        genres: ['movie'],
        categoryType: ['phim-moi', 'phim-kinh-di'],
        video_url: (
            <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/iAHw0NSbSN8?si=_Y3z8VSD_26YYxLE"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
            ></iframe>
        ),
    },
    {
        source: image13,
        name: 'bien-than',
        title: 'Biến Thân',
        vie_title: 'Biến Thân',
        genres: ['movie'],
        categoryType: ['phim-moi', 'phim-kinh-di'],
        video_url: (
            <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/qAD4UKsVXMY?si=tfzNIAUQCPhp3ibI"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
            ></iframe>
        ),
    },
    {
        source: image12,
        name: 'mo-quy',
        title: 'Mộ Quỷ',
        vie_title: 'Mộ Quỷ',
        genres: ['movie'],
        categoryType: ['phim-hot', 'phim-moi', 'phim-kinh-di'],
        video_url: (
            <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/BaD1Ubk-Hi0?si=PDDc8tE_G4o4qqkI"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
            ></iframe>
        ),
    },
    ///
    {
        source: image11,
        name: 'sieu-lon-okja',
        title: 'Siêu Lơn Okja',
        vie_title: 'Siêu Lợn Okja',
        genres: ['movie'],
        categoryType: ['phim-moi'],
        video_url: (
            <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/sKe4K_Q6KC4?si=Yt-dC6ncxN9Xe9Co"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
            ></iframe>
        ),
    },
    {
        source: image1,
        img_banner: image1_banner,
        name: 'ky-hon',
        title: 'Hikaru no Go',
        vie_title: 'Kỳ Hồn',
        genres: ['tvseries'],
        categoryType: ['phim-hot', 'phim-moi'],
        isBanner: {
            isMovie: false,
            isHome: true,
            isTvSeries: true,
        },
        video_url: (
            <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/FGwSPsPs7Tc?si=UD_tuIRd2oIaFmtt"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
            ></iframe>
        ),
    },
    {
        source: image2,
        img_banner: image2_banner,
        name: 'nuoc-hoa-bien-hinh',
        title: 'Perfume',
        vie_title: 'Nước Hoa Biến Hình',
        genres: ['tvseries'],
        categoryType: ['phim-hot', 'phim-moi'],
        isBanner: {
            isMovie: false,
            isHome: true,
            isTvSeries: true,
        },
        video_url: (
            <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/yy6YMxHW81w?si=OGQqEGqZY_yvEraf"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
            ></iframe>
        ),
    },
    {
        source: image3,
        name: 'the-chat-100',
        title: 'Thể Chất 100',
        vie_title: 'Thể Chất 100',
        genres: ['tvseries'],
        categoryType: ['phim-hot', 'phim-moi'],
        video_url: (
            <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/KbZvO_k_VWA?si=2kRiykbNqvRglHbB"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
            ></iframe>
        ),
    },
    {
        source: image4,
        name: 'tinh-than-gia-dinh',
        title: 'Tinh Thần Gia Đình',
        vie_title: 'Tinh Thần Gia Đình',
        genres: ['tvseries'],
        categoryType: ['phim-hot', 'phim-moi'],
        video_url: (
            <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/XdNuyTaqnLY?si=jE8sgDqj-2w0YtYJ"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
            ></iframe>
        ),
    },
    {
        source: image5,
        name: 'robot-hau-gai',
        title: 'Robot Hầu Gái',
        vie_title: 'Robot Hầu Gái',
        genres: ['movie'],
        categoryType: ['phim-moi'],
        video_url: (
            <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/TTnWJYaqQjM?si=NEFsEVQ8vGhhm76w"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
            ></iframe>
        ),
    },
    {
        source: image6,
        img_banner: image6_banner,
        name: 'delightfully-deceitful',
        title: 'Delightfully Deceitful',
        vie_title: 'Cú Lừa Nên Duyên',
        genres: ['movie'],
        categoryType: ['phim-moi', 'phim-hanh-dong'],
        isBanner: {
            isMovie: false,
            isHome: false,
            isTvSeries: true,
        },
        video_url: (
            <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/Sjcg98PsRPM?si=WA_5xQxw5yWBJji2"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
            ></iframe>
        ),
    },
    {
        source: image7,
        img_banner: image7,

        name: 'the-brace-one',
        title: 'The Brace One',
        vie_title: 'The Brace One',
        genres: ['movie'],
        categoryType: ['phim-hot', 'phim-moi', 'phim-hanh-dong'],
        isBanner: {
            isHome: false,
        },
        video_url: (
            <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/7a2jmFGMcyk?si=Ftomr7hhALwfZ_3M"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
            ></iframe>
        ),
    },
    {
        source: image8,
        img_banner: image8_banner,
        name: 'hijack',
        title: 'Hijack',
        vie_title: 'Không Tặc',
        genres: ['tvseries'],
        categoryType: ['phim-moi', 'phim-hanh-dong'],
        isBanner: {
            isMovie: true,
            isHome: true,
            isTvSeries: false,
        },
        description: {
            info: 'Phim kể về một chiếc máy bay từ Dubai đến London bị cướp trong chuyến bay kéo dài 7 giờ đồng hồ, trong khi các nhà chức trách trên mặt đất cố gắng tìm kiếm câu trả lời.',
        },
        video_url: (
            <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/sB-e1tlCR6o?si=-FuV1XunC4HR_jFs"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
            ></iframe>
        ),
    },
    {
        source: image9,
        img_banner: image9_banner,
        name: 'tidal-wave',
        title: 'Tidal Wave',
        vie_title: 'Sóng Thần',
        genres: ['movie'],
        categoryType: ['phim-moi', 'phim-hanh-dong'],
        isBanner: {
            isMovie: true,
            isHome: false,
            isTvSeries: false,
        },
        description: {
            info: 'Giáo sư Kim, một nhà địa chất biển, nhận ra sự nguy hiểm sắp xảy ra của một Mega Tsunami đi thẳng đến Haeundae, một điểm nghỉ nổi tiếng ở bờ biển phía nam Hàn Quốc. Anh ta tuyệt vọng cố gắng cảnh báo các nhà chức trách và cảnh báo những người đi nghỉ dưỡng không đáng sợ của thiên nhiên phá hủy 500 mph đứng đầu hướng của họ.',
        },
        video_url: (
            <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/r7ObGUuPi0M?si=qTRszLMQxN1zVnTm"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
            ></iframe>
        ),
    },
    {
        source: image10,
        img_banner: image10_banner,
        name: 'big-brother',
        title: 'Big Brother',
        vie_title: 'Đại Sư Huynh',
        genres: ['movie'],
        categoryType: ['phim-moi', 'phim-hanh-dong'],
        isBanner: {
            isMovie: true,
            isHome: false,
            isTvSeries: false,
        },
        description: {
            info: 'Một giáo viên trung học mỗi ngày đều đặn tới trường gõ đầu trẻ cho đến một hôm…cậu học sinh do anh chủ nhiệm dính vào rắc rối với một băng đảng xã hội đen và bị bắt cóc. Đó cũng là lúc bí mật của“anh” thầy trước giờ luôn hiền lành, hết mực yêu thương học sinh và có tâm với nghề bị bộc lộ. Có vẻ như quá khứ máu lửa không buông tha “anh” thầy mà buộc anh phải trở lại con người xưa nhưng có khác là lần này không phải chiến đấu cho bản thân anh, mà cho những đứa trẻ mà anh luôn xem chúng như những đứa em trai.',
        },
        video_url: (
            <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/yJyyHHm0FKI?si=JsIAq2gi2PCf8lxu"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
            ></iframe>
        ),
    },
];

export default videoDataSource;
