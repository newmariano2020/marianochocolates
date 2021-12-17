import Sucursal from "./sucursal";

const sucursales = [
  {
    zone: "Capital Federal",
    sucursales: [
      {
        location: "Palermo",
        address: "Av. Santa fe 3476",
        openAt: "Lu a Sá 9 a 19:30 hs",
        whatsapp: "11 3941 1647",
      },
      {
        location: "Palermo Soho",
        address: "Honduras 4866",
        openAt: "Lu a Sá 9 a 19:30 hs",
        whatsapp: "11 2358 8765",
      },
      {
        location: "Belgrano",
        address: "Echeverria 2383",
        openAt: "Lu a Sá 9 a 19:30 hs",
        whatsapp: "11 2401 7412",
      },
      {
        location: "Colegiales",
        address: "Av. Cabildo 1306",
        openAt: "Lu a Sá 9 a 19:30 hs",
        whatsapp: "112 250 2432",
      },
      {
        location: "Caballito",
        address: "Río de Janeiro 5",
        openAt: "Lu a Sá 9 a 19:30 hs",
        whatsapp: "11 2389 8626",
      },
      {
        location: "Villa Urquiza",
        address: "Triunvirato 4531",
        openAt: "Lu a Sá 9 a 19:30 hs",
        whatsapp: "113 702 8827",
      },
    ],
  },
  {
    zone: "Provincia de Buenos Aires",
    backgroundColor: '#E9E9E9',
    sucursales: [
      {
        location: "Olivos",
        address: "Ugarte 1520",
        openAt: "Lu a Sá 9 a 19:30 hs",
        whatsapp: "115 181 6880",
      },
      {
        location: "Lomas de Zamora",
        address: "Av. Antártida Argentina 112",
        openAt: "Lu a Sá 9 a 19:30 hs",
        whatsapp: "116 192 9908",
      },
      {
        location: "Canning",
        address: "Shopping Plaza Canning Ezeiza, Local 108: Ruta 52 km 12",
        openAt: "Lu a Sá 9 a 19:30 hs",
        whatsapp: "112 654 9615",
      },
      {
        location: "La Plata",
        address: "Calle 5, Nro. 937",
        openAt: "Lu a Sá 9 a 19:30 hs",
        whatsapp: "0221 675 2544",
      },
      {
        location: "San Isidro",
        address: "9 de Julio 380",
        openAt: "Lu a Sá 9 a 19:30 hs",
        whatsapp: "11 3086 2395",
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
    zone: "Interior del País",
    sucursales: [
      {
        location: "Santa Fé Capital",
        address: "Peatonal San Martín 3031",
        openAt: "Abierto todos los días",
        whatsapp: "342 4065 221",
      },
      {
        location: "Córdoba Capital",
        address: "Obispo Oro 237",
        openAt: "Abierto todos los días",
        whatsapp: "351 786 1014",
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
            <div style={{ backgroundColor: sucursalZone.backgroundColor }}>
              <div className="sucursal-zone-box">
                <span className="sucursal-zone">{sucursalZone.zone}</span>
              </div>
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
