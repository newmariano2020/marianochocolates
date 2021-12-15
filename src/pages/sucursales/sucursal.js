const Sucursal = ({locationName, address, openAt, whatsapp}) => {
  return <div className="sucursal">
    <span className="sucursal-title">{locationName}</span>
    <span className="sucursal-address">{address}</span>
    <span className="sucursal-open-at">{openAt}</span>
    <span className="sucursal-whatsapp">{whatsapp}</span>
  </div>
};

export default Sucursal;