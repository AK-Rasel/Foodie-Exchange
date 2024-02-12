import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import Container from "../../Utility/Container";
import HeadTitle from "../../Utility/Shared/HeadTitle ";
import SectionCover from "../../Utility/Shared/SectionCover";
import banner4 from "../../assets/contact/banner.jpg";
import { useState } from "react";
const ContactUs = () => {
  const [value, setValue] = useState();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const contactHandle = (e) => {
    e.preventDefault();
    // console.log("phone ==>", value);
    // console.log("name ==>", name);
    // console.log("email ==>", email);
    // console.log("message ==>", message);

    const contactFrom = { value, name, email, message };
  };
  return (
    <section>
      <SectionCover
        imageSize={"min-h-[600px]"}
        mainTitale={"CONTACT US"}
        bannerImage={banner4}
        titaleParagrup={"Would you like to try a dish?"}
      />
      <Container>
        {/* input */}
        <HeadTitle titleHead={"Send Us a Message"} titleMain={"CONTACT FORM"} />

        {/* day */}

        <div className="card shrink-0 w-full  shadow-2xl bg-[#f3f3f3] mb-20">
          <form onSubmit={contactHandle} className="card-body">
            <div className="flex justify-between gap-10">
              {/* name */}
              <div className="form-control flex-1">
                <label className="label">
                  <span className="label-text">Name*</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter Your Name"
                  className="input input-bordered"
                  onBlur={(e) => setName(e.target.value)}
                  required
                />
              </div>
              {/* Email */}
              <div className="form-control flex-1">
                <label className="label">
                  <span className="label-text">Email*</span>
                </label>
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  className="input input-bordered"
                  onBlur={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>
            {/* Phone */}
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text">Phone</span>
              </label>
              <PhoneInput
                international
                countryCallingCodeEditable={false}
                defaultCountry="BD"
                placeholder="Enter Your Email"
                className="input input-bordered"
                value={value}
                onChange={setValue}
                required
              />
            </div>
            {/* Message */}
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text">Message*</span>
              </label>
              <textarea
                type="text"
                placeholder="Write your message here "
                className="input input-bordered h-56"
                onBlur={(e) => setMessage(e.target.value)}
                required
              />
            </div>

            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary">
                Login
              </button>
            </div>
          </form>
        </div>
      </Container>
    </section>
  );
};

export default ContactUs;
