import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
const Footer = () => {
  let currentYear = new Date().getFullYear();
  return (
    <footer>
      <section className="flex flex-col md:flex-row  justify-between font-poppins">
        <div className="flex-1 bg-[#1f2937]  p-10 text-center">
          <h2 className="text-2xl font-bold mb-5 font-poppins">CONTACT US </h2>
          <p className="text-lg ">123 ABS Street, Uni 21, Bangladesh</p>
          <p className="text-lg ">+88 123456789</p>
          <p className="text-lg ">Mon - Fri: 08:00 - 22:00</p>
          <p className="text-lg ">Sat - Sun: 10:00 - 23:00</p>
        </div>
        <div className="flex-1 bg-[#111827] p-10 text-center justify-center grid leading-norma">
          <h2 className="text-2xl font-bold">Follow US</h2>
          <p>Join us on social media</p>
          <div className="flex justify-center text-3xl gap-3">
            <FaFacebookF />
            <FaInstagram />
            <FaTwitter />
          </div>
        </div>
      </section>
      <section className="text-center bg-[#151515] p-3">
        <p className="font-poppins">
          Copyright <span>{currentYear}</span> © CulinaryCloud. All rights
          reserved.
        </p>
      </section>
    </footer>
  );
};

export default Footer;
