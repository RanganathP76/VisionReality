import { 
  Palette, 
  Code, 
  BarChart3, 
  Smartphone, 
  Search 
} from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Services() {
  const services = [
    {
      icon: Code,
      title: "Customized Web App Development",
      description:
        "Turn your startup ideas into reality with powerful web and mobile applications. From concepts like Doorstep Motor Service, Food Delivery, and E-commerce to any unique business vision — we craft tailored digital platforms that help you grow and scale.",
      features: [
        "Startup MVP Development",
        "Custom Web & Mobile Platforms",
        "Scalable and Future-Ready",
        "Your Idea → Our Code → Growth Together 🚀"
      ],
      color: "text-indigo-600",
    },
    {
      icon: Palette,
      title: "Web Design",
      description: "Beautiful, user-centered designs that captivate your audience and drive engagement.",
      features: ["UI/UX Design", "Responsive Design", "Brand Identity", "Wireframing"],
      color: "text-blue-600",
    },
    {
      icon: Code,
      title: "Web Development",
      description: "Robust, scalable web applications built with cutting-edge technologies.",
      features: ["React/Next.js", "Backend APIs", "Database Design", "Performance Optimization"],
      color: "text-green-600",
    },
    {
      icon: BarChart3,
      title: "Digital Marketing",
      description: "Data-driven marketing strategies that increase visibility and drive conversions.",
      features: ["SEO Optimization", "PPC Campaigns", "Social Media", "Analytics & Reporting"],
      color: "text-purple-600",
    },
    {
      icon: Smartphone,
      title: "Mobile Optimization",
      description: "Ensure your digital presence works flawlessly across all devices.",
      features: ["Mobile-First Design", "App Development", "Progressive Web Apps", "Cross-Platform"],
      color: "text-orange-600",
    },
    {
      icon: Search,
      title: "SEO Services",
      description: "Boost your search rankings and drive organic traffic to your website.",
      features: ["Keyword Research", "Technical SEO", "Content Strategy", "Local SEO"],
      color: "text-red-600",
    },
  ];

  return (
    <section className="py-20 bg-[#faf9f6]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Heading */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From concept to launch, we provide comprehensive digital solutions 
            that help your business succeed in the digital landscape. 
            <span className="block font-semibold text-indigo-600 mt-2">
              Let’s grow together 🌱
            </span>
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              className={`group bg-white rounded-2xl shadow-sm p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 ${
                index === 0 ? "border-2 border-indigo-500 shadow-md" : ""
              }`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-gray-50 mb-6 group-hover:scale-110 transition-transform">
                <service.icon className={`h-7 w-7 ${service.color}`} />
              </div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-sm text-gray-500">
                    <span className="w-1.5 h-1.5 bg-[#d6a2e8] rounded-full mr-3"></span>
                    {feature}
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className="inline-block px-5 py-2 bg-indigo-600 text-white text-sm font-medium rounded-lg shadow hover:bg-indigo-700 transition"
              >
                Book Appointment
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
