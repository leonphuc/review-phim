import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import { Link, useNavigate } from 'react-router-dom';
import config from '~/config';
import Menu, { MenuItem } from './Menu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect, useRef, useContext } from 'react';

import videoListAll from '~/data/dataMerge';
import videoDataSource from '~/data/data';
import useDebounce from '~/hooks/useDebounce';

import AuthModal from '../AuthModal';
import { UserContext } from '~/context/UserContext';
library.add(fas);

const cx = classNames.bind(styles);

function Header() {
    const navigate = useNavigate();
    // console.log(videoDataSource.length);
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(true);
    const [loading, setLoading] = useState(false);
    const [limitSearchResult, setLimitSearchResult] = useState(5);

    // const [tokenUser, setTokenUser] = useState(localStorage.getItem('token'));

    // console.log('tokenUser check : ', tokenUser);

    const { logout, user } = useContext(UserContext);

    const [authModal, setAuthModal] = useState(false);

    const inputRef = useRef();

    const debouncedValue = useDebounce(searchValue, 500);

    useEffect(() => {
        if (!debouncedValue.trim()) {
            setSearchResult([]);
            return;
        }

        const fetchData = async () => {
            setLoading(true);
            const nameVideos = videoDataSource.filter((item) => {
                return searchValue.toLowerCase() === '' ? '' : item.title.toLowerCase().includes(searchValue);
            });
            setSearchResult(nameVideos);
            setLoading(false);
        };

        fetchData();
    }, [debouncedValue]);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    };

    const handleChange = (e) => {
        const searchValue = e.target.value;
        if (!searchValue.startsWith(' ')) {
            setSearchValue(searchValue);
        }
    };

    const handleClickMovie = () => {
        setSearchValue('');
        scrollToTop();
    };

    const handleClear = () => {
        setSearchValue('');
        setSearchResult([]);
        inputRef.current.focus();
    };

    const handleHideResult = () => {
        setShowResult(false);
    };

    function handleAuthClick() {
        setAuthModal(true);
    }
    const handleLogOut = () => {
        logout();
        // localStorage.removeItem('token');
        // setTokenUser(null);
    };

    return (
        <>
            <header className={cx('wrapper')}>
                <>{authModal && <AuthModal setAuthModal={setAuthModal} />}</>

                <div className={cx('inner')}>
                    <Link to={config.routes.home}>
                        <h1>Logo</h1>
                    </Link>
                    <div className={cx('navbar-menu')}>
                        <Menu>
                            <MenuItem title="Trang Chủ" to={config.routes.home} />
                            <MenuItem title="Phim Điện Ảnh" to={config.routes.movie} />
                            <MenuItem title="Phim Bộ" to={config.routes.tvseries} />
                            <MenuItem title="Hoạt Hình" to={config.routes.anime} />

                            <div className={cx('navbar-menu-list')}>
                                <MenuItem title="Thể Loại" to={config.routes.genres} />
                                <div className={cx('nav-list-ul')}>
                                    <ul>
                                        {videoListAll.map((result, index) => (
                                            <div key={index} className={cx('nav-list-li')}>
                                                <Link to={config.routes.content + `${result.valueCategories}`}>
                                                    <li>
                                                        <FontAwesomeIcon
                                                            icon="fa-solid fa-caret-right"
                                                            className={cx('nav-list-icon')}
                                                        />
                                                        {result.titleCategories}
                                                    </li>
                                                </Link>
                                            </div>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            <MenuItem title="Quốc Gia" to={config.routes.countries} />
                        </Menu>
                    </div>
                    <div className={cx('user-bar')}>
                        {user && user.auth === true ? (
                            <button className={cx('user-btn')} onClick={handleLogOut}>
                                Đăng Xuất
                            </button>
                        ) : (
                            <button onClick={handleAuthClick} className={cx('user-btn')}>
                                Đăng Nhập
                            </button>
                        )}
                    </div>
                    <div className="search-bar">
                        <div className={cx('search-input')}>
                            <input
                                ref={inputRef}
                                type="text"
                                value={searchValue}
                                spellCheck="false"
                                onChange={handleChange}
                                onFocus={() => setShowResult(true)}
                                placeholder="Tìm Phim..."
                            />
                            <div className={cx('search-input-item')}>
                                {!!searchValue && !loading && (
                                    <button className={cx('clear')} onClick={handleClear}>
                                        <FontAwesomeIcon icon="fa-solid fa-circle-xmark" />
                                    </button>
                                )}

                                {loading && <FontAwesomeIcon className={cx('loading')} icon="fa-solid fa-spinner" />}
                                <button className={cx('search-btn')} onMouseDown={(e) => e.preventDefault()}>
                                    <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
                                </button>
                            </div>
                        </div>

                        <div className={cx('search-result')}>
                            {searchResult
                                .slice(0, limitSearchResult ? limitSearchResult : searchResult.length)
                                .map((res, index) => (
                                    <div key={index}>
                                        <Link to={config.routes.title + `${res.name}`} onClick={handleClickMovie}>
                                            <div className={cx('search-result-item')}>
                                                <img
                                                    src={res.source}
                                                    alt={res.title}
                                                    className={cx('search-result-img')}
                                                />
                                                <p>{res.title}</p>
                                            </div>
                                        </Link>
                                    </div>
                                ))}
                        </div>
                    </div>
                    <div className={cx('user-info')}>
                        {user && user.email ? <span>Welcome : {user.email}</span> : null}
                    </div>
                </div>
            </header>
        </>
    );
}

export default Header;
