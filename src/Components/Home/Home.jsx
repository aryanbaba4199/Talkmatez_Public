import React, { useEffect } from "react";
import {
  FaCoins,
  FaGooglePlay,
  FaLock,
  FaShieldAlt,
  FaUserShield,
} from "react-icons/fa";
import { useSpring, animated } from "react-spring";
import AOS from "aos";
import "aos/dist/aos.css";
import { IoCall, IoMicCircle } from "react-icons/io5";
import { AiFillSound } from "react-icons/ai";
import { TbFileAnalytics } from "react-icons/tb";
import { MdOutlineCastForEducation } from "react-icons/md";
import { FaChalkboardUser } from "react-icons/fa6";
import Form from "./Form";

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  const springData = [
    { name: "Users", count: 20000 },
    { name: "Tutors", count: 100 },
    { name: "Satisfied users", count: 19890 },
    { name: "Developers", count: 5 },
  ];

  const featureData = [
    {
      icon: <FaShieldAlt className="text-4xl text-[#15892e]" />,
      title: "Secure Data",
      text: "Privacy of our customers is the first priority. We make use of all the possible ways to make your data safe.",
    },
    {
      icon: <FaLock className="text-4xl text-[#15892e]" />,
      title: "Encrypted Calls",
      text: "All communication is end-to-end encrypted, ensuring the utmost privacy.",
    },
    {
      icon: <FaUserShield className="text-4xl text-[#15892e]" />,
      title: "Verified Tutors",
      text: "We ensure all tutors are verified professionals to provide high-quality education.",
    },
   
    {
      icon: <FaChalkboardUser className="text-4xl text-[#15892e]" />,
      title: "Variety Teaching Methods",
      text: "The Platform should use a variety of teaching methods to help students improve their speaking skills",
    },
    {
      icon: <MdOutlineCastForEducation className="text-4xl text-[#15892e]" />,
      title: "Opportunities To Practice",
      text: "The platform should provide students with plenty of opportunities to practice speaking.",
    },
    
  ];

  const packagesData = [
    {
      icon : <FaCoins color="silver"/>,
      title: "Silver",
      amount: "₹ 99/-",
      perks: "Prividing more than 100 coins",
    },
    {
      icon : <FaCoins color="gold"/>,
      title: "Gold",
      amount: "₹ 349/-",
      perks: "Suited for just started",
    },
    {
      icon : <FaCoins color="orange"/>,
      title: "Diamond",
      amount: "₹ 599/-",
      perks: "Best for Learner",
    },
    {
      icon : <FaCoins color="green"/>,
      title: "Top Packages",
      amount: "₹ 999/-",
      perks: "Best for Skills Development",
    },
  ];

  // Animated counter
  const AnimatedCounter = ({ count }) => {
    const { number } = useSpring({
      from: { number: 0 },
      to: { number: count },
      delay: 200,
      config: { duration: 2000 },
    });

    return <animated.div>{number.to((n) => Math.floor(n))}</animated.div>;
  };

  return (
    <div className="mt-20 px-4">
      {/* Hero Section */}
      <div className="h-96 w-full flex justify-evenly items-center">
        <div className="flex-1 ml-16">
          <p className="font-bold text-6xl text-[#15892e]">Talk and Learn</p>
          <p className="text-4xl font-semibold mt-4 font-mono">Study with us</p>
          <div className="flex justify-start ml-8 gap-4 hover:bg-white hover:text-green-600 hover:border-green-600 border-2 hover:scale-105 bg-[#15892e] w-64 hover:cursor-pointer p-4 px-4 rounded-3xl text-white font-semibold items-center mt-4">
            <FaGooglePlay className="ml-4 text-xl" />
            <p className="text-xl">Download Now</p>
          </div>
        </div>
        <div className="flex-1">
          <img
            src="https://img.freepik.com/free-vector/happy-women-learning-language-online-isolated-flat-vector-illustration-cartoon-female-characters-taking-individual-lessons-through-messenger-education-digital-technology-concept_74855-10088.jpg"
            alt="Talkmatez"
          />
        </div>
      </div>

      {/* Spring Data Section */}
      <div className="mt-16 grid grid-cols-4 gap-8 text-center">
        {springData.map((data, index) => (
          <div key={index} className="bg-gray-100 p-4 rounded-lg shadow-md">
            <p className="text-4xl font-bold text-[#15892e] flex justify-center items-center">
              <AnimatedCounter count={data.count} />+
            </p>
            <p className="text-xl mt-2 font-semibold">{data.name}</p>
          </div>
        ))}
      </div>

      {/* Features Section */}
      <div className="flex justify-center items-center mt-16 text-2xl font-semibold">
        <p className="bg-[#15892e] px-8 p-2 text-white rounded-md">Features</p>
      </div>
      <div className="grid grid-cols-3 gap-8 mt-2">
        {featureData.map((feature, index) => (
          <div
            key={index}
            className="bg-gray-100 p-6 rounded-lg shadow-md text-center"
            data-aos="fade-up"
          >
            {feature.icon}
            <p className="text-2xl font-semibold mt-4">{feature.title}</p>
            <p className="text-sm mt-2">{feature.text}</p>
          </div>
        ))}
      </div>

      {/* Packages Section */}
      <div className="flex justify-center items-center mt-16 text-2xl font-semibold">
        <p className="bg-[#15892e] px-8 p-2 text-white rounded-md">Packages</p>
      </div>
      <div className="mt-2 grid grid-cols-4 gap-8">
        {packagesData.map((pkg, index) => (

          <div
            key={index}
            className="bg-gray-100 p-6 rounded-lg shadow-md shadow-black mt-2 mb-4 hover:transform  ease-in-out hover:scale-105 hover:cursor-pointer text-center"
            data-aos="zoom-in"
          >
            <p className="text-2xl font-bold text-[#15892e] flex gap-2 justify-center items-center ">{pkg?.icon}{pkg.title}</p>
            <p className="text-4xl font-bold mt-2">{pkg.amount}</p>
            <p className="text-sm mt-4">{pkg.perks}</p>
          </div>
        ))}
      </div>
      <div className="my-8 mb-16">
        <Form/>
      </div>
    </div>
  );
};

export default Home;
