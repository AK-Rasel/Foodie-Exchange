import { useState } from "react";
import HeadTitle from "../../../Utility/Shared/HeadTitle ";
import SmallCard from "../../../Utility/Shared/SmallCard";
// import categoryImg from "../../assets/home/slide1.jpg";
import { useEffect } from "react";
// import backgroundImage from "../../../assets/home/background.jpg";
const PopularItem = () => {
  const [popular, setPopular] = useState([]);
  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        const populars = data.filter(
          (popularItem) => popularItem.category === "popular"
        );
        setPopular(populars);
      });
  }, []);
  // console.log(popular);

  return (
    <section>
      <HeadTitle titleHead={"Check it out"} titleMain={"FROM OUR MENU"} />

      <div>
        {/* contain */}
        <div className="max-w-[1140px] mx-auto flex gap-10 ">
          <div className="flex-1 space-y-5">
            <h3 className="font-poppins font-medium text-custom-yellow text-lg uppercase">
              The taste makes it special
            </h3>
            <h2 className="font-poppins font-extrabold text-6xl">
              FROM OUR POPULAR MENU
            </h2>
            <p>
              We always give our customers a feeling of peace of mind and
              comfort when dining at our restaurant. Fusce vestibulum erat ac
              quam bibendum auctor.
            </p>
            <button className="btn bg-custom-yellow text-white">
              View all Menu
            </button>
          </div>
          {/* card container */}
          <div className="bg-custom-yellow z-10 flex flex-col gap-5 flex-1 p-10 rounded-xl shadow-md">
            {popular.map((item) => (
              <SmallCard
                key={item._id}
                foodName={item.name}
                foodPrice={item.price}
                foodRecipe={item.recipe}
                foodImg={item.image}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopularItem;
