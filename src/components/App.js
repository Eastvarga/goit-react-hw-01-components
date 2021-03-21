import user from "../user.json";
import staticalData from "../statical-data.json";
import friends from "../friends.json";
import transactions from "../transactions.json";
import Profile from "../components/Profile";
import Statistics from "../components/Statistics";
import FriendList from "../components/FriendList";
import TransactionHistory from "..//components/TransactionHistory";

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
