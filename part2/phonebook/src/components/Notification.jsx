const Notification = ({ type, message }) => {
  if (!message) return null;
  const messageStyle = {
    color: type === 'success' ? 'green' : 'red',
  };
  return (
    <div style={messageStyle} className='message'>
      {message}
    </div>
  );
};

export default Notification;