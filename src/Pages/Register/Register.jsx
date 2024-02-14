import { Link } from "react-router-dom";
import Container from "../../Utility/Container";
import background from "../../assets/others/AuthBacground.png";
import loginImage from "../../assets/others/LoginImg.png";
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { RiErrorWarningFill } from "react-icons/ri";

const Register = () => {
  // const [conformPasswordError, setConformPasswordError] = useState();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    // if (data.password === data.conformPassword) {
    //   console.log(data.email, data.name, data.password, data.gender);
    //   console.log("first", watch);
    // } else {
    //   setConformPasswordError("conformPassword not mach");
    // }
    console.log(data.email, data.name, data.password);
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
            {/* img */}
            <div className="text-center lg:text-left">
              <img src={loginImage} alt="" />
            </div>
            {/* from */}
            <div className="card shrink-0 w-full max-w-sm  ">
              <h2 className="text-center font-bold text-4xl -mb-7">Sing Up</h2>
              <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span
                      className={
                        !errors.name?.message
                          ? "label-text"
                          : "label-text text-red-500"
                      }
                    >
                      Name
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder="your name"
                    className={
                      !errors.name?.message
                        ? "input input-bordered "
                        : "input input-bordered input-error"
                    }
                    {...register("name", {
                      required: " Enter a Name*",
                    })}
                  />
                  <p className="font-poppins text-red-500 text-xs mt-3 flex gap-1">
                    {" "}
                    {errors.name?.message ? (
                      <RiErrorWarningFill className="text-base" />
                    ) : (
                      ""
                    )}
                    {errors.name?.message}
                  </p>
                </div>
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
                    {...register("name", {
                      required: " Enter a Name*",
                    })}
                    {...register("email", { required: "Enter an  email" })}
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
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">New Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="new password"
                    className={
                      !errors.password?.message
                        ? "input input-bordered "
                        : "input input-bordered input-error"
                    }
                    {...register("password", { required: "Enter a Password" })}
                  />
                  <p className="font-poppins text-red-500 text-xs mt-3 flex gap-1">
                    {" "}
                    {errors.password?.message ? (
                      <RiErrorWarningFill className="text-base" />
                    ) : (
                      ""
                    )}
                    {errors.password?.message}
                  </p>
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Confirm Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="confirm password"
                    className={
                      !errors.conformPassword?.message
                        ? "input input-bordered "
                        : "input input-bordered input-error"
                    }
                    {...register("conformPassword", {
                      required: "Enter a Conform  Password",
                    })}
                  />
                  {/* <label className="label">
                    <span className="label-text">{conformPasswordError}</span>
                  </label> */}
                  <p className="font-poppins text-red-500 text-xs mt-3 flex gap-1">
                    {" "}
                    {errors.conformPassword?.message ? (
                      <RiErrorWarningFill className="text-base" />
                    ) : (
                      ""
                    )}
                    {errors.conformPassword?.message}
                  </p>
                </div>
                {/* Gender selected */}
                <div>
                  <label className="label">
                    <span className="label-text">Gender*</span>
                  </label>
                  <select
                    {...register("gender", {
                      required: "Please select your gender",
                    })}
                    // className="select select-bordered w-full max-w-xs"
                    className={
                      !errors.gender?.message
                        ? "select select-bordered w-full max-w-xs "
                        : "select select-bordered w-full max-w-xs input-error"
                    }
                    defaultValue="Select Gender"
                  >
                    <option disabled>Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                  <p className="font-poppins text-red-500 text-xs mt-3 flex gap-1">
                    {" "}
                    {errors.gender?.message ? (
                      <RiErrorWarningFill className="text-base" />
                    ) : (
                      ""
                    )}
                    {errors.gender?.message}
                  </p>
                </div>
                {/* button  */}
                <div className="form-control mt-6">
                  <button
                    type="submit"
                    className="btn bg-[#dbb985] text-white "
                  >
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
