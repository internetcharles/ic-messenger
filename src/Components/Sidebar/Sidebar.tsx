import { users } from "../../Data/placeholderUsers";
import "../../Styles/Sidebar.scss";
import UserCard from "./UserCard";

const Sidebar: React.FC = () => {
  return (
    <div className="sidebar-container">
      <div className="sidebar-header">
        <div className="sidebar-header-title">Users</div>
      </div>
      <div className="sidebar-body">
        <div className="sidebar-body-title">
          {users.map((user) => {
            return <UserCard key={user.id} user={user} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
