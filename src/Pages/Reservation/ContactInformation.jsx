import ContactInfo from "../ContactUs/ContactInfo";
import { FaClock } from "react-icons/fa";

import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";

const ContactInformation = () => {
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-16 ">
      {/* phone */}
      <ContactInfo
        subInfo="+38 (012) 34 56 789"
        infoIcon={<FaPhoneAlt />}
        infoTagline="Phone"
      />
      {/* ADDRESS */}
      <ContactInfo
        subInfo="+38 (012) 34 56 789"
        infoIcon={<FaLocationDot />}
        infoTagline="ADDRESS"
      />
      {/* WORKING HOURS */}
      <ContactInfo
        subInfo="Mon - Fri: 08:00 - 22:00"
        subInfo2="Sat - Sun: 10:00 - 23:00"
        infoIcon={<FaClock />}
        infoTagline="WORKING HOURS"
      />
    </div>
  );
};

export default ContactInformation;
