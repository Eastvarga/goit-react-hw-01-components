import defaultImage from "../DefaultImages/User-Default.jpg";
import PropTypes from "prop-types";
import styles from "./FriendListItem.module.css";

const FriendListItem = ({ avatar, name, isOnline, id }) => {
  const status = isOnline ? styles.statusActive : styles.statusInactive;
  return (
    <li className={styles.item} key={id}>
      <span className={status}></span>
      <img className={styles.avatar} src={avatar} alt={name} width="48" />
      <p className={styles.name}>{name}</p>
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
