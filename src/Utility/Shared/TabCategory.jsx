import Cards from "./Cards";
import PropTypes from "prop-types";
const TabCategory = ({ items }) => {
  return (
    <div className="grid grid-cols-3 gap-10">
      {items.map((item) => (
        <Cards key={item._id} items={item} />
      ))}
    </div>
  );
};
TabCategory.propTypes = {
  items: PropTypes.array,
};
export default TabCategory;
