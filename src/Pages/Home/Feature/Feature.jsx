import Container from "../../../Utility/Container";
import HeadTitle from "../../../Utility/Shared/HeadTitle ";
import image2 from "../../../assets/home/featured.jpg";
import featureImg from "../../../assets/home/featured2.jpg";

const Feature = () => {
  return (
    <section
      className="h-[600px] w-full bg-no-repeat bg-cover my-10 bg-fixed bg-center"
      style={{
        backgroundImage: `url(${featureImg})`,
      }}
    >
      <div className="bg-custom-naveBlue h-full bg-opacity-60 p-4 ">
        <div>
          <div className="text-white ">
            <HeadTitle
              borderWhite={"border-white"}
              titleHead={"Check it out"}
              titleMain={"FROM OUR MENU"}
            />
          </div>
          <Container>
            <div className="flex items-center justify-between mt-12 gap-10 ">
              <img className="w-96 flex-1" src={image2} alt="" />
              {/* content */}
              <div className="text-white flex-1 space-y-4">
                <h4 className="text-3xl font-semibold">March 20, 2023</h4>
                <h4 className="text-2xl font-medium">WHERE CAN I GET SOME?</h4>
                <p className="text-lg  font-medium  leading-6">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                  voluptate facere, deserunt dolores maiores quod nobis quas
                  quasi. Eaque repellat recusandae ad laudantium tempore
                  consequatur consequuntur omnis ullam maxime tenetur.
                </p>
                <button className="btn bg-custom-yellow border-none text-lg text-white">
                  Read More
                </button>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </section>
  );
};

export default Feature;
