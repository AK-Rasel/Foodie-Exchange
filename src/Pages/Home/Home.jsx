// import HeadTitle from "../../Utility/Shared/HeadTitle ";

import { Helmet } from "react-helmet-async";
import Container from "../../Utility/Container";
import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import ChefRecommendation from "./Chef's Recommendation/ChefRecommendation";
import Feature from "./Feature/Feature";
import OurPromise from "./OurPromise";
import PopularItem from "./PopularItem/PopularItem";
import Testimonial from "./Testimonial/Testimonial";
import { useParams } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>FoodExchange | Home</title>
        {/* <link rel="canonical" href="https://www.tacobell.com/" /> */}
      </Helmet>
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
