import MiddleSection from "./middle-section";

const Destacados = () => {
  return <div className="destacados">
    <div className="destacado destacado-1">
     <MiddleSection
      message="Estamos Cerca"
      callToActionText="SUCURSALES"
     ></MiddleSection>
    </div>
    <div className="destacado destacado-2">
     <MiddleSection
      message="Sabores Supremos"
      callToActionText="PRODUCTOS"
     ></MiddleSection>
    </div>
    <div className="destacado destacado-3">
     <MiddleSection
      message="Somos La Pinocha"
      callToActionText="CONOCENOS"
     ></MiddleSection>
    </div>
  </div>
}

export default Destacados;