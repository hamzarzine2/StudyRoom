import './ChatLine.css';

const ChatLine = ({ props }) => {
  const { user, message } = props;
  
  return (
    <div className="chatLine">
      <p>{user}: {message}</p>
      
    </div>
  );
};

export default ChatLine;
