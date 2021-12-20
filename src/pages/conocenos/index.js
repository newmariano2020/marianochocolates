export default function Invoices() {
  return (
    <div className="conocenos">
      <div className="top-section">
        <span className="familia-la-pinocha">Familia La Pinocha</span>
        <span className="conoce-nuestra-historia-1">
          Más de 25 años dedicados a la elaboración de chocolate.
        </span>
        <span className="conoce-nuestra-historia-2">
          Conocé nuestra historia
        </span>
      </div>
      <div className="logo-conocenos">
        <img src={require("../../img/logo-conocenos.png").default} alt=""></img>
      </div>
      <div className="text-section">
        <p className="bold">Nacimos en el mar. Crecimos en el bosque.</p>
        <p className="bold">Amamos lo que hacemos.</p>
        <div>
          <p>
            Somos La Pinocha Chocolates, una empresa familiar que en 1995 <br />
            comenzamos con este sueño en Mar de las Pampas.
          </p>
          <p>
            La soledad del lugar, el olor penetrante de los pinos y el suelo
            tapizado de pinochas nos inspiró para recrear antiguas recetas y
            probar nuevas. Desde ese momento la tradición familiar se refleja en
            cada detalle y <br/> se mantiene a lo largo del tiempo.
          </p>
          <p>
            Trabajamos con mucha pasión para lograr el más rico chocolate <br />
            artesanal de buena calidad y con una variedad única de sabores.{" "}
            <br />
            La abundancia y la calidad son nuestro motor para seguir <br />
            construyendo la marca.
          </p>
        </div>
      </div>
    </div>
  );
}
