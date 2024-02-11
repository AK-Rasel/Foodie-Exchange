import useMenu from "../../../Hooks/useMenu";
import Cards from "../../../Utility/Shared/Cards";
import HeadTitle from "../../../Utility/Shared/HeadTitle ";

const ChefRecommendation = () => {
  const [menu] = useMenu();
  const salads = menu.filter((salad) => salad.category === "salad");
  return (
    <section>
      <HeadTitle titleHead={"Should Try"} titleMain={"CHEF RECOMMENDS"} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:grid-cols-3">
        {salads.slice(0, 3).map((item) => (
          <Cards items={item} key={item._id} cardPCenter=" text-center" />
        ))}
      </div>
    </section>
  );
};

export default ChefRecommendation;
