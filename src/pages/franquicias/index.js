export default function Invoices() {
  return <div className="franquicias">
    <div className="top-section">
      <span className="familia-la-pinocha">¡Sumate a La Pinocha Chocolates!</span>
      <span className="conoce-nuestra-historia-1">
        Formá parte de nuestras franquicias
      </span>
    </div>
    <div className="form-section">
      <div className="text-section">
        <p>
        La Pinocha Chocolates es una empresa en constante crecimiento. Si te interesa <br/>
        adquirir una franquicia y formar parte de nuestra empresa, completá el siguiente formulario <br/>
        y un asesor de ventas se pondrá en contacto a la brevedad.
        </p>
      </div>
      <div className="contact-us-form">
        <div className="contact-us-center">
        <div className="form-item">
          <label className="form-label">Nombre y apellido</label>
          <input className="contact-us-imput"/>
        </div>
        <div className="form-item">
          <label className="form-label">Correo electrónico</label>
          <input className="contact-us-imput"/>
        </div>
        <div className="form-item">
          <label className="form-label">Teléfono de contacto</label>
          <input className="contact-us-imput"/>
        </div>
        <div className="form-item">
          <label className="form-label">Zona de interés para la franquicia</label>
          <input className="contact-us-imput"/>
        </div>
        <div className="form-item">
          <label className="form-label">Dejanos tu mensaje</label>
          <textarea className="contact-us-area"></textarea>
        </div>
        <div className="form-footer">
          <div className="g-recaptcha" data-sitekey="6LdbW6AdAAAAADjDpOuG6ZpUh6j1-fSL2N8N37De"></div>
          <button type="submit" className="footer-submit">Enviar</button>
        </div>
        </div>
      </div>
    </div>
  </div>;
}
