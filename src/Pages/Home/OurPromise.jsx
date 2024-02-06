import img from "../../assets/home/chef-service2.jpg";
const OurPromise = () => {
  return (
    <section>
      <>
        {/* Hero */}
        <div className="my-10 max-w-[1140px] px-5 mx-auto sm:px-6 lg:px-8">
          {/* Grid */}
          <div className="grid lg:grid-cols-8  xl:gap-x-7 ">
            <div className="lg:col-span-4 mt-10 lg:mt-0">
              <img
                className="w-full rounded-xl"
                src={img}
                alt="Image Description"
              />
            </div>
            <div className="lg:col-span-4 space-y-4 text-center lg:text-start">
              <h2 className="font-poppins text-xl font-semibold text-custom-yellow">
                OUR FOOD PROMISE...
              </h2>
              <p className="font-poppins text-custom-naveBlue  font-extrabold text-5xl">
                MADE RIGHT. <br /> MADE ESPECIALLY FOR YOU.
              </p>
              <p className="font-poppins text-lg">
                Bold fiery flavours are our style. We’re here to bring a new
                sizzle to the face of fast-casual dining.
              </p>
              <div className="flex gap-12">
                <div className="flex-col text-center flex">
                  <span className="font-poppins font-bold text-4xl">50+</span>
                  <span className="font-poppins  font-semibold">
                    Years Experience
                  </span>
                </div>
                <div className="flex-col text-center flex">
                  <span className="font-poppins font-bold text-4xl">20+</span>
                  <span className="font-poppins  font-semibold">Category</span>
                </div>
              </div>
            </div>
            {/* End Col */}

            {/* End Col */}
          </div>
          {/* End Grid */}
        </div>
        {/* End Hero */}
      </>
    </section>
  );
};

export default OurPromise;
