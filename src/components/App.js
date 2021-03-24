import user from "../data/user.json";
import staticalData from "../data/statical-data.json";
import friends from "../data/friends.json";
import transactions from "../data/transactions.json";
import Profile from "./Profile";
import Statistics from "./Statistics";
import FriendList from "./FriendList";
import TransactionHistory from "./TransactionHistory";

const App = () => {
  return (
    <div className="container">
      <Profile
        {...user}
        // name={user.name}
        // tag={user.tag}
        // location={user.location}
        // avatar={user.avatar}
        // stats={user.stats}
      />
      {/* <Profile /> */}
      <Statistics title="Upload stats" stats={staticalData} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};

export default App;
