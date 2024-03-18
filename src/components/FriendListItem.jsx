import css from './FriendList.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
         
      <div>
      <img className={css.friendImg} src={avatar} alt="Avatar" width="48" />
      <p className={css.friendName}>{name}</p>
      {isOnline && <p className="online">Online</p>}
      {!isOnline && <p className="offline">Offline</p>}
    </div>
  );
};

export default FriendListItem;
