// components
import Circles from "../../components/Circles";
import ParticlesContact from "../../components/ParticlesContact";
import EarthCanvas from "../../components/canvas/Earth";

// icons
import { BsArrowRight } from "react-icons/bs";

// framer motion
import { motion } from "framer-motion";

// variants
import { fadeIn } from "../../variants";
import { useEffect, useRef, useState } from "react";
import { useMediaQuery } from "react-responsive";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const [render, setRender] = useState(false);

  useEffect(() => {
    setRender(isMobile);
    console.log("render");
  }, [isMobile]);

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const formRef = useRef();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    // console.log(e.target.value);r
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // template_qtp23nm
    // service_kq35t9u
    // lYSwyJnykE42mR0RN
    if (form.name === "" || form.email === "" || form.message === "") {
      setLoading(false);
      alert("Please complete all fields.");
      setForm({
        name: form.name,
        email: form.email,
        message: form.message,
      });
      return;
    } else {
      emailjs
        .send(
          "service_kq35t9u",
          "template_qtp23nm",
          {
            from_name: form.name,
            to_name: "Kevin",
            from_email: form.email,
            to_email: "kevincarlosqa@gmail.com",
            message: form.message,
          },
          "lYSwyJnykE42mR0RN"
        )
        .then(
          () => {
            setLoading(false);
            alert("Thank you. I will get back to you as soon as possible.");
            setForm({
              name: "",
              email: "",
              message: "",
            });
          },
          (error) => {
            setLoading(false);
            console.log(error);
            alert("Something went wrong.");
          }
        );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b  from-[#0E0613]  to-[#142f48]">
      <div
        className="container mx-auto py-32 text-center xl:text-left flex flex-col xl:flex-row
        items-center justify-center h-full"
      >
        <ParticlesContact />
        {render && (
          <div className="h-[250px] w-[250px]">
            <EarthCanvas />
          </div>
        )}
        {/* text & form */}
        <div className="flex flex-col w-full max-w-[700px]">
          {/* text */}
          <motion.h2
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 text-center mb-12"
          >
            {"Let's"} <span className="text-accent">connect.</span>
          </motion.h2>
          {/* form */}
          <motion.form
            ref={formRef}
            onSubmit={handleSubmit}
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex-1 flex flex-col gap-6 w-full xl:w-[80%] mx-auto items-center z-10"
          >
            {/* input group */}
            <div className="flex gap-x-6 w-full">
              <input
                type="text"
                name="name"
                placeholder="name"
                className="input"
                onChange={handleChange}
                value={form.name}
              />
            </div>
            <input
              type="email"
              name="email"
              placeholder="email"
              className="input"
              value={form.email}
              onChange={handleChange}
            />
            {/* <input type="text" placeholder="subject" className="input" /> */}
            <textarea
              placeholder="message"
              name="message"
              className="textarea"
              value={form.message}
              onChange={handleChange}
            />
            <button
              type="submit"
              className="btn rounded-full border border-white/50 max-w-[170px]
              px-8 transiton-all duration-300 flex items-center justify-center
              overflow-hidden hover:border-accent group "
            >
              {/* {loading ? "Sending" : "Send"} */}
              <span
                className="group-hover:-translate-y-[120%] group-hover:opacity-0
              transition-all duration-500"
              >
                {"Let's"} talk
              </span>
              <BsArrowRight
                className="-transition-y-[120%] opacity-0 group-hover:flex
                group-hover:-translate-y-0 group-hover:opacity-100 transition-all
                duration-300 absolute text-[22px]"
              />
            </button>
          </motion.form>
        </div>
        {!render && (
          <div className="h-[500px] w-[500px]">
            <EarthCanvas />
          </div>
        )}
      </div>
    </div>
  );
};

export default Contact;
