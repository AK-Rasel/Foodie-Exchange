import { Link } from "react-router-dom";
import Container from "../../Utility/Container";
import error from "../../assets/404/404.gif";
import { TiHome } from "react-icons/ti";

const Error = () => {
  return (
    <Container>
      <div className="flex flex-col justify-center items-center ">
        <img className="w-[650px]" src={error} alt="404" />
        <Link
          to="/"
          className=" bg-custom-red w-40 justify-center items-center gap-2 p-3 text-white font-semibold disabled:opacity-50 flex"
        >
          Go Home
          <span>
            <TiHome className="text-xl" />
          </span>
        </Link>
      </div>
    </Container>
  );
};

export default Error;
