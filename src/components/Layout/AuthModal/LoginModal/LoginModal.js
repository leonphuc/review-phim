import { useNavigate } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';
import classNames from 'classnames/bind';
import styles from '../AuthModal.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

import { handleLoginRedux } from '~/redux/actions/userAction';
import { useDispatch, useSelector } from 'react-redux';
import { isAxiosError } from 'axios';

library.add(fas);
const cx = classNames.bind(styles);

function LoginModal({ setAuthModal, setLoginStatus, setSignUpStatus }) {
    const dispatch = useDispatch();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errText, setErrText] = useState('');
    // const [loading, setLoading] = useState(false);

    const isLoading = useSelector((state) => state.user.isLoading);
    const isError = useSelector((state) => state.user.isError);
    const account = useSelector((state) => state.user.account);

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        setErrText('');
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
        setErrText('');
    };

    const handleLogin = async (e) => {
        // console.log('spam');
        e.preventDefault();

        if (!email || !password) {
            console.log('chưa nhập Email/Passord ');
            return;
        }
        dispatch(handleLoginRedux(email, password));
    };

    const handlePressEnter = (e) => {
        if (e && e.key === 'Enter') {
            handleLogin(e);
        }
    };

    function handleSignUp() {
        setLoginStatus(false);
        setSignUpStatus(true);
    }

    useEffect(() => {
        if (account && account.auth === true) {
            setAuthModal(false);
        }
    }, [account]);
    return (
        <>
            <div className={cx('loginContainer')}>
                <div className={cx('signup-container')}>
                    <form onSubmit={handleLogin} onKeyDown={handlePressEnter}>
                        <h2 className={cx('login-title')}>Đăng Nhập</h2>
                        <div className={cx('signup-wrapper')}>
                            <p>Tài Khoản: eve.holt@reqres.in</p>
                            <div className={cx('signup-contain')}>
                                <div className={cx('signup-form')}>
                                    <input
                                        type="text"
                                        placeholder="Tài khoản "
                                        name="email"
                                        value={email}
                                        onChange={handleEmailChange}
                                        className={cx('signup-input')}
                                    />
                                </div>
                            </div>
                            <div className={cx('signup-contain')}>
                                <div className={cx('signup-form')}>
                                    <input
                                        type="text"
                                        placeholder="Mật khẩu"
                                        name="email"
                                        value={password}
                                        onChange={handlePasswordChange}
                                        className={cx('signup-input')}
                                    />
                                </div>
                            </div>
                            <div className={cx('message-text')}>
                                {isError ? (
                                    <p>
                                        <FontAwesomeIcon
                                            icon="fa-solid fa-circle-exclamation"
                                            style={{ color: '#f35a49' }}
                                        />{' '}
                                        Tài khoản hoặc mật khẩu không đúng
                                    </p>
                                ) : (
                                    ''
                                )}
                            </div>
                            <div className={cx('signup-contain')}>
                                <button
                                    className={cx('signup-btn', email && password && !isLoading ? 'active' : '')}
                                    type="submit"
                                    disabled={(!email && !password) || isLoading ? true : false}
                                >
                                    {isLoading && <FontAwesomeIcon icon="fa-solid fa-spinner" spinPulse />}&nbsp;Đăng
                                    Nhập
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div className={cx('footer')}>
                <h3>Chưa có tài khoản?</h3>
                <h3>
                    <a onClick={handleSignUp}>Đăng Ký</a>
                </h3>
            </div>
        </>
    );
}

export default LoginModal;
