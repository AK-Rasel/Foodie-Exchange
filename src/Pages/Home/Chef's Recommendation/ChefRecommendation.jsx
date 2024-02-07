import Cards from "../../../Utility/Shared/Cards";
import HeadTitle from "../../../Utility/Shared/HeadTitle ";

const ChefRecommendation = () => {
  return (
    <section>
      <HeadTitle titleHead={"Should Try"} titleMain={"CHEF RECOMMENDS"} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:grid-cols-3">
        <Cards
          ccFoodName={"Caeser Salad"}
          cardPCenter={
            "Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets."
          }
        />
        <Cards
          ccFoodName={"Caeser Salad"}
          cardPCenter={
            "Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets."
          }
        />
        <Cards
          ccFoodName={"Caeser Salad"}
          cardPCenter={
            "Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets."
          }
        />
      </div>
    </section>
  );
};

export default ChefRecommendation;
