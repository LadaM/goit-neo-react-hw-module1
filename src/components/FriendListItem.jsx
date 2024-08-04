import PropTypes from 'prop-types';
import css from './FriendListItem.module.css';
import clsx from "clsx";

const FriendListItem = ({ name, avatar, isOnline }) => {
  return (<div className={css.friendCard}>
      <img src={avatar} alt="Avatar" width="48" />
      <p className={css.name}>{name}</p>
      <p className={clsx(css.status, isOnline ? css.online : css.offline)}>{isOnline ? "Online" : "Offline"}</p>
    </div>
  );
};

FriendListItem.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;