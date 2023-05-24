import classNames from 'classnames/bind';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Button from '~/components/Button';
import styles from './AccountPreview.module.scss';
const cx = classNames.bind(styles);

function AccountPreview() {
    return (
        <div className={cx('wrapper')}>
            <header className={cx('header')}>
                <img
                    src="https://files.fullstack.edu.vn/f8-tiktok/users/2/627394cb56d66.jpg"
                    alt=""
                    className={cx('avatar')}
                />
                <Button primary className={cx('following-btn')}>
                    Following
                </Button>
            </header>

            <div className={cx('body')}>
                <p className={cx('nickname')}>
                    <strong>datviladuoidayxahoi</strong>
                    <FontAwesomeIcon icon={faCheckCircle} className={cx('check')}></FontAwesomeIcon>
                </p>
                <p className={cx('name')}>Dat Vila Day Xa Hoi</p>
                <p className={cx('analytics')}>
                    <strong className={cx('value')}>8.2M </strong>
                    <span className={cx('label')}>Following</span>
                    <strong className={cx('value')}>681.2M </strong>
                    <span className={cx('label')}>Like</span>
                </p>
            </div>
        </div>
    );
}

export default AccountPreview;
