import css from './Profile.module.css';

export default function Profile({ name, tag, location, image, stats }) {
  return (
   <div className={css.profileContainer}>
  <div className={css.profileBox}>
        <img className={css.profileImg} src={image} alt="User Avatar" />
        <p className={css.profileTitle}>{name}</p>
        <p className={css.profileTeg}>@{tag}</p>
        <p className={css.profileLocation}>{location}</p>
  </div>

  <ul className={css.infoList}>
    <li>
      <span>Followers</span>
          <span>{stats.followers}</span>
    </li>
    <li>
      <span>Views</span>
      <span>{stats.views}</span>
    </li>
    <li>
      <span>Likes</span>
      <span>{stats.likes}</span>
    </li>
  </ul>
</div>
  );
}