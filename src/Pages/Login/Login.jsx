import { Link, useLocation, useNavigate } from "react-router-dom";
import Container from "../../Utility/Container";
import background from "../../assets/others/AuthBacground.png";
import loginImage from "../../assets/others/LoginImg.png";
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import { useForm } from "react-hook-form";
import useAuthContext from "../../Hooks/useAuthContext";
import toast from "react-hot-toast";
import { RiErrorWarningFill } from "react-icons/ri";
import { useState } from "react";
import { RxEyeClosed, RxEyeOpen } from "react-icons/rx";
const Login = () => {
  const [viewPassword, setViewPassword] = useState("password");
  const { login } = useAuthContext();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();

  const togglePasswordVisibility = (e, setState) => {
    e.preventDefault();
    setState((prevState) => (prevState === "password" ? "text" : "password"));
  };
  const onSubmit = (data) => {
    const email = data.email;
    const password = data.password;
    // console.log(email, password);
    login(email, password)
      .then(() => {
        // console.log(res.user);
        toast.success("Successfully Login");
        navigate(from, { replace: true });
      })
      .catch((err) => {
        console.log(err.message);
        toast.error(err.message);
      });
  };
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
            {/* from */}
            <div className="card shrink-0 w-full max-w-sm  ">
              <h2 className="text-center font-bold text-4xl -mb-7">Login</h2>
              <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span
                      className={
                        !errors.email?.message
                          ? "label-text"
                          : "label-text text-red-500"
                      }
                    >
                      Email
                    </span>
                  </label>
                  <input
                    type="email"
                    placeholder="email"
                    className={
                      !errors.email?.message
                        ? "input input-bordered "
                        : "input input-bordered input-error"
                    }
                    {...register("email", { required: "Enter an email" })}
                  />

                  <p className="font-poppins text-red-500 text-xs mt-3 flex gap-1">
                    {" "}
                    {errors.email?.message ? (
                      <RiErrorWarningFill className="text-base" />
                    ) : (
                      ""
                    )}
                    {errors.email?.message}
                  </p>
                </div>
                <div className="form-control relative">
                  <label className="label">
                    <span
                      className={
                        !errors.email?.message
                          ? "label-text"
                          : "label-text text-red-500"
                      }
                    >
                      Password
                    </span>
                  </label>
                  <input
                    type={viewPassword}
                    placeholder="password"
                    className={
                      !errors.password?.message
                        ? "input input-bordered "
                        : "input input-bordered input-error"
                    }
                    {...register("password", { required: "Enter Password" })}
                  />
                  <div className="absolute z-10 top-[40%] right-[5%] cursor-pointer">
                    {viewPassword === "password" ? (
                      <RxEyeOpen
                        onClick={(e) =>
                          togglePasswordVisibility(e, setViewPassword)
                        }
                      />
                    ) : (
                      <RxEyeClosed
                        className="text-red-500"
                        onClick={(e) =>
                          togglePasswordVisibility(e, setViewPassword)
                        }
                      />
                    )}
                  </div>
                  <p className="font-poppins text-red-500 text-xs mt-3 flex gap-1">
                    {" "}
                    {errors.password?.message ? (
                      <RiErrorWarningFill className="text-base" />
                    ) : (
                      ""
                    )}
                    {errors.password?.message}
                  </p>
                  <label className="label">
                    {/* to do */}
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button className="btn bg-[#dbb985] text-white ">
                    Login
                  </button>
                </div>
              </form>
              {/* click auth 🙄🙄 */}
              <div className="text-center -mt-3 space-y-2">
                <p className="font-semibold text-[#dbb985]">
                  New here?{" "}
                  <Link to="/register" className="text-[#d79736]">
                    Create a New Account
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
            {/* img */}
            <div className="text-center lg:text-left">
              <img src={loginImage} alt="" />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Login;
