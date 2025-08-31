import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Home() {
  const services = [
    {
      title: "Web Design / Development",
      desc: "Beautiful, responsive websites built to scale and perform.",
      icon: "💻",
    },
    {
      title: "App Development",
      desc: "Custom mobile apps that engage users and boost growth.",
      icon: "📱",
    },
    {
      title: "Digital Marketing",
      desc: "AI-driven marketing strategies to grow your business.",
      icon: "📢",
    },
  ];

  return (
    <div className="font-sans text-gray-900">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col lg:flex-row items-center justify-center px-8 py-16 bg-gradient-to-br from-[#f8f5f0] to-[#eae4da] text-center lg:text-left">
        {/* Left Text */}
        <motion.div
          className="flex-1 max-w-xl"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <span className="text-sm tracking-widest uppercase text-[#b8860b] font-medium">
            Extreme Intelligence • Web · Software · Growth
          </span>

          <h1 className="text-4xl md:text-5xl font-extrabold mt-4 text-gray-900 leading-snug">
            We turn your <span className="text-[#b8860b]">vision</span> into reality.
          </h1>

          <p className="mt-6 text-lg md:text-xl text-gray-700">
            Premium web design & development powered by automation and AI-driven marketing.
            Beautiful, blazing-fast, and built to scale.
          </p>

          <div className="mt-8 flex flex-wrap gap-4 justify-center lg:justify-start">
            <Link
              to="/contact"
              className="px-6 py-3 bg-[#b8860b] text-white rounded-full font-semibold shadow-lg hover:scale-105 transition"
            >
              Get Free Strategy Call
            </Link>
            <Link
              to="/services"
              className="px-6 py-3 border border-[#b8860b] text-[#b8860b] rounded-full font-semibold hover:bg-[#b8860b] hover:text-white transition"
            >
              Explore Services
            </Link>
          </div>
        </motion.div>

        {/* Right Mockup */}
        <motion.div className="flex-1 flex justify-center mt-12 lg:mt-0 relative" 
        initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1 }} >
        <div className="flex gap-6"> {["💻 Web", "🔍 SEO", "📢 Ads"].map((item, i) =>
         ( <motion.div key={i} className="w-24 h-24 bg-white/70 backdrop-blur-lg shadow-xl rounded-2xl flex items-center justify-center text-xl font-semibold"
          animate={{ rotateY: 360 }} 
          transition={{ repeat: Infinity, duration: 6 + i * 2, ease: "linear" }} > 
          {item} </motion.div> ))} </div> 
        </motion.div>
    </section>

      {/* Services Section */}
      <section className="py-20 px-8 bg-[#fdfaf6] text-center">
        {/* Section Heading */}
        <motion.div
          className="max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            Our Services
          </h2>
          <p className="mt-4 text-gray-700 text-lg">
            We help you transform ideas into digital experiences that grow your business.
          </p>
        </motion.div>

        {/* Services Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {services.map((service, i) => (
            <motion.div
              key={i}
              className="p-6 bg-white rounded-2xl shadow-lg flex flex-col items-center text-center hover:scale-105 transition-transform"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-gray-700 text-sm">{service.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Explore Services Button */}
        <motion.div
          className="mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Link
            to="/services"
            className="px-8 py-3 bg-[#b8860b] text-white rounded-full font-semibold shadow-lg hover:scale-105 transition"
          >
            Explore Our Services
          </Link>
        </motion.div>
      </section>

     {/* Portfolio / Projects Section */}
<section className="py-20 px-8 bg-[#fdfaf6] text-center">
  {/* Section Heading */}
  <motion.div
    className="max-w-3xl mx-auto mb-12"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
  >
    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
      Our Top Projects
    </h2>
    <p className="mt-4 text-gray-700 text-lg">
      Explore some of our recent works — combining creativity, technology, and performance.
    </p>
  </motion.div>

  {/* Projects Grid / Swipeable */}
  <motion.div
    className="flex gap-6 overflow-x-auto md:grid md:grid-cols-3 md:gap-8 md:overflow-visible"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
  >
    {[
      {
        title: "Kalki Motors Website",
        desc: [
          "Responsive multi-brand two-wheeler platform",
          "Integrated booking & service management",
          "Fast, clean UI/UX design",
        ],
        media: "/images/kalki-motors.png",
        link: "https://kalkimotors.com",
      },
      {
        title: "VisionReality Mobile App",
        desc: [
          "Custom mobile app",
          "AI-driven user engagement",
          "Seamless cross-platform support",
          "PWA enabled ready to download",
          "gewhdbwijehfijw",
          "bhjcdbjvsdjfcjsdlicj",
        ],
        media: "/images/visionreality-app.png",
        link: "https://visionreality.com/app",
      },
      
      {
        title: "E-Commerce Solution",
        desc: [
          "Custom online store design",
          "Payment gateway integration",
          "Optimized for conversions",
        ],
        media: "/images/ecommerce.png",
        link: "https://visionreality.com/ecommerce",
      },
    ].map((project, i) => (
      <motion.div
        key={i}
        className="min-w-[300px] md:min-w-0 md:flex-1 bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col text-left hover:scale-105 transition-transform"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: i * 0.2 }}
      >
        <div className="w-full h-48 overflow-hidden">
          <img
            src={project.media}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-6 flex flex-col">
          <h3 className="text-xl font-bold mb-3">{project.title}</h3>
          <ul className="text-gray-700 text-sm mb-4 list-disc list-inside">
            {project.desc.map((point, idx) => (
              <li key={idx}>{point}</li>
            ))}
          </ul>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-auto px-4 py-2 bg-[#b8860b] text-white rounded-full font-semibold shadow-lg hover:scale-105 transition"
          >
            Visit Project
          </a>
        </div>
      </motion.div>
    ))}
  </motion.div>

  {/* See All Projects Button */}
  <motion.div
    className="mt-12"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
  >
    <Link
      to="/projects"
      className="px-8 py-3 bg-[#b8860b] text-white rounded-full font-semibold shadow-lg hover:scale-105 transition"
    >
      See All Projects
    </Link>
  </motion.div>
