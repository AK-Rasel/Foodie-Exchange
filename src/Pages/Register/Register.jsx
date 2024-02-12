import { Link } from "react-router-dom";
import Container from "../../Utility/Container";
import background from "../../assets/others/AuthBacground.png";
import loginImage from "../../assets/others/LoginImg.png";
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
const Register = () => {
  return (
    <div
      className="hero min-h-screen bg-base-200"
      style={{ backgroundImage: `url(${background})` }}
    >
      <Container>
        <div
          className="hero min-h-screen bg-base-200"
          style={{ backgroundImage: `url(${background})` }}
        >
          <div className="hero-content flex-col lg:flex-row-reverse">
            {/* img */}
            <div className="text-center lg:text-left">
              <img src={loginImage} alt="" />
            </div>
            {/* from */}
            <div className="card shrink-0 w-full max-w-sm  ">
              <h2 className="text-center font-bold text-4xl -mb-7">Sing Up</h2>
              <form className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="your name"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="email"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">New Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="new password"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Confirm Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="confirm password"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control mt-6">
                  <button className="btn bg-[#dbb985] text-white ">
                    Sing Up
                  </button>
                </div>
              </form>
              {/* click auth 🙄🙄 */}
              <div className="text-center -mt-3 space-y-2">
                <p className="font-semibold text-[#dbb985]">
                  Already registered?
                  <Link to="/login " className="text-[#d79736]">
                    Go to log in
                  </Link>
                </p>
                <p className="font-semibold">Or sign in with</p>
                <div className="flex justify-center gap-5 ">
                  <button className="border-2 border-custom-naveBlue rounded-full p-2 ">
                    <FaGoogle />
                  </button>
                  <button className="border-2 border-custom-naveBlue rounded-full p-2 ">
                    <FaFacebook />
                  </button>
                  <button className="border-2 border-custom-naveBlue rounded-full p-2 ">
                    <FaGithub />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Register;
