// import HeadTitle from "../../Utility/Shared/HeadTitle ";

import Container from "../../Utility/Container";
import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import ChefRecommendation from "./Chef's Recommendation/ChefRecommendation";
import Feature from "./Feature/Feature";
import OurPromise from "./OurPromise";
import PopularItem from "./PopularItem/PopularItem";
import Testimonial from "./Testimonial/Testimonial";

const Home = () => {
  return (
    <>
      <Banner />

      <Category />
      <OurPromise />
      <PopularItem />
      <Container>
        <ChefRecommendation />
      </Container>
      <Feature />
      <Container>
        <Testimonial />
      </Container>
    </>
  );
};

export default Home;
