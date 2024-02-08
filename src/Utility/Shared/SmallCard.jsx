import PropTypes from "prop-types";
const SmallCard = ({ foodImg, foodName, foodPrice, foodRecipe }) => {
  return (
    <div className="font-cinzel text-white space-y-1 flex gap-3 items-center">
      <img
        className="w-20 h-20 object-cover rounded-lg border-2 border-white"
        src={foodImg}
        alt=""
      />
      <div>
        <div className="flex justify-between font-semibold text-xl">
          <div className="flex items-center ">
            <p className="flex-1">{foodName} -------------------</p>
          </div>
          <span>{"$" + parseFloat(foodPrice)}</span>
        </div>
        <div>
          <div className="grid grid-cols-4">
            <p className="col-span-3 leading-5 ">{foodRecipe}</p>
            <span className="col-span-1">{""}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
SmallCard.propTypes = {
  foodImg: PropTypes.string,
  foodName: PropTypes.string,
  foodPrice: PropTypes.number,
  foodRecipe: PropTypes.string,
};
export default SmallCard;
