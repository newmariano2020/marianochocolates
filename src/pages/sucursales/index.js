import Sucursal from "./sucursal";

const sucursales = [
  {
    zone: "Capital Federal",
    sucursales: [
      {
        location: "Palermo",
        address: "Av. Santa fe 3476",
        openAt: "Abierto todos los días",
        whatsapp: "11 3941 1647",
      },
      {
        location: "Palermo Soho",
        address: "Honduras 4866",
        openAt: "Abierto todos los días",
        whatsapp: "11 2358 8765",
      },
      {
        location: "Belgrano",
        address: "Echeverria 2383",
        openAt: "Abierto todos los días",
        whatsapp: "11 2401 7412",
      },
      {
        location: "Palermo",
        address: "Av. Santa fe 3476",
        openAt: "Abierto todos los días",
        whatsapp: "11 3941 1647",
      },
      {
        location: "Palermo Soho",
        address: "Honduras 4866",
        openAt: "Abierto todos los días",
        whatsapp: "11 2358 8765",
      },
      {
        location: "Belgrano",
        address: "Echeverria 2383",
        openAt: "Abierto todos los días",
        whatsapp: "11 2401 7412",
      },
    ],
  },
  {
    zone: "Provincia de Buenos Aires",
    backgroundColor: '#E9E9E9',
    sucursales: [
      {
        location: "Palermo",
        address: "Av. Santa fe 3476",
        openAt: "Abierto todos los días",
        whatsapp: "11 3941 1647",
      },
      {
        location: "Palermo Soho",
        address: "Honduras 4866",
        openAt: "Abierto todos los días",
        whatsapp: "11 2358 8765",
      },
      {
        location: "Belgrano",
        address: "Echeverria 2383",
        openAt: "Abierto todos los días",
        whatsapp: "11 2401 7412",
      },
      {
        location: "Palermo",
        address: "Av. Santa fe 3476",
        openAt: "Abierto todos los días",
        whatsapp: "11 3941 1647",
      },
      {
        location: "Palermo Soho",
        address: "Honduras 4866",
        openAt: "Abierto todos los días",
        whatsapp: "11 2358 8765",
      },
      {
        location: "Belgrano",
        address: "Echeverria 2383",
        openAt: "Abierto todos los días",
        whatsapp: "11 2401 7412",
      },
    ],
  },
];

const Sucursales = () => {
  return (
    <div className="sucursales">
      <div className="top-section">
        <span className="familia-la-pinocha">Nuestras Sucursales</span>
        <span className="conoce-nuestra-historia-1">
          Estamos cerca, visitanos!
        </span>
      </div>
      <div className="list-zones">
        {sucursales.map((sucursalZone) => {
          return (
            <div style={{ "background-color": sucursalZone.backgroundColor }}>
              <span className="sucursal-zone">{sucursalZone.zone}</span>
              <div className="sucursal-list">
                {sucursalZone.sucursales.map((sucursal) => (
                  <Sucursal
                    address={sucursal.address}
                    locationName={sucursal.location}
                    openAt={sucursal.openAt}
                    whatsapp={sucursal.whatsapp}
                  ></Sucursal>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sucursales;
