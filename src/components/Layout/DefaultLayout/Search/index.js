import { useEffect, useState, useRef } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner, faMagnifyingGlass, faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import HeaddlessTippy from '@tippyjs/react/headless';

import * as searchService from '~/service/searchService';
import styles from './Search.module.scss';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccoutItem';
import 'tippy.js/dist/tippy.css';
import { useDebounce } from '~/hooks';

const cx = classNames.bind(styles);

function Search() {
    const inputRef = useRef();

    const [searchValue, setSearchValue] = useState('');

    const [searchResult, setSearchResult] = useState([]);

    const [showResult, setShowResult] = useState(true);

    const [loading, setLoading] = useState(false);

    const debounce = useDebounce(searchValue, 500);

    const handleHideResult = () => {
        setShowResult(false);
    };

    const handleChange = (e) => {
        const searchValueInput = e.target.value;
        if (searchValueInput.startsWith(' ')) return;
        setSearchValue(searchValueInput);
    };

    useEffect(() => {
        if (!debounce.trim()) {
            setSearchResult([]);
            return;
        }
        setLoading(true);

        const fetchApi = async () => {
            const result = await searchService.search(debounce);
            setSearchResult(result.data);
            setLoading(false);
        };

        fetchApi();

        // request(`users/search?`, {
        //     params: {
        //         q: debounce,
        //         type: 'less',
        //     },
        // })
        //     .then((res) => {
        //         console.log(res.data.data);
        //         setSearchResult(res.data.data);
        //         setLoading(false);
        //     })
        //     .catch(() => {
        //         setLoading(false);
        //     });
    }, [debounce]);

    return (
        <div>
            <HeaddlessTippy
                visible={showResult && searchResult.length > 0}
                interactive
                render={(attrs) => (
                    <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                        <PopperWrapper>
                            <h4 className={cx('search-title')}>Account</h4>

                            {searchResult.map((item) => {
                                return <AccountItem key={item.id} data={item} />;
                            })}
                        </PopperWrapper>
                    </div>
                )}
                onClickOutside={handleHideResult}
            >
                <div className={cx('search')}>
                    <input
                        ref={inputRef}
                        value={searchValue}
                        placeholder="Search account and video"
                        spellCheck="false"
                        onChange={handleChange}
                        onFocus={() => setShowResult(true)}
                    />
                    {!!searchValue && !loading && (
                        <button
                            className={cx('clear')}
                            onClick={() => {
                                setSearchValue('');
                                inputRef.current.focus();
                            }}
                        >
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                    )}

                    {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}

                    <button className={cx('search-btn')}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>
            </HeaddlessTippy>
        </div>
    );
}

export default Search;
