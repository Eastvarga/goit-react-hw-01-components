import FriendListItem from "./FriendListItem";
import PropTypes from "prop-types";

const FriendList = ({ friends }) => {
  return (
    <ul className="friend-list">
      {friends.map((element) => {
        return (
          <FriendListItem
            key={element.id}
            avatar={element.avatar}
            name={element.name}
            isOnline={element.isOnline}
            id={element.id}
          />
        );
      })}
    </ul>
  );
};

FriendList.defaultProps = {
  friends: [],
};
FriendList.propsType = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number,
    })
  ),
};
export default FriendList;
