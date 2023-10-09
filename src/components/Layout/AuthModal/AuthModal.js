import classNames from 'classnames/bind';
import styles from './AuthModal.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

import { useState } from 'react';
import LoginModal from './LoginModal';
import MultiAuthModal from './MultiAuthModal';
import SignUpModal from './SignUpModal';
library.add(fas);
const cx = classNames.bind(styles);

function AuthModal({ setAuthModal }) {
    const [multiAuthStatusModal, setMultiAuthStatusModal] = useState(true);
    const [loginStatusModal, setLoginStatus] = useState(false);
    const [signUpStatusModal, setSignUpStatus] = useState(false);

    // const [loginStatus, setLoginStatus] = useState();

    return (
        <div className={cx('modal')}>
            <div className={cx('wrapper')}>
                <div className={cx('wrap-container')}>
                    <div className={cx('contain')}>
                        <div className={cx('login-modal')}>
                            {/* <div className={cx('login-modal-btn')}> */}
                            {!multiAuthStatusModal && (
                                <button
                                    className={cx('back-modal-btn')}
                                    onClick={() => {
                                        setMultiAuthStatusModal(true);
                                        setLoginStatus(false);
                                        setSignUpStatus(false);
                                    }}
                                >
                                    <FontAwesomeIcon icon="fa-solid fa-angle-left" />
                                </button>
                            )}
                            <button className={cx('close-model-btn')} onClick={() => setAuthModal(false)}>
                                <FontAwesomeIcon icon="fa-solid fa-xmark" />
                            </button>
                            {/* </div> */}

                            <>
                                {multiAuthStatusModal ? (
                                    <MultiAuthModal
                                        setLoginStatus={setLoginStatus}
                                        setMultiAuthStatusModal={setMultiAuthStatusModal}
                                        setSignUpStatus={setSignUpStatus}
                                    />
                                ) : null}
                            </>
                            <>
                                {loginStatusModal ? (
                                    <LoginModal
                                        setLoginStatus={setLoginStatus}
                                        setMultiAuthStatusModal={setMultiAuthStatusModal}
                                        setSignUpStatus={setSignUpStatus}
                                        setAuthModal={setAuthModal}
                                    />
                                ) : null}
                            </>
                            <>
                                {signUpStatusModal ? (
                                    <SignUpModal
                                        setLoginStatus={setLoginStatus}
                                        setMultiAuthStatusModal={setMultiAuthStatusModal}
                                        setSignUpStatus={setSignUpStatus}
                                        setAuthModal={setAuthModal}
                                    />
                                ) : null}
                            </>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AuthModal;
