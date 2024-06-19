import { CONTACT } from "../constants";
import { Link } from "react-scroll";

const Contact = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div>
      <div id="contact" className="border-b my-20 border-neutral-900 pb-20">
        <h2 className="text-3xl my-10 text-center">Contacto</h2>
        <div className="text-center tracking-wide">
          <h3 className="my-5 text-xl">
            ¡Ponte en contacto conmigo en cualquier momento!
          </h3>
          <p className="my-5"> {CONTACT.address} </p>
          <p className="my-5"> {CONTACT.phoneNo} </p>
          <p className="my-5"> {CONTACT.email} </p>
        </div>
      </div>
      <div className="flex gap-4 text-2xl text-center">
        <button className="mx-auto mb-20 rounded bg-violet-900 px-2 py-2 text-xs text-neutral-300 font-medium">
          <Link onClick={scrollToTop}>Volver al inicio</Link>
        </button>
      </div>
    </div>
  );
};

export default Contact;
