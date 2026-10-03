import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Target, Lightbulb, Code2, Globe, ShieldCheck, Rocket } from "lucide-react";

function About() {
  const coreValues = [
    {
      icon: Code2,
      title: "Hybrid Capabilities",
      desc: "We combine custom software development with ready-to-deploy SaaS products to give businesses the exact tools they need."
    },
    {
      icon: Globe,
      title: "End-to-End Ownership",
      desc: "Through our 'Digitalized Business' model, we don't just deliver a project; we manage and scale your entire digital ecosystem."
    },
    {
      icon: Lightbulb,
      title: "Entrepreneurial DNA",
      desc: "We build and scale our own profitable ventures (like Cuztory.in). We apply those exact same proven frameworks to your business."
    },
    {
      icon: Rocket,
      title: "AI & Automation",
      desc: "We leverage cutting-edge AI, API integrations, and workflow automation to eliminate manual tasks and accelerate growth."
    },
    {
      icon: Target,
      title: "Client-Centric Growth",
      desc: "Your success is our portfolio. We build scalable digital architectures designed to handle traffic spikes and high transaction volumes."
    },
    {
      icon: ShieldCheck,
      title: "Integrity & Reliability",
      desc: "Transparent communication, secure digital infrastructure, and continuous maintenance you can rely on long after launch."
    }
  ];

  return (
    <section className="py-20 bg-white text-gray-900">
      <div className="container mx-auto px-6 lg:px-16 max-w-7xl">
        
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-sm tracking-widest uppercase text-[#b8860b] font-medium block mb-2">
            Who We Are
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
            We Build <span className="text-[#b8860b]">Digital Businesses.</span>
          </h2>
          <motion.p
            className="max-w-4xl mx-auto text-lg text-gray-600 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Vision Reality is no longer just a digital agency—we are a hybrid technology company. 
            We are engineers, developers, and digital marketers who specialize in transforming 
            traditional operations into fully managed, high-performance digital ecosystems. 
          </motion.p>
        </motion.div>

        {/* Mission & Vision */}
        <motion.div
          className="grid md:grid-cols-2 gap-10 mb-24"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="p-10 rounded-3xl shadow-lg bg-[#fdfaf6] border border-gray-100 hover:shadow-xl transition-shadow relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#b8860b] opacity-5 rounded-bl-full group-hover:scale-110 transition-transform duration-500"></div>
            <h3 className="text-2xl font-bold mb-4 flex items-center text-gray-900">
              <Target className="w-6 h-6 text-[#b8860b] mr-3" />
              Our Mission
            </h3>
            <p className="text-gray-600 leading-relaxed relative z-10">
              To empower entrepreneurs and enterprises by providing enterprise-grade software, 
              ready-to-use digital products, and complete end-to-end digital management. 
              We want to handle your technology so you can focus entirely on your vision.
            </p>
          </div>
          <div className="p-10 rounded-3xl shadow-lg bg-[#fdfaf6] border border-gray-100 hover:shadow-xl transition-shadow relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#b8860b] opacity-5 rounded-bl-full group-hover:scale-110 transition-transform duration-500"></div>
            <h3 className="text-2xl font-bold mb-4 flex items-center text-gray-900">
              <Lightbulb className="w-6 h-6 text-[#b8860b] mr-3" />
              Our Vision
            </h3>
            <p className="text-gray-600 leading-relaxed relative z-10">
              To become the ultimate digital infrastructure partner for modern businesses. 
              We envision a landscape where any company, regardless of technical expertise, 
              can plug into Vision Reality to instantly scale their digital presence.
            </p>
          </div>
        </motion.div>

        {/* The "Entrepreneurial DNA" Concept */}
        <motion.div
          className="max-w-5xl mx-auto mb-24 text-center bg-gray-900 text-white rounded-3xl p-10 md:p-16 shadow-2xl"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-3xl font-extrabold mb-6 text-[#b8860b]">Built by Engineers & Entrepreneurs</h3>
          <p className="text-lg text-gray-300 leading-relaxed mb-8 max-w-3xl mx-auto">
            What makes us different? We actually use the technology we sell. Through our own ventures 
            like <strong>Cuztory.in</strong>, we've navigated the complexities of high-volume e-commerce, 
            logistics automation, and aggressive digital marketing. When you hire Vision Reality, you aren't 
            just getting coders—you are getting battle-tested digital operators.
          </p>
          <div className="inline-block px-6 py-2 border border-gray-700 rounded-full text-sm font-semibold tracking-wide text-gray-400 uppercase">
            Your Idea → Our Infrastructure → Unstoppable Growth
          </div>
        </motion.div>

        {/* Core Values / Why Choose Us */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900">Our Core Pillars</h3>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {coreValues.map((value, i) => (
              <motion.div
                key={i}
                className="p-8 rounded-2xl border border-gray-100 bg-white hover:border-[#b8860b]/30 hover:shadow-lg transition-all duration-300 group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
              >
                <div className="w-12 h-12 rounded-lg bg-[#fdfaf6] flex items-center justify-center mb-6 group-hover:bg-[#b8860b]/10 transition-colors">
                  <value.icon className="w-6 h-6 text-[#b8860b]" />
                </div>
                <h4 className="text-xl font-bold mb-3 text-gray-900">{value.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Closing CTA */}
        <motion.div
          className="text-center bg-[#fdfaf6] rounded-3xl p-12 border border-[#b8860b]/20"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-3xl font-bold mb-4 text-gray-900">
            Let’s build your <span className="text-[#b8860b]">Digital Future.</span>
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8 text-lg">
            Whether you need a standalone software product, a custom application, or a partner to manage your entire online ecosystem, we are ready to execute.
          </p>
          <Link 
            to="/contact" 
            className="inline-block px-8 py-4 bg-gray-900 text-white rounded-full font-bold shadow-lg hover:bg-[#b8860b] transition-all duration-300 transform hover:-translate-y-1"
          >
            Discuss Your Vision
          </Link>
        </motion.div>

      </div>
    </section>
  );
}

export default About;
