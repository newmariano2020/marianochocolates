const Sucursal = ({ locationName, address, openAt, whatsapp }) => {
  return (
    <div className="sucursal">
      <span className="sucursal-title">{locationName}</span>
      <span className="sucursal-address">{address}</span>
      <div className="sucursal-open-at">
        {locationName && (
          <img src={require("../../img/horario.png").default} alt=""></img>
        )}
        <span>{openAt}</span>
      </div>
      <span className="sucursal-whatsapp">
        {locationName && (
          <img src={require("../../img/whatsapp.png").default} alt=""></img>
        )}
        <span>{whatsapp}</span>
      </span>
    </div>
  );
};

export default Sucursal;
