import { Helmet } from "react-helmet-async";
import SectionCover from "../../Utility/Shared/SectionCover";
import banner3 from "../../assets/menu/banner3.jpg";
import useMenu from "../../Hooks/useMenu";
import CategoryMenu from "./CategoryMenu/CategoryMenu";
import dessart from "../../assets/menu/dessert-bg.jpeg";
import pizzaImage from "../../assets/menu/pizza-bg.jpg";
import saladsImage from "../../assets/menu/salad-bg.jpg";
import soupsImage from "../../assets/menu/soup-bg.jpg";
import drinksImage from "../../assets/menu/banner3.jpg";

const OurMenu = () => {
  const [menu] = useMenu();
  const offers = menu.filter((offer) => offer.category === "popular");
  const desserts = menu.filter((dessert) => dessert.category === "dessert");
  const pizzas = menu.filter((pizza) => pizza.category === "pizza");
  const salads = menu.filter((salad) => salad.category === "salad");
  const soups = menu.filter((soup) => soup.category === "soup");
  const drinks = menu.filter((drink) => drink.category === "soup");
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
      {/* offer start */}
      <CategoryMenu items={offers} titleMain={"TODAY'S OFFER"} />
      {/* offer close */}
      {/* salads start */}
      <CategoryMenu
        items={salads}
        mainTitale={"salad"}
        bannerImage={saladsImage}
        titaleParagrup={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
      />

      {/* pizzas start */}
      <CategoryMenu
        items={pizzas}
        mainTitale={"pizza"}
        bannerImage={pizzaImage}
        titaleParagrup={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
      />
      {/* pizzas close */}

      {/* pizzas close */}
      {/* soups start */}
      <CategoryMenu
        items={soups}
        mainTitale={"soup"}
        bannerImage={soupsImage}
        titaleParagrup={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
      />
      {/* soups close */}
      {/* desserts start */}
      <CategoryMenu
        items={desserts}
        mainTitale={"dessert"}
        bannerImage={dessart}
        titaleParagrup={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
      />
      {/* desserts close */}
      {/* drinks start */}
      <CategoryMenu
        items={drinks}
        mainTitale={"drink"}
        bannerImage={drinksImage}
        titaleParagrup={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
      />
      {/* drinks close */}
    </section>
  );
};

export default OurMenu;