</section>

{/* Why Choose Us Section (Below Portfolio) */}
<section className="py-20 px-8 bg-white text-center">
  <motion.div
    className="max-w-3xl mx-auto mb-12"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
  >
    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
      Why Choose Us
    </h2>
    <p className="mt-4 text-gray-700 text-lg">
      We combine creativity, technology, and intelligence to deliver results that matter.
    </p>
  </motion.div>

  <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
    {[
      { icon: "🛠️", title: "Custom Web", desc: "Bringing your ideas to custom solutions at every step." },  
      { icon: "⚡", title: "Fast & Efficient", desc: "Lightning-fast websites and apps with optimized performance." },
      { icon: "🎨", title: "Creative Design", desc: "Unique, visually stunning designs that engage users." },
      
      { icon: "💼", title: "Professional Support", desc: "Dedicated team providing guidance every step of the way." },
    ].map((feature, i) => (
      <motion.div
        key={i}
        className="p-6 bg-[#fdfaf6] rounded-2xl shadow-lg flex flex-col items-center text-center hover:scale-105 transition-transform"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: i * 0.2 }}
      >
        <div className="text-4xl mb-4">{feature.icon}</div>
        <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
        <p className="text-gray-700 text-sm">{feature.desc}</p>
      </motion.div>
    ))}
  </div>
</section>

{/*about us*/}
<section className="py-20 bg-[#fdfaf6] text-gray-900">
  <div className="container mx-auto px-6 lg:px-16">
    {/* Heading */}
    <motion.h2
      className="text-4xl md:text-5xl font-bold text-center mb-8"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      About <span className="text-[#b8860b]">VisionReality</span>
    </motion.h2>

    {/* Paragraph */}
    <motion.p
      className="max-w-3xl mx-auto text-lg md:text-xl text-gray-700 text-center mb-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 1 }}
    >
      We are a team of creative developers, designers, and marketers
      passionate about building intelligent digital solutions that scale.
    </motion.p>

    {/* Cards Grid */}
    <motion.div
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 1 }}
    >
      {/* Card 1 */}
      <div className="p-4 sm:p-6 rounded-2xl shadow-lg bg-white hover:shadow-xl transition">
        <h3 className="text-lg md:text-xl font-semibold mb-2">🚀 Innovation</h3>
        <p className="text-gray-700 text-sm md:text-base">
          We stay ahead of trends and use AI-driven strategies to deliver cutting-edge results.
        </p>
      </div>

      {/* Card 2 */}
      <div className="p-4 sm:p-6 rounded-2xl shadow-lg bg-white hover:shadow-xl transition">
        <h3 className="text-lg md:text-xl font-semibold mb-2">🤝 Client Focus</h3>
        <p className="text-gray-700 text-sm md:text-base">
          We work closely with clients, transforming ideas into premium digital experiences.
        </p>
      </div>

      {/* Card 3 */}
      <div className="p-4 sm:p-6 rounded-2xl shadow-lg bg-white hover:shadow-xl transition">
        <h3 className="text-lg md:text-xl font-semibold mb-2">🏆 Quality First</h3>
        <p className="text-gray-700 text-sm md:text-base">
          Every project we deliver is polished, scalable, and results-driven.
        </p>
      </div>
    </motion.div>
  </div>
</section>



    </div>
  );
}
