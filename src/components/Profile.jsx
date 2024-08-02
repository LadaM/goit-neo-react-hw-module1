import PropTypes from 'prop-types';
import styles from './Profile.module.css';

const Profile = ({ avatar, name, tag, location, stats }) => {
  return (
    <div className={styles.profileCard}>
      <div className={styles.profileDetails}>
        <img
          src={avatar}
          alt="User avatar"
          className={styles.profileImage}
        />
        <p className={styles.profileName}>{name}</p>
        <p className={styles.profileText}>{'@' + tag}</p>
        <p className={styles.profileText}>{location}</p>
      </div>

      <ul className={styles.profileStats}>
        <li className={styles.profileStat}>
          <span>Followers</span>
          <span className={styles.profileStatValue}>{stats.followers}</span>
        </li>
        <li className={styles.profileStat}>
          <span>Views</span>
          <span className={styles.profileStatValue}>{stats.views}</span>
        </li>
        <li className={styles.profileStat}>
          <span>Likes</span>
          <span className={styles.profileStatValue}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};


Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};

export default Profile;