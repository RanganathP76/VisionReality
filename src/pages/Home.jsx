import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { CheckCircle2 } from "lucide-react";

export default function Home() {
  const mainService = {
    title: "1. Complete Digital Presence",
    desc: "Your business. Fully digital. Fully managed. From coding your website to running your ads and managing your social media, we act as your dedicated in-house tech and marketing team.",
    icon: "🌐"
  };

  const singleServices = [
    { title: "2. Web & App Development", desc: "Custom MERN stack websites, Shopify stores, and powerful mobile applications.", icon: "💻" },
    { title: "3. Software Development", desc: "Custom software development built specifically for any automation workflow and complex business operations.", icon: "🖥️" },
    { title: "4. Digital Marketing", desc: "Data-driven Meta Ads, Google Ads, and lead generation campaigns.", icon: "📢" },
    { title: "5. SEO & Social Media", desc: "Search engine dominance and consistent, engaging brand identity management.", icon: "🔍" },
    { title: "6. Business Automation", desc: "Automating repetitive tasks with API integrations, WhatsApp bots, and CRM setups.", icon: "⚙️" },
    { title: "7. Software Products", desc: "Ready-to-deploy digital tools, booking systems, and business management software.", icon: "📦" }
  ];

  return (
    <div className="font-sans text-gray-900">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col lg:flex-row items-center justify-center px-8 py-16 bg-gradient-to-br from-[#f8f5f0] to-[#eae4da] text-center lg:text-left">
        <motion.div
          className="flex-1 max-w-xl"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <span className="text-sm tracking-widest uppercase text-[#b8860b] font-medium">
            Extreme Intelligence • Digitalization • Software Products
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold mt-4 text-gray-900 leading-snug">
            We don't just build websites. We build <span className="text-[#b8860b]">Digital Businesses.</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-700">
            From bespoke software development to complete end-to-end digital presence management. Whether you need a custom platform or a ready-made product, we turn your vision into scalable reality.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 justify-center lg:justify-start">
            <Link to="/contact" className="px-6 py-3 bg-[#b8860b] text-white rounded-full font-semibold shadow-lg hover:scale-105 transition">
              Start Your Digitalization
            </Link>
            <Link to="/services" className="px-6 py-3 border border-[#b8860b] text-[#b8860b] rounded-full font-semibold hover:bg-[#b8860b] hover:text-white transition">
              Explore Solutions
            </Link>
          </div>
        </motion.div>

        <motion.div className="flex-1 flex justify-center mt-12 lg:mt-0 relative" 
          initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1 }} >
          <div className="flex gap-6"> 
            {["🛠️ Dev", "📈 Scale", "🚀 Launch"].map((item, i) => ( 
              <motion.div key={i} className="w-24 h-24 bg-white/70 backdrop-blur-lg shadow-xl rounded-2xl flex items-center justify-center text-xl font-semibold"
                animate={{ rotateY: 360 }} 
                transition={{ repeat: Infinity, duration: 6 + i * 2, ease: "linear" }} > 
                {item} 
              </motion.div> 
            ))} 
          </div> 
        </motion.div>
      </section>

      {/* Proven Results Section */}
      <section className="py-16 px-8 bg-gray-900 text-white text-center">
        <motion.div className="max-w-4xl mx-auto" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
          <span className="text-[#b8860b] font-semibold tracking-wider uppercase text-sm mb-2 block">Proven Results</span>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-8">Powering High-Volume Growth: Cuztory.in</h2>
          <p className="text-lg text-gray-300 mb-10">We built and entirely manage the digital infrastructure for Cuztory.in. We handle the technology so they can focus on the product.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 border border-gray-700 rounded-xl bg-gray-800/50">
              <div className="text-4xl font-bold text-[#b8860b] mb-2">₹6L+</div>
              <div className="text-gray-400 text-sm uppercase tracking-wide">Generated Revenue</div>
            </div>
            <div className="p-6 border border-gray-700 rounded-xl bg-gray-800/50">
              <div className="text-4xl font-bold text-[#b8860b] mb-2">100K+</div>
              <div className="text-gray-400 text-sm uppercase tracking-wide">Unique Visitors</div>
            </div>
            <div className="p-6 border border-gray-700 rounded-xl bg-gray-800/50">
              <div className="text-4xl font-bold text-[#b8860b] mb-2">700+</div>
              <div className="text-gray-400 text-sm uppercase tracking-wide">Orders Processed</div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* RESTRUCTURED SERVICES SECTION */}
      <section className="py-20 px-8 bg-[#fdfaf6]">
        <div className="max-w-6xl mx-auto">
          <motion.div className="text-center mb-12" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">How We Help You Grow</h2>
            <p className="mt-4 text-gray-700 text-lg max-w-2xl mx-auto">Choose our complete management package, or select the specific single services your business needs right now.</p>
          </motion.div>

          {/* Option 1: Complete Digital Presence (Featured) */}
          <motion.div 
            className="bg-gray-900 text-white rounded-3xl p-8 md:p-12 mb-12 shadow-2xl text-center relative overflow-hidden"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          >
            <div className="text-6xl mb-4">{mainService.icon}</div>
            <h3 className="text-3xl md:text-4xl font-bold mb-4 text-[#b8860b]">{mainService.title}</h3>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">{mainService.desc}</p>
            <Link to="/services" className="inline-block px-8 py-4 bg-[#b8860b] text-white rounded-full font-bold shadow-lg hover:bg-white hover:text-gray-900 transition-all">
              View The Complete Package
            </Link>
          </motion.div>

          {/* Options 2+: Single Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {singleServices.map((service, i) => (
              <motion.div
                key={i}
                className="p-8 bg-white rounded-2xl shadow-md flex flex-col items-center text-center hover:shadow-xl transition-all border border-gray-100 hover:border-[#b8860b]/30"
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">{service.desc}</p>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link to="/services" className="px-8 py-3 bg-gray-900 text-white rounded-full font-semibold shadow hover:bg-[#b8860b] transition inline-block">
              See All Services Detailed
            </Link>
          </div>
        </div>
      </section>
    
      {/* Portfolio / Projects Section */}
      <section className="py-20 px-8 bg-white text-center">
        <motion.div className="max-w-3xl mx-auto mb-12" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">Built by Vision Reality</h2>
          <p className="mt-4 text-gray-700 text-lg">From high-conversion e-commerce to service booking applications.</p>
        </motion.div>

        <motion.div className="flex gap-6 overflow-x-auto md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-8 md:overflow-visible max-w-6xl mx-auto" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
          {[
            {
              title: "Cuztory E-Commerce Infrastructure",
              desc: ["Complete end-to-end digital management", "Advanced storefront architecture", "Automated order processing", "Conversion-optimized UI/UX", "Full-scale marketing deployment"],
              media: "/images/ecommerce.jpg",
              link: "https://cuztory.in/",
            },
            {
              title: "Kalki Motors Booking Platform",
              desc: ["Multi-brand two-wheeler service portal", "Live location integration", "Automated booking management", "Instant data-driven notifications", "Scalable service architecture"],
              media: "/images/kalki-motors.jpg",
              link: "https://kalki-motors.vercel.app/",
            },
            {
              title: "VisionReality Mobile App",
              desc: ["Proprietary cross-platform application", "PWA enabled for instant access", "AI-driven user engagement tools", "Showcasing digital product capabilities"],
              media: "/images/visionreality-app.jpg",
              link: "https://vision-reality-4u.vercel.app/",
            }
          ].map((project, i) => (
            <motion.div key={i} className="min-w-[300px] md:min-w-0 md:flex-1 bg-[#fdfaf6] border border-gray-100 rounded-2xl shadow-md overflow-hidden flex flex-col text-left hover:shadow-xl transition-all">
              <div className="w-full h-48 overflow-hidden bg-gray-200">
                <img src={project.media} alt={project.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-3 text-gray-900">{project.title}</h3>
                <ul className="text-gray-600 text-sm mb-6 space-y-2">
                  {project.desc.map((point, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle2 className="w-4 h-4 text-[#b8860b] mr-2 flex-shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="mt-auto px-4 py-2 bg-gray-900 text-white text-center rounded-full font-semibold shadow hover:bg-[#b8860b] transition">
                  View Live Project
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* About Us Teaser */}
      <section className="py-20 bg-[#fdfaf6] text-gray-900">
        <div className="container mx-auto px-6 lg:px-16 text-center">
          <motion.h2 className="text-4xl md:text-5xl font-bold mb-8" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
            Built by <span className="text-[#b8860b]">Engineers & Entrepreneurs</span>
          </motion.h2>
          <motion.p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-700 mb-12" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 1 }}>
            We don't just build for clients; we build companies. We apply the exact same rigorous frameworks, AI integrations, and growth strategies to your business that we use to scale our own internal ventures.
          </motion.p>
          <Link to="/about" className="px-8 py-3 border-2 border-gray-900 text-gray-900 rounded-full font-semibold hover:bg-gray-900 hover:text-white transition inline-block">
            Read Our Story
          </Link>
        </div>
      </section>
    </div>
  );
}