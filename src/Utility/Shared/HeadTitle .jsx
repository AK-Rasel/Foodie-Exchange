import PropTypes from "prop-types";
const HeadTitle = ({ borderWhite, titleHead, titleMain }) => {
  return (
    <div className="font-poppins text-center space-y-6 my-6">
      <p className="font-poppins text-lg font-semibold text-custom-yellow leading-3  ">
        --{titleHead}--
      </p>
      <hr
        className={`w-80 mx-auto ${borderWhite} border-2  border-custom-naveBlue `}
      />
      <h2 className="leading-3 font-semibold text-3xl my-14">{titleMain}</h2>
      <hr
        className={`w-80 mx-auto ${borderWhite} border-2 border-custom-naveBlue`}
      />
    </div>
  );
};
HeadTitle.propTypes = {
  titleHead: PropTypes.string,
  titleMain: PropTypes.string,
  borderWhite: PropTypes.string,
};
export default HeadTitle;
