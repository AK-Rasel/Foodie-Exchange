// import PropTypes from "prop-types";
// import SmallCard from "../../../Utility/Shared/SmallCard";
// import Container from "../../../Utility/Container";
// import HeadTitle from "../../../Utility/Shared/HeadTitle ";
// import SectionCover from "../../../Utility/Shared/SectionCover";
// const CategoryMenu = ({
//   items,
//   titleMain,
//   bannerImage,
//   mainTitale,
//   titaleParagrup,
// }) => {
//   return (
//     <div>
//       {mainTitale && (
//         <SectionCover
//           imageSize={"min-h-[300px]"}
//           mainTitale={mainTitale}
//           bannerImage={bannerImage}
//           titaleParagrup={titaleParagrup}
//         />
//       )}
//       <Container>
//         <div className="flex flex-col justify-center ">
//           {titleMain && (
//             <HeadTitle titleHead={"Don't miss"} titleMain={titleMain} />
//           )}
//           <div className="grid grid-cols-2 gap-5 my-16 justify-center items-center">
//             {items.slice(0, 6).map((item) => (
//               <SmallCard
//                 key={item._id}
//                 foodName={item.name}
//                 foodPrice={item.price}
//                 foodRecipe={item.recipe}
//                 foodImg={item.image}
//               />
//             ))}
//           </div>
//           <button className="btn  bg-custom-red text-white mb-10">
//             Shoe Moe
//           </button>
//         </div>
//       </Container>
//     </div>
//   );
// };
// CategoryMenu.propTypes = {
//   items: PropTypes.array,
//   titleMain: PropTypes.string,
//   bannerImage: PropTypes.string,
//   mainTitale: PropTypes.string,
//   titaleParagrup: PropTypes.string,
// };
// export default CategoryMenu;
import { useState } from "react";
import PropTypes from "prop-types";
import SmallCard from "../../../Utility/Shared/SmallCard";
import Container from "../../../Utility/Container";
import HeadTitle from "../../../Utility/Shared/HeadTitle ";
import SectionCover from "../../../Utility/Shared/SectionCover";
import { Link } from "react-router-dom";

const CategoryMenu = ({
  items,
  titleMain,
  bannerImage,
  mainTitale,
  titaleParagrup,
}) => {
  const [showMore, setShowMore] = useState(false);
  console.log(mainTitale);
  return (
    <div>
      {mainTitale && (
        <SectionCover
          imageSize={"min-h-[300px]"}
          mainTitale={mainTitale}
          bannerImage={bannerImage}
          titaleParagrup={titaleParagrup}
        />
      )}
      <Container>
        <div className="flex flex-col justify-center ">
          {titleMain && (
            <HeadTitle titleHead={"Don't miss"} titleMain={titleMain} />
          )}
          {/* show button start ⚓⚓ */}
          {mainTitale && (
            <Link
              to={`/our_shop/${mainTitale}`}
              className="text-end my-10 hover:text-custom-red hover:underline "
            >
              Show All
            </Link>
          )}
          {/* show button close ⚓⚓ */}
          <div
            className="grid grid-cols-2 gap-5  justify-center mb-16
           items-center"
          >
            {items.slice(0, showMore ? items.length : 6).map((item) => (
              <SmallCard
                key={item._id}
                foodName={item.name}
                foodPrice={item.price}
                foodRecipe={item.recipe}
                foodImg={item.image}
              />
            ))}
          </div>
          {items.length > 6 && (
            <button
              className="btn bg-custom-red text-white mb-10 hover:bg-custom-naveBlue"
              onClick={() => setShowMore(!showMore)}
            >
              {showMore ? "Show Less" : "Show More"}
            </button>
          )}
        </div>
      </Container>
    </div>
  );
};

CategoryMenu.propTypes = {
  items: PropTypes.array,
  titleMain: PropTypes.string,
  bannerImage: PropTypes.string,
  mainTitale: PropTypes.string,
  titaleParagrup: PropTypes.string,
};

export default CategoryMenu;
