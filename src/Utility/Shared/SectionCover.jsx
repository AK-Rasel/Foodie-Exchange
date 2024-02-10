// import banner3 from "../../assets/menu/banner3.jpg";
import PropTypes from "prop-types";
const SectionCover = ({
  titaleParagrup,
  imageSize,
  mainTitale,
  bannerImage,
}) => {
  // const imageSize = "min-h-[550px]";
  // const mainTitale = "OUR MENU";
  // const titaleParagrup =
  //   " Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.";
  return (
    <div
      className={`hero ${imageSize}`}
      style={{ backgroundImage: `url(${bannerImage})` }}
    >
      <div className="hero-overlay w-[200] mx-auto bg-opacity-60"></div>
      {/* <div className="hero-content text-center text-neutral-content"> */}
      <div className="text-center bg-black bg-opacity-50 lg:min-w-[900px] md:max-w-[600px] max-w-[350px] p-20 text-white">
        <h1 className="mb-5 md:text-5xl lg:text-7xl text-3xl font-bold font-cinzel">
          {mainTitale}
        </h1>
        <p className="mb-5">{titaleParagrup}</p>
      </div>
    </div>
    // </div>
  );
};
SectionCover.propTypes = {
  titaleParagrup: PropTypes.string,
  imageSize: PropTypes.string,
  mainTitale: PropTypes.string,
  bannerImage: PropTypes.string,
};
export default SectionCover;
