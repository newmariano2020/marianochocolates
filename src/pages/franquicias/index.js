import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

const Franquicias = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState("");
  const [interestZone, setInterestZone] = useState("");
  const [message, setMessage] = useState("");
  const [captchaNotVerified, setCatpachaNotVerified] = useState(true);
  return (
    <div className="franquicias">
      <div className="top-section">
        <span className="familia-la-pinocha">
          ¡Sumate a La Pinocha Chocolates!
        </span>
        <span className="conoce-nuestra-historia-1">
          Formá parte de nuestras franquicias
        </span>
      </div>
      <div className="form-section">
        <div className="text-section">
          <p>
            La Pinocha Chocolates es una empresa en constante crecimiento. Si te
            interesa <br />
            adquirir una franquicia y formar parte de nuestra empresa, completá
            el siguiente formulario <br />y un asesor de ventas se pondrá en
            contacto a la brevedad.
          </p>
        </div>
        <div className="contact-us-form">
          <div className="contact-us-center">
            <div className="form-item first">
              <label className="form-label">Nombre y apellido</label>
              <input
                className="contact-us-input"
                onChange={(event) => {
                  setFullName(event.target.value);
                }}
              />
            </div>
            <div className="form-item">
              <label className="form-label">Correo electrónico</label>
              <input
                className="contact-us-input"
                type="email"
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
              />
            </div>
            <div className="form-item">
              <label className="form-label">Teléfono de contacto</label>
              <input
                className="contact-us-input"
                onChange={(event) => {
                  setTelephone(event.target.value);
                }}
              />
            </div>
            <div className="form-item">
              <label className="form-label">
                Zona de interés para la franquicia
              </label>
              <input
                className="contact-us-input"
                onChange={(event) => {
                  setInterestZone(event.target.value);
                }}
              />
            </div>
            <div className="form-item">
              <label className="form-label">Dejanos tu mensaje</label>
              <textarea
                className="contact-us-area"
                onChange={(event) => {
                  setMessage(event.target.value);
                }}
              ></textarea>
            </div>
            <div className="form-footer">
              <ReCAPTCHA
                className="g-recaptcha"
                sitekey="6LdbW6AdAAAAADjDpOuG6ZpUh6j1-fSL2N8N37De"
                onChange={(token) => {
                  setCatpachaNotVerified(false);
                }}
                onErrored={(token) => {
                  setCatpachaNotVerified(true);
                }}
              />
              <button
                type="submit"
                className="footer-submit"
                disabled={captchaNotVerified || (!fullName || !email || !interestZone || !telephone || !message)}
                onClick={() => {
                  console.log({
                    fullName,
                    telephone,
                    email,
                    interestZone,
                    message,
                  });
                }}
              >
                Enviar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Franquicias;
