import PropTypes from "prop-types";
const Container = ({ children }) => {
  return <div className="max-w-[1140px] px-5 mx-auto">{children}</div>;
};

Container.propTypes = {
  children: PropTypes.node,
};
export default Container;
