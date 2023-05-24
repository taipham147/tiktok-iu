import classNames from 'classnames/bind';
import styles from './SuggestedAccount.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountPreview from './AccountPreview';

const cx = classNames.bind(styles);
function SuggestedAccountItem() {
    const renderPreview = (props) => {
        return (
            <div tabIndex="-1" {...props}>
                <PopperWrapper>
                    <AccountPreview />
                </PopperWrapper>
            </div>
        );
    };

    return (
        <Tippy interactive placement="bottom" delay={[800, 0]} render={renderPreview} offset={[-10, 0]}>
            <div className={cx('account-item')}>
                <img
                    className={cx('avatar')}
                    src="https://files.fullstack.edu.vn/f8-tiktok/users/2/627394cb56d66.jpg"
                    alt="anh"
                />
                <div className={cx('item-info')}>
                    <p className={cx('nickname')}>
                        <strong>datviladuoidayxahoi</strong>
                        <FontAwesomeIcon icon={faCheckCircle} className={cx('check')}></FontAwesomeIcon>
                    </p>
                    <p className={cx('name')}>Dat Vila Day Xa Hoi</p>
                </div>
            </div>
        </Tippy>
    );
}

export default SuggestedAccountItem;
