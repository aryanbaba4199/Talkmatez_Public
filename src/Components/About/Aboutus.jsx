import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import { FaUserFriends, FaBrain, FaComments, FaGlobe, FaChartLine, FaLaptopCode } from 'react-icons/fa';

const Aboutus = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  const features = [
    { icon: <FaUserFriends className="text-3xl text-[#15892e]" />, title: 'Expanded Native Speaker Network', text: 'We aim to grow our network of native speakers covering various languages and dialects.' },
    { icon: <FaLaptopCode className="text-3xl text-[#15892e]" />, title: 'Enhanced User Experience', text: 'We will streamline features to make searching, scheduling, and selecting sessions easier.' },
    { icon: <FaComments className="text-3xl text-[#15892e]" />, title: 'Real-Time Interactive Sessions', text: 'We will offer live sessions incorporating voice, video, and chat for immersive learning.' },
    { icon: <FaGlobe className="text-3xl text-[#15892e]" />, title: 'Cultural Exchange Programs', text: 'Facilitating cultural exchanges beyond just language, allowing users to learn about traditions and customs.' },
    { icon: <FaChartLine className="text-3xl text-[#15892e]" />, title: 'Feedback and Progress Tracking', text: 'We will enable users to track progress and receive detailed feedback from native speakers.' },
    { icon: <FaBrain className="text-3xl text-[#15892e]" />, title: 'Advanced Matching Algorithms', text: 'We’ll use advanced algorithms to match learners with native speakers based on learning goals and interests.' },
  ];

  return (
    <div className="mt-20 px-4 max-w-screen-xl mx-auto">
      <h1 className="text-5xl font-bold text-center text-[#15892e]" data-aos="fade-up">
        About TalkMatez
      </h1>
      <p className="mt-4 text-lg text-center text-gray-600" data-aos="fade-up">
        Revolutionizing language learning by connecting learners with native speakers for immersive and engaging experiences.
      </p>

      {/* Vision Section */}
      <section className="mt-16" data-aos="fade-up">
        <h2 className="text-3xl font-semibold text-[#15892e]">Our Vision</h2>
        <p className="mt-4 text-lg text-gray-700">
          Over the next five years, TalkMatez aims to expand its reach, enhance user experience, and promote cultural exchanges to create a truly global language learning platform.
        </p>
      </section>

      {/* Vision List */}
      <section className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-lg flex items-start gap-4" data-aos="fade-up">
            <div className="flex-shrink-0">{feature.icon}</div>
            <div>
              <h3 className="text-xl font-semibold text-[#15892e]">{feature.title}</h3>
              <p className="mt-2 text-gray-600">{feature.text}</p>
            </div>
          </div>
        ))}
      </section>

      {/* Objectives Section */}
      <section className="mt-16" data-aos="fade-up">
        <h2 className="text-3xl font-semibold text-[#15892e]">Our Objectives</h2>
        <p className="mt-4 text-lg text-gray-700">
          Our objectives align with our vision to create a platform that prioritizes quality, accessibility, and cultural enrichment for language learners worldwide.
        </p>
      </section>

      {/* Objectives List */}
      <section className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-lg flex items-start gap-4" data-aos="fade-up">
            <div className="flex-shrink-0">{feature.icon}</div>
            <div>
              <h3 className="text-xl font-semibold text-[#15892e]">{feature.title}</h3>
              <p className="mt-2 text-gray-600">{feature.text}</p>
            </div>
          </div>
        ))}
      </section>

      {/* Goals Section */}
      <section className="mt-16" data-aos="fade-up">
        <h2 className="text-3xl font-semibold text-[#15892e]">Our Goals</h2>
        <p className="mt-4 text-lg text-gray-700">
          Over the next five years, we are committed to growing our platform, enhancing user satisfaction, and making language learning accessible and engaging for everyone.
        </p>
      </section>

      
    </div>
  );
};

export default Aboutus;
