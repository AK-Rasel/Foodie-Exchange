import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import Container from "../../Utility/Container";
import HeadTitle from "../../Utility/Shared/HeadTitle ";
import SectionCover from "../../Utility/Shared/SectionCover";
import banner4 from "../../assets/contact/banner.jpg";
import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { FaPaperPlane } from "react-icons/fa";
const ContactUs = () => {
  const [value, setValue] = useState();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [verify, setVerify] = useState(false);

  function onChange(value) {
    console.log("Captcha value:", value);
    setVerify(true);
  }
  const contactHandle = (e) => {
    e.preventDefault();

    console.log("phone ==>", value);
    console.log("name ==>", name);
    console.log("email ==>", email);
    console.log("message ==>", message);
    console.log("Captcha value:", e);
    document.getElementById("contact_reset").reset();
    // const contactFrom = { value, name, email, message };
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

        <div className="card rounded-lg shrink-0 w-full  shadow-2xl bg-[#fafafa] mb-20">
          <form
            onSubmit={contactHandle}
            className="card-body "
            id="contact_reset"
          >
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
                className="input input-bordered "
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
            {/* google captcha 😈😈😈 */}
            <ReCAPTCHA
              sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
              onChange={onChange}
              className="my-10"
            />
            <div className="form-control mt-6 justify-center mx-auto">
              <button
                type="submit"
                disabled={!verify}
                className=" bg-custom-yellow w-40 justify-center items-center gap-2 p-3 text-white font-semibold disabled:opacity-50 flex"
              >
                Send Message
                <span>
                  <FaPaperPlane />
                </span>
              </button>
            </div>
          </form>
        </div>
      </Container>
    </section>
  );
};

export default ContactUs;
