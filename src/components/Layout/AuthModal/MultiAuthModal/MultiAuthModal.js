import classNames from 'classnames/bind';
import styles from '../AuthModal.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

// import LoginModal from '../LoginModal';
import { useState } from 'react';
library.add(fas);
const cx = classNames.bind(styles);

function MultiAuthModal({ setMultiAuthStatusModal, setLoginStatus, setSignUpStatus }) {
    function handleLogIn() {
        setMultiAuthStatusModal(false);
        setLoginStatus(true);
    }

    function handleSignUp() {
        setMultiAuthStatusModal(false);
        setLoginStatus(false);
        setSignUpStatus(true);
    }
    return (
        <>
            <div className={cx('loginContainer')}>
                <h2 className={cx('login-title')}>Đăng Nhập</h2>
                <div className={cx('login-btns')}>
                    <a className={cx('login-btn')}>
                        {/* <QRIcon /> */}
                        <p>Sử dụng QR code</p>
                    </a>
                </div>
                <div className={cx('login-btns')}>
                    <a className={cx('login-btn')} onClick={handleLogIn}>
                        {/* <UserIcon /> */}
                        <p>Email / Tài Khoản</p>
                    </a>
                </div>
                <div className={cx('login-btns')}>
                    <a className={cx('login-btn', 'disable')}>
                        {/* <GoogleIcon /> */}
                        <p>Đăng Nhập Bằng Google</p>
                    </a>
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

export default MultiAuthModal;
