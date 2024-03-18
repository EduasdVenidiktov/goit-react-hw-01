import Profile from './Profile';
import FriendList from './FriendList';
import TransactionHistory from './TransactionHistory';

import userData from "../userData.json";
import friendsData from "../friends.json"; 
import transactions from "../transactions.json";


const App = () => {
  const { username, tag, location, avatar, stats } = userData;
  return (
    <>
          <Profile 
        name={username}
        tag={tag}
        location={location}
        image={avatar}
        stats={stats}
      />
      <FriendList friends={friendsData} />
      <TransactionHistory items={transactions} />
    </>
  );
};

export default App;



