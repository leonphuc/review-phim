import classNames from 'classnames/bind';
import styles from '../AuthModal.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

import { useState } from 'react';
library.add(fas);
const cx = classNames.bind(styles);

function SignUpModal({ setMultiAuthStatusModal, setLoginStatus, setSignUpStatus }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function hanldeSignUp(e) {
        e.preventDefault();
    }
    function handleLogIn() {
        setSignUpStatus(false);
        setLoginStatus(true);
    }
    return (
        <>
            <div className={cx('loginContainer')}>
                <div className={cx('signup-container')}>
                    <form onSubmit={hanldeSignUp}>
                        <h2 className={cx('login-title')}>Đăng Ký</h2>
                        <div className={cx('signup-wrapper')}>
                            <div className={cx('signup-contain')}>
                                <div className={cx('signup-form')}>
                                    <input
                                        type="text"
                                        placeholder="Tài khoản"
                                        name="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
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
                                        onChange={(e) => setPassword(e.target.value)}
                                        className={cx('signup-input')}
                                    />
                                </div>
                            </div>
                            <div className={cx('signup-contain')}>
                                <button className={cx('signup-btn')} type="submit">
                                    Đăng Ký
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div className={cx('footer')}>
                <h3>Đã có tài khoản?</h3>
                <h3>
                    <a onClick={handleLogIn}>Đăng Nhập</a>
                </h3>
            </div>
        </>
    );
}

export default SignUpModal;
