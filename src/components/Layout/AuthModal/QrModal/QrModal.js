import { useState } from 'react';
import classNames from 'classnames/bind';
import styles from '../AuthModal.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(fas);
const cx = classNames.bind(styles);

function QrModal({ setAuthModal, setLoginStatus, setSignUpStatus, setQrSignUpStatus }) {
    function handleLogIn() {
        setQrSignUpStatus(false);
        setLoginStatus(true);
    }
    return (
        <>
            <div className={cx('loginContainer')}>
                <div className={cx('signup-container')}>
                    <h2 className={cx('login-title')}>Đăng Nhập bằng QR :D</h2>
                    <div className={cx('signup-wrapper')}>
                        <div className={cx('signup-contain')}>
                            <div className={cx('signup-form')}>
                                <div className={cx('qr-form')}>
                                    <img alt="qr" src="https://m.media-amazon.com/images/I/51vaz63gSzL.jpg" />
                                </div>
                            </div>
                            <div className={cx('qr-tip')}>
                                <p>1. Scan with your mobile device’s camera </p>
                                <p>2. Confirm your emotional :D</p>
                            </div>
                        </div>
                    </div>
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

export default QrModal;
