import { CONTACT } from "../constants";

const Contact = () => {
  return (
    <div className="border-b my-20 border-neutral-900 pb-20">
      <h2 className="text-3xl my-10 text-center">Contacto</h2>
      <div className="text-center tracking-wide">
        <h3 className="my-5 text-xl">
          Ponte en contacto conmigo en cualquier momento.
        </h3>
        <p className="my-5"> {CONTACT.address} </p>
        <p className="my-5"> {CONTACT.phoneNo} </p>
        <p className="my-5"> {CONTACT.email} </p>
      </div>
    </div>
  );
};

export default Contact;
