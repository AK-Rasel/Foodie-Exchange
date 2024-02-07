import HeadTitle from "../../../Utility/Shared/HeadTitle ";
import SmallCard from "../../../Utility/Shared/SmallCard";
// import backgroundImage from "../../../assets/home/background.jpg";
const PopularItem = () => {
  return (
    <section>
      <HeadTitle titleHead={"Check it out"} titleMain={"FROM OUR MENU"} />
      {/* image div */}
      <div
        className=" h-[509px] bg-cover "
        // style={{
        //   backgroundImage: `url(${backgroundImage})`,
        // }}
      >
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
          <div className="bg-custom-yellow z-10 h-[509px] flex-1 p-10">
            <SmallCard />
            <SmallCard />
            <SmallCard />
            <SmallCard />
            <SmallCard />
            <SmallCard />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopularItem;
