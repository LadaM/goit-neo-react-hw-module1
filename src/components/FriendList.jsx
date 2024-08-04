import FriendListItem from './FriendListItem.jsx';
import PropTypes from 'prop-types';
import css from './FriendList.module.css';


const FriendList = ({ friends }) => {
  return (
    <ul className={css.friendListContainer}>
      {friends.map(friend => {
        return (<li key={friend.id}>
          <FriendListItem name={friend.name} avatar={friend.avatar} isOnline={friend.isOnline} />
        </li>);
      })}

    </ul>

  );
};

FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
};
export default FriendList;