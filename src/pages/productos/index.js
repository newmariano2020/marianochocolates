const Productos = () => {
  return (
    <div className="productos">
      <div className="top-section">
        <span className="familia-la-pinocha">¿Cuál de todos elegís?</span>
        <span className="conoce-nuestra-historia-1">
          Elaboramos más de 60 sabores diferentes. <br />
          Te mostramos nuestros preferidos
        </span>
      </div>
      <div>
        <div className="productos-rose">
          <div className="product-list">
            <a href="#chocolates">chocolates</a>
            <a href="#alfajores">alfajores</a>
            <a href="#confituras">confituras</a>
            <a href="#submarinos">submarinos</a>
            <a href="#tabletas">tabletas</a>
          </div>
          <div className="banners">
            <img src={require('../../img/banners-productos/chocolates.png').default} alt="chocolates"></img>
            {/* <img src={require('../../img/banners-productos/alfajores.jpg').default} alt="alfajores"></img>
            <img src={require('../../img/banners-productos/confituras.jpg').default} alt="confituras"></img>
            <img src={require('../../img/banners-productos/submarinos.jpg').default} alt="submarinos"></img>
            <img src={require('../../img/banners-productos/tabletas.jpg').default} alt="tabletas"></img> */}
          </div>
          <div className="description-chocolate">
            <span className="choco-name">Nombre del Chocolate</span>
            <span className="choco-description">Sumar una descripción del producto</span>
            <button>¿Querés conocer más? Descubrilo acá</button>
          </div>
        </div>
        <div className="white-background"></div>
      </div>
    </div>
  );
};

export default Productos;
