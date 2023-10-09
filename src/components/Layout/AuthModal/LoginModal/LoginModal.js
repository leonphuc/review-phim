import { useNavigate } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';
import classNames from 'classnames/bind';
import styles from '../AuthModal.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

import { loginApi } from '~/services/UserService';
import { UserContext } from '~/context/UserContext';

library.add(fas);
const cx = classNames.bind(styles);

function LoginModal({ setAuthModal, setLoginStatus, setSignUpStatus }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errText, setErrText] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const { loginContext } = useContext(UserContext);

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        setErrText('');
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
        setErrText('');
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);

        if (!email || !password) {
            console.log('chưa nhập Email/Passord ');
            setLoading(false);
            return;
        }
        let res = await loginApi(email.trim(), password);
        // console.log('res check: ', res);
        if (res && res.token) {
            loginContext(email, res.token);
            setAuthModal(false);
        } else {
            if (res && res.status === 400) {
                setErrText(res.data.error);
            }
        }
        setLoading(false);
    };

    const handlePressEnter = (e) => {
        // e.preventDefault();
        if (e && e.key === 'Enter') {
            handleLogin(e);
        }
    };

    function handleSignUp() {
        setLoginStatus(false);
        setSignUpStatus(true);
    }
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
                                {errText ? (
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
                                    className={cx('signup-btn', email && password ? 'active' : '')}
                                    type="submit"
                                    disabled={!email && !password ? true : false}
                                >
                                    {loading && <FontAwesomeIcon icon="fa-solid fa-spinner" spinPulse />}&nbsp;Đăng Nhập
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
