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
      <div class="container">
        <div class="row justify-content-around">
          <div class="col-3 col-lg-3 col-xl-3 col-xxl-3">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Palermo</h5>
                <p class="card-text">Av. Santa fe 3476   </p>
                <p class="card-text"> Lu a Sá 9 a 19:30 hs  </p>
                <p class="card-text"> 11 3941 1647  </p>

              </div>
            </div>

          </div>
          <div class="col-3 col-lg-3 col-xl-3 col-xxl-3 ">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Palermo Soho</h5>
                <p class="card-text">Honduras 4866</p>
                <p class="card-text"> Lu a Sá 9 a 19:30 hs  </p>
                <p class="card-text"> 11 2358 8765</p>
              </div>
            </div>

          </div>
          <div class="col-3 col-lg-3 col-xl-3 col-xxl-3">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Belgrano</h5>
                <p class="card-text">Echeverria 2383</p>
                <p class="card-text"> Lu a Sá 9 a 19:30 hs  </p>
                <p class="card-text">11 2401 7412</p>
              </div>
            </div>

          </div>

        </div>
        <div class="row justify-content-around">
          <div class="col-3 col-lg-3 col-xl-3 col-xxl-3">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Colegiales</h5>
                <p class="card-text">Av. Cabildo 1306 </p>
                <p class="card-text"> Lu a Sá 9 a 19:30 hs  </p>
                <p class="card-text"> 112 250 2432 </p>

              </div>
            </div>

          </div>
          <div class="col-3 col-lg-3 col-xl-3 col-xxl-3 ">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Caballito</h5>
                <p class="card-text">Río de Janeiro 5</p>
                <p class="card-text"> Lu a Sá 9 a 19:30 hs  </p>
                <p class="card-text">11 2389 8626</p>
              </div>
            </div>

          </div>
          <div class="col-3 col-lg-3 col-xl-3 col-xxl-3">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Villa Urquiza</h5>
                <p class="card-text">Triunvirato 4531</p>
                <p class="card-text"> Lu a Sá 9 a 19:30 hs  </p>
                <p class="card-text">11 2401 7412</p>
              </div>
            </div>

          </div>

        </div>
        <div class="row justify-content-around">
          <div class="col-3 col-lg-3 col-xl-3 col-xxl-3">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Palermo</h5>
                <p class="card-text">Av. Santa fe 3476   </p>
                <p class="card-text"> Lu a Sá 9 a 19:30 hs  </p>
                <p class="card-text"> 11 3941 1647  </p>

              </div>
            </div>

          </div>
          <div class="col-3 col-lg-3 col-xl-3 col-xxl-3 ">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Palermo Soho</h5>
                <p class="card-text">Honduras 4866</p>
                <p class="card-text"> Lu a Sá 9 a 19:30 hs  </p>
                <p class="card-text"> 11 2358 8765</p>
              </div>
            </div>

          </div>
          <div class="col-3 col-lg-3 col-xl-3 col-xxl-3">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Belgrano</h5>
                <p class="card-text">Echeverria 2383</p>
                <p class="card-text"> Lu a Sá 9 a 19:30 hs  </p>
                <p class="card-text">11 2401 7412</p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default Sucursales;
