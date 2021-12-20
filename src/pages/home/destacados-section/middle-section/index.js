const MiddleSection = ({ message, callToActionText, href }) => {
  return <div className="destacado-middle-section">
    <div className="message">{message}</div>
    <a href={href}>
      <div className="call-to-action">
        <span>{callToActionText}</span>
      </div>
    </a>
  </div>
};

export default MiddleSection;