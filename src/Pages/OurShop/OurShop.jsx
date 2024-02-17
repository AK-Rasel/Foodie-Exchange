import SectionCover from "../../Utility/Shared/SectionCover";
import OurShopImage from "../../assets/shop/banner2.jpg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import Container from "../../Utility/Container";
import useMenu from "../../Hooks/useMenu";
import TabCategory from "../../Utility/Shared/TabCategory";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const OurShop = () => {
  const [menu] = useMenu();
  // const offers = menu.filter((offer) => offer.category === "popular");
  const desserts = menu.filter((dessert) => dessert.category === "dessert");
  const pizzas = menu.filter((pizza) => pizza.category === "pizza");
  const salads = menu.filter((salad) => salad.category === "salad");
  const soups = menu.filter((soup) => soup.category === "soup");
  const drinks = menu.filter((drink) => drink.category === "soup");
  const categories = ["salad", "pizza", "soup", "dessert", "drink"];
  const { category } = useParams();
  const initialIndex = categories.indexOf(category);
  // console.log(category);
  const [tabIndex, setTabIndex] = useState(initialIndex);
  useEffect(() => {
    scroll(0, 0);
  }, []);
  return (
    <section>
      <div>
        <SectionCover
          imageSize={"min-h-[550px]"}
          mainTitale={"Our Shop"}
          bannerImage={OurShopImage}
        />
      </div>
      {/* tabs */}
      <Container>
        <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList className={"text-center"}>
            <Tab>Salads</Tab>

            <Tab>Pizzas</Tab>

            <Tab>Soups</Tab>
            <Tab>Desserts</Tab>
            <Tab>Drinks</Tab>
          </TabList>
          <TabPanel className={"my-10"}>
            <TabCategory items={salads} />
          </TabPanel>

          <TabPanel className={"my-10"}>
            <TabCategory items={pizzas} />
          </TabPanel>

          <TabPanel className={"my-10"}>
            <TabCategory items={soups} />
          </TabPanel>
          <TabPanel className={"my-10"}>
            <TabCategory items={desserts} />
          </TabPanel>
          <TabPanel className={"my-10"}>
            <TabCategory items={drinks} />
          </TabPanel>
        </Tabs>
      </Container>
    </section>
  );
};

export default OurShop;
