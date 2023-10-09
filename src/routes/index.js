import HomePage from '~/pages/HomePage/HomePage';
import MoviePage from '~/pages/MoviePage/MoviePage';
import TvSeriesPage from '~/pages/TvSeriesPage/TvSeriesPage';
import GenresPage from '~/pages/GenresPage/GenresPage';
import CountriesPage from '~/pages/CountriesPage/CountriesPage';
import TitlePage from '~/pages/TitlePage/TitlePage';
import ContentPage from '~/pages/ContentPage';
import AnimePage from '~/pages/AnimePage';
import NotFound from './NotFound';

const publicRoutes = [
    { path: '/', component: HomePage },
    { path: '/movie', component: MoviePage },
    { path: '/tvseries', component: TvSeriesPage },
    { path: '/genres', component: GenresPage },
    { path: '/countries', component: CountriesPage },
    { path: '/title/:path', component: TitlePage },
    { path: '/content/:path', component: ContentPage },
    { path: '/anime', component: AnimePage },
    { path: '/*', component: NotFound },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
