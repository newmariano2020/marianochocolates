import MiddleSection from "./middle-section";

const Destacados = () => {
  return <div className="container container-destacados destacados">
    <div className="row row-destacados"> 
    <div className="col-sm-3 col-md-3 col-xs-1 destacado destacado-1">
     <MiddleSection
      message="Estamos Cerca"
      callToActionText="SUCURSALES"
      href="/sucursales"
     ></MiddleSection>
    </div>
    <div className="col-sm-3 col-md-3 col-xs-1 destacado destacado-2">
     <MiddleSection
      message="Sabores Supremos"
      callToActionText="PRODUCTOS"
      href="/productos"
     ></MiddleSection>
    </div>
    <div className="col-sm-3 col-md-3 col-xs-1 destacado destacado-3">
     <MiddleSection
      message="Somos La Pinocha"
      callToActionText="CONÓCENOS"
      href="/conocenos"
     ></MiddleSection>
    </div>
    </div>
  </div>
}

export default Destacados;