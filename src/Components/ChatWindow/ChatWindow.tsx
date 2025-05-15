import "../../Styles/ChatWindow.scss";

const ChatWindow: React.FC = () => {
  return (
    <div className="chat-window">
      <div className="chat-window-header">
        <div className="chat-window-header-title">
          <div className="chat-window-header-title-text">Chat</div>
        </div>
      </div>
      <div className="chat-window-body"></div>
      <div className="chat-window-text-input-container">
        <input type="text" className="chat-window-text-input" />
        <button className="chat-window-text-input-button">Send</button>
      </div>
    </div>
  );
};

export default ChatWindow;
