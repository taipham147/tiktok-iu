import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import styles from './Menu.module.scss';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import MenuItem from './MenuItem';
import Header from './Header';
import { useState } from 'react';

const cx = classNames.bind(styles);

const defaultFc = () => {};

function Menu({ children, items = [], onChange = defaultFc }) {
    const [history, setHisotry] = useState([{ data: items }]);
    const current = history[history.length - 1];
    console.log(current);

    const renderItems = () => {
        return current.data.map((item, index) => {
            const isParent = !!item.children;
            return (
                <MenuItem
                    key={index}
                    data={item}
                    onClick={() => {
                        if (isParent) setHisotry((prev) => [...prev, item.children]);
                        else onChange(item);
                    }}
                ></MenuItem>
            );
        });
    };

    return (
        <Tippy
            delay={[0, 700]}
            interactive
            placement="bottom-end"
            hideOnClick={false}
            render={(attrs) => (
                <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                    <PopperWrapper className={cx('menu-proper')}>
                        {history.length > 1 && (
                            <Header
                                title="Language"
                                onback={() => {
                                    setHisotry(history.slice(0, history.length - 1));
                                }}
                            ></Header>
                        )}

                        <div className={cx('menu-body')}>{renderItems()}</div>
                    </PopperWrapper>
                </div>
            )}
            onHide={() => setHisotry((prev) => prev.slice(0, 1))}
        >
            {children}
        </Tippy>
    );
}

export default Menu;
