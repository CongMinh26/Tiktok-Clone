import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://scontent.fsgn5-2.fna.fbcdn.net/v/t39.30808-6/288635355_1745765609102661_9062420264141068557_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5cd70e&_nc_ohc=rtHsgATgW4gAX_Qu_Ww&_nc_ht=scontent.fsgn5-2.fna&oh=00_AT-OzGl92sulYBtDndaw2XRYQJy_eICH3Jb-HIAMrK6kKw&oe=62BCB42A"
                alt="Hoaa"
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Mỹ Đỗ Toa</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>nuvuong.mydotoa</span>
            </div>
        </div>
    );
}

export default AccountItem;
