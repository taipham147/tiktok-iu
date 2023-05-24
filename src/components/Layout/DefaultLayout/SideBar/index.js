import classNames from 'classnames/bind';
import styles from './SideBar.module.scss';
import Menu, { MenuItem } from './Menu';
import routes from '~/config/route';
import { HomeIcon, UserGroupIcon, LiveIcon } from '~/components/Icons';

import SuggestedAccount from '~/components/SuggestedAccount';

const cx = classNames.bind(styles);

function SideBar() {
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem title="For Your" icon={<HomeIcon />} to={routes.home}></MenuItem>
                <MenuItem title="Following" icon={<UserGroupIcon />} to={routes.following}></MenuItem>
                <MenuItem title="Live" icon={<LiveIcon />} to={routes.live}></MenuItem>
            </Menu>
            <SuggestedAccount label="Suggested accounts" />
            <SuggestedAccount label="Following accounts" />
        </aside>
    );
}

export default SideBar;
