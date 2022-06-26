import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Header.module.scss';
import images from '~/assets/images';
import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);
function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                {/* Logo */}
                <div className={cx('logo')}>
                    <img src={images.logo} alt="Tiktok"></img>
                </div>
                {/* Search */}
                <div className={cx('search')}>
                    <input placeholder="Search accounts and videos" spellCheck={false}></input>
                    {/* icon close */}
                    <button className={cx('close')}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                    {/* loading when search */}
                    <FontAwesomeIcon icon={faSpinner} className={cx('loading')} />
                    {/* search icon */}
                    <button className={cx('search-btn')}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>
                {/* Action */}
                <div className={cx('action')}></div>
            </div>
        </header>
    );
}

export default Header;
