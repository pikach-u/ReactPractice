const UserCard = (props) => {
  return (
    <div className="card">
      <img src="./avatar.webp" alt="avatar" />
      <h2>{props.name}</h2>
      <h2>{props.job}</h2>
    </div>
  );
};

export default UserCard;
