import Profile from './components/Profile.jsx';
import { userData } from './users.js';



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
      </>
    );
};


export default App;
