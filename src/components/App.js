import user from "../user.json";
import Profile from "../components/Profile";

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
    </div>
  );
};

export default App;
