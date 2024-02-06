import PropTypes from "prop-types";
const HeadTitle = ({ titleHead, titleMain }) => {
  return (
    <div className="font-poppins text-center space-y-3 my-6">
      <p className="font-poppins leading-3  text-custom-yellow">
        --{titleHead}--
      </p>
      <div className="divider w-80 mx-auto"></div>
      <h2 className="leading-3 font-semibold text-3xl">{titleMain}</h2>
      <div className="divider w-80 mx-auto"></div>
    </div>
  );
};
HeadTitle.propTypes = {
  titleHead: PropTypes.string,
  titleMain: PropTypes.string,
};
export default HeadTitle;
