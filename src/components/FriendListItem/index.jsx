import defaultImage from "../DefaultImages/User-Default.jpg";
import PropTypes from "prop-types";

const FriendListItem = ({ avatar, name, isOnline, id }) => {
  return (
    <li className="item" key={id}>
      <span className={isOnline ? "status active" : "status inactive"}></span>
      <img className="avatar" src={avatar} alt={name} width="48" />
      <p className="name">{name}</p>
    </li>
  );
};
FriendListItem.defaultProps = {
  id: 0,
  avatar: defaultImage,
  name: "nobody",
  isOnline: false,
};

FriendListItem.propType = {
  id: PropTypes.number,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
