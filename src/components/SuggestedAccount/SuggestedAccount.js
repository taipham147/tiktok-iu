import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './SuggestedAccount.module.scss';
import SuggestedAccountItem from './SuggestedAccountItem';
const cx = classNames.bind(styles);

function SuggestedAccount({ label }) {
    return (
        <div className={cx('wrapper')}>
            <p className={cx('label')}>{label}</p>
            <SuggestedAccountItem />
            <SuggestedAccountItem />
            <SuggestedAccountItem />
            <p className={cx('more-btn')}>see all</p>
        </div>
    );
}

SuggestedAccount.propTypes = {
    label: PropTypes.string.isRequired,
};

export default SuggestedAccount;
