import { Helmet } from "react-helmet-async";
import SectionCover from "../../Utility/Shared/SectionCover";
import banner3 from "../../assets/menu/banner3.jpg";
import PopularItem from "../Home/PopularItem/PopularItem";

const OurMenu = () => {
  return (
    <section>
      <Helmet>
        <title>FoodExchange | Our Menu</title>
        <link rel="canonical" href="../../assets/Logo/16w/Artboard 1.png" />
      </Helmet>
      {/* cover */}
      <SectionCover
        imageSize={"min-h-[550px]"}
        mainTitale={"OUR MENU"}
        bannerImage={banner3}
      />
      <PopularItem />
    </section>
  );
};

export default OurMenu;
