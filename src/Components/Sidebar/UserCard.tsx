import type { User } from "../../Interfaces/Interfaces";
import "../../Styles/UserCard.scss";

interface Props {
  user: User;
}

const UserCard: React.FC<Props> = ({ user }) => {
  return (
    <div className="user-card">
      <div className="user-card-image"></div>
      <div className="user-card-name">{user.name}</div>
    </div>
  );
};

export default UserCard;
