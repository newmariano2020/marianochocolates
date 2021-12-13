const MiddleSection = ({ message, callToActionText }) => {
  return <div className="destacado-middle-section">
    <div className="message">{message}</div>
    <div className="call-to-action">{callToActionText}</div>
  </div>
};

export default MiddleSection;