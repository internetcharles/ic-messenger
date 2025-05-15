import "../../Styles/Home.scss";
import Sidebar from "../Sidebar/Sidebar";
import ChatWindow from "../ChatWindow/ChatWindow";

const Home: React.FC = () => {
  return (
    <div className="home-container">
      <div className="home-inner-window">
        <div className="home-inner-window-title-container">
          <div className="home-inner-window-title">Home</div>
        </div>
        <div className="home-inner-window-title-line"></div>
        <div className="home-inner-window-content-container">
          <Sidebar />
          <ChatWindow />
        </div>
      </div>
    </div>
  );
};

export default Home;
