import { motion } from "framer-motion";

function About() {
  return (
    <section className="py-20 bg-white text-gray-900">
      <div className="container mx-auto px-6 lg:px-16">
        {/* Heading */}
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-8"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          About <span className="text-accent">VisionReality</span>
        </motion.h2>

        {/* Intro Paragraph */}
        <motion.p
          className="max-w-4xl mx-auto text-lg text-gray-600 text-center mb-12 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          VisionReality is more than a digital agency — we are your partners in 
          transforming ambitious ideas into powerful realities. With a strong 
          belief in innovation, collaboration, and creativity, we help startups 
          and businesses build digital solutions that truly make an impact.  
        </motion.p>

        {/* Mission & Vision */}
        <motion.div
          className="grid md:grid-cols-2 gap-10 mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
        >
          <div className="p-6 rounded-2xl shadow-lg bg-gray-50 hover:shadow-xl transition">
            <h3 className="text-2xl font-semibold mb-4">🌍 Our Mission</h3>
            <p className="text-gray-600">
              To empower entrepreneurs and organizations by delivering 
              cutting-edge web, mobile, and marketing solutions that 
              bring ideas like <span className="font-semibold">Doorstep Motor Service</span>, 
              E-commerce platforms, and innovative startup concepts to life.
            </p>
          </div>
          <div className="p-6 rounded-2xl shadow-lg bg-gray-50 hover:shadow-xl transition">
            <h3 className="text-2xl font-semibold mb-4">✨ Our Vision</h3>
            <p className="text-gray-600">
              To become a global leader in digital innovation, where businesses 
              and startups of all sizes grow together with us through technology, 
              creativity, and trust.
            </p>
          </div>
        </motion.div>

        {/* Concept / Story */}
        <motion.div
          className="max-w-5xl mx-auto mb-16 text-center"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <h3 className="text-2xl font-semibold mb-4">💡 Our Concept</h3>
          <p className="text-gray-600 leading-relaxed">
            We believe every idea, no matter how small, can shape the future. 
            Whether it’s a local business wanting an online presence or a 
            startup aiming to disrupt industries, we bring those ideas to life.  
            Our approach is simple — <span className="font-semibold">Your Idea → Our Code → Growth Together 🚀</span>.  
            Together, we create solutions that not only solve problems but 
            also inspire change.
          </p>
        </motion.div>

        {/* Core Values Cards */}
        <motion.div
          className="grid sm:grid-cols-2 md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 1 }}
        >
          <div className="p-6 rounded-2xl shadow-lg bg-gray-50 hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-3">🚀 Innovation</h3>
            <p className="text-gray-600">We use AI-driven and modern strategies to craft future-ready solutions.</p>
          </div>
          <div className="p-6 rounded-2xl shadow-lg bg-gray-50 hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-3">🤝 Client Focus</h3>
            <p className="text-gray-600">Every project starts and ends with your vision and goals.</p>
          </div>
          <div className="p-6 rounded-2xl shadow-lg bg-gray-50 hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-3">🏆 Quality First</h3>
            <p className="text-gray-600">We ensure each product is polished, scalable, and impactful.</p>
          </div>
          <div className="p-6 rounded-2xl shadow-lg bg-gray-50 hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-3">🤝 Collaboration</h3>
            <p className="text-gray-600">We grow together with our clients — teamwork is at the heart of success.</p>
          </div>
          <div className="p-6 rounded-2xl shadow-lg bg-gray-50 hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-3">🌱 Growth</h3>
            <p className="text-gray-600">Helping startups and businesses scale is our ultimate reward.</p>
          </div>
          <div className="p-6 rounded-2xl shadow-lg bg-gray-50 hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-3">🔑 Integrity</h3>
            <p className="text-gray-600">We believe in transparent, ethical, and honest partnerships.</p>
          </div>
        </motion.div>

        {/* Closing */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <h3 className="text-2xl font-semibold mb-4">
            Together, let’s turn <span className="text-accent">Vision</span> into <span className="text-accent">Reality</span> ✨
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto mb-6">
            Whether you’re a startup with a disruptive idea or an established 
            business seeking digital transformation, we’re here to help you 
            every step of the way.
          </p>
          <button className="px-6 py-3 bg-indigo-600 text-white rounded-full shadow hover:bg-indigo-700 transition">
            Let’s Work Together 🚀
          </button>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
