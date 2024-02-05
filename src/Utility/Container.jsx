import PropTypes from "prop-types";
const Container = ({ children }) => {
  return <div className="max-w-xl mx-auto">{children}</div>;
};

Container.propTypes = {
  children: PropTypes.node,
};
export default Container;
