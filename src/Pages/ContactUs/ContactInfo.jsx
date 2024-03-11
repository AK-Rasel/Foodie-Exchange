import PropTypes from "prop-types";

const ContactInfo = ({ subInfo, infoIcon, infoTagline, subInfo2 }) => {
  return (
    <div>
      <div className="bg-custom-red flex justify-center py-3 rounded-bl-lg rounded-br-lg shadow-lg">
        <span className="text-xl text-white font-bold">{infoIcon}</span>
      </div>
      <div className="text-center bg-gray-100 px-5 space-y-1 h-40 flex flex-col items-center  justify-center mx-6">
        <h3 className="font-semibold text-2xl uppercase  font-poppins ">
          {infoTagline}
        </h3>

        <p className="font-medium ">{subInfo}</p>
        <p className="font-medium ">{subInfo2}</p>
      </div>
    </div>
  );
};
ContactInfo.propTypes = {
  subInfo: PropTypes.node,
  infoIcon: PropTypes.node,
  infoTagline: PropTypes.node,
  subInfo2: PropTypes.node,
};
export default ContactInfo;
