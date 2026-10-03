import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ExternalLink, CheckCircle2, TrendingUp, Users, ShoppingCart } from "lucide-react";

function Portfolio() {
  const projects = [
    {
      title: "Cuztory E-Commerce Infrastructure",
      tagline: "High-volume custom e-commerce & complete digital management",
      image: "/images/ecommerce.jpg", // Ensure this image is in public/images
      type: "Digitalized Business & Custom Software",
      stats: [
        { icon: ShoppingCart, value: "700+", label: "Orders Processed" },
        { icon: Users, value: "100K+", label: "Unique Visitors" },
        { icon: TrendingUp, value: "₹6L+", label: "Generated Revenue" }
      ],
      points: [
        "Built a complete custom e-commerce storefront optimized for high conversion.",
        "End-to-end management of the entire digital ecosystem (SEO, Ads, Content).",
        "Automated order processing and integrated logistics workflows.",
        "Developed custom admin panels for seamless inventory management."
      ],
      link: "https://cuztory.in/"
    },
    {
      title: "Kalki Motors",
      tagline: "Multi-branded two-wheeler sales & doorstep service booking portal",
      image: "/images/kalki-motors.jpg", 
      type: "Custom Web Application & Automation",
      stats: [],
      points: [
        "Developed a robust service booking system with real-time location tracking.",
        "Automated customer notifications (Instant email data on booking).",
        "Built a comprehensive admin dashboard for booking & service management.",
        "Deployed on scalable architecture to handle regional traffic spikes."
      ],
      link: "https://kalkimotors.vercel.app"
    },
    {
      title: "VisionReality Core App",
      tagline: "Our proprietary mobile application showcasing our product capabilities",
      image: "/images/visionreality-app.jpg",
      type: "Proprietary Software Product",
      stats: [],
      points: [
        "Built cross-platform using modern frameworks (PWA enabled).",
        "Integrated AI-driven user engagement tools and analytics.",
        "Demonstrates our ability to build fast, scalable SaaS products.",
        "Seamless cross-platform support across iOS, Android, and Web."
      ],
      link: "https://vision-reality-4u.vercel.app/"
    }
  ];

  return (
    <section className="py-20 bg-[#faf9f6] text-gray-900">
      <div className="container mx-auto px-6 lg:px-16 max-w-7xl">
        
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-sm tracking-widest uppercase text-[#b8860b] font-medium block mb-2">
            Our Work
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
            Proven <span className="text-[#b8860b]">Digital Infrastructure</span>
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-600">
            We don't just build websites; we build scalable digital businesses. Here is a showcase of the custom software, e-commerce platforms, and fully managed digital ecosystems we've engineered.
          </p>
        </motion.div>

        {/* Project List */}
        <div className="space-y-24">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className={`flex flex-col lg:flex-row gap-12 items-center ${
                index % 2 !== 0 ? "lg:flex-row-reverse" : ""
              }`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              
              {/* Image Section */}
              <div className="w-full lg:w-1/2 relative group">
                <div className="absolute inset-0 bg-[#b8860b] rounded-2xl transform translate-x-3 translate-y-3 opacity-20 group-hover:translate-x-4 group-hover:translate-y-4 transition-transform duration-300"></div>
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-100 bg-white">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
                  />
                  {/* Overlay Tag */}
                  <div className="absolute top-4 left-4 bg-gray-900/90 backdrop-blur-sm text-white px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide border border-gray-700">
                    {project.type}
                  </div>
                </div>
              </div>

              {/* Details Section */}
              <div className="w-full lg:w-1/2">
                <h3 className="text-3xl font-extrabold mb-3 text-gray-900">{project.title}</h3>
                <p className="text-lg text-gray-600 mb-6 italic border-l-4 border-[#b8860b] pl-4">
                  {project.tagline}
                </p>

                {/* Custom Stats for Cuztory (or future projects) */}
                {project.stats.length > 0 && (
                  <div className="grid grid-cols-3 gap-4 mb-8 bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                    {project.stats.map((stat, i) => (
                      <div key={i} className="text-center">
                        <div className="flex justify-center mb-1 text-[#b8860b]">
                          <stat.icon size={20} />
                        </div>
                        <div className="font-bold text-xl text-gray-900">{stat.value}</div>
                        <div className="text-[10px] uppercase tracking-wider text-gray-500 font-medium">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                <ul className="space-y-3 text-gray-700 mb-8">
                  {project.points.map((point, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-[#b8860b] mr-3 flex-shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-8 py-3 bg-gray-900 text-white font-bold rounded-full shadow-lg hover:bg-[#b8860b] hover:shadow-xl transition-all duration-300 group"
                >
                  View Live Project
                  <ExternalLink className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="mt-32 text-center bg-white rounded-3xl p-12 shadow-xl border border-gray-100"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to build your digital infrastructure?</h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Whether you need a custom application built from scratch or a partner to manage your entire online presence, we have the experience to deliver.
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-4 bg-[#b8860b] text-white font-bold rounded-full shadow hover:bg-gray-900 transition-all duration-300"
          >
            Start Your Project
          </Link>
        </motion.div>

      </div>
    </section>
  );
}

export default Portfolio;
