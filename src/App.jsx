import Profile from './components/Profile.jsx';
import { userData } from './users.js';
import FriendList from './components/FriendList.jsx';
import friends from './friends.js';


const App = () => {
    return (
      <>
          <Profile
            name={userData.username}
            tag={userData.tag}
            location={userData.location}
            avatar={userData.avatar}
            stats={userData.stats}
          />
        <FriendList friends={friends} />
      </>
    );
};


export default App;
