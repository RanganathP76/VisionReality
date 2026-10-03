import { 
  Palette, Code, Megaphone, Smartphone, Search, Box, Globe, Cpu, ShieldCheck, ArrowRight
} from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Services() {
  const digitalEcosystemSteps = [
    "Website", "Software", "Google Presence", "SEO", "Advertising", 
    "Social Media", "Content", "Analytics", "Automation", "Maintenance"
  ];

  // Services 2 through 9 (The Single Options)
  const singleServices = [
    {
      icon: Globe,
      title: "2. Website & Web Development",
      description: "Build your professional digital presence.",
      features: ["Business & Ecommerce Websites", "Landing Pages", "Custom Web Apps", "Booking Systems", "Admin Dashboards"],
      cta: "Build My Website"
    },
    {
      icon: Code,
      title: "3. Software & App Development",
      description: "Turn your business processes into powerful software.",
      features: ["Custom Business Software", "CRM & ERP Systems", "Mobile Applications", "Customer Portals", "API Integrations"],
      cta: "Build My Software"
    },
    {
      icon: Megaphone,
      title: "4. Digital Marketing & Advertising",
      description: "Reach the right customers and turn attention into business.",
      features: ["Meta & Google Ads", "Lead Generation", "Campaign Management", "Conversion Tracking", "Remarketing"],
      cta: "Grow My Business"
    },
    {
      icon: Search,
      title: "5. SEO & Google Presence",
      description: "Make your business easier to discover online.",
      features: ["Google Business Profile", "Local & On-Page SEO", "Technical SEO", "Keyword Research", "Search Console"],
      cta: "Improve My Visibility"
    },
    {
      icon: Smartphone,
      title: "6. Social Media Management",
      description: "Build a consistent and recognizable digital identity.",
      features: ["Instagram & Facebook", "Content Planning", "Reels & Creatives", "Captions & Copy", "Performance Tracking"],
      cta: "Manage My Social Media"
    },
    {
      icon: Palette,
      title: "7. Branding & Creative Content",
      description: "Make your business look professional everywhere.",
      features: ["Brand & Visual Identity", "Logo Design", "Social Media Creatives", "Video & Reel Editing", "Product Photography"],
      cta: "Elevate My Brand"
    },
    {
      icon: Cpu,
      title: "8. Business Automation",
      description: "Automate repetitive business operations.",
      features: ["WhatsApp Integrations", "Payment Integrations", "CRM & Lead Automation", "Email Automation", "Custom Workflows"],
      cta: "Automate My Business"
    },
    {
      icon: ShieldCheck,
      title: "9. Website & Software Maintenance",
      description: "Keep your digital infrastructure secure and updated.",
      features: ["Bug Fixes & Updates", "Performance Optimization", "Hosting Management", "Backup Management", "Technical Support"],
      cta: "Maintain My Tech"
    },
  ];

  const products = [
    "Business Management Software", "CRM Solutions", "Booking Systems", 
    "Ecommerce Solutions", "Productivity Tools", "Digital Templates", "SaaS Products"
  ];

  return (
    <section className="py-20 bg-[#faf9f6]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <span className="text-sm tracking-widest uppercase text-[#b8860b] font-medium block mb-2">Our Services</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">Comprehensive Digital Solutions</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Choose exactly what your business needs. Select our complete management package, or pick the single services you require.
          </p>
        </motion.div>

        {/* 1. Complete Digital Presence (Featured at the top) */}
        <motion.div 
          className="bg-gray-900 rounded-3xl p-8 md:p-12 mb-16 shadow-2xl relative overflow-hidden text-center"
          initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
        >
          <div className="inline-block px-4 py-1 mb-6 rounded-full bg-[#b8860b]/20 text-[#b8860b] font-semibold tracking-wide text-sm border border-[#b8860b]/30">
            The Complete Package
          </div>
          <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            1. Complete Digital Presence
          </h3>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Your business. Fully digital. Fully managed. Instead of buying individual services, give Vision Reality responsibility for your overall digital ecosystem.
          </p>
          
          <div className="flex flex-wrap justify-center items-center gap-3 mb-10 max-w-4xl mx-auto">
            {digitalEcosystemSteps.map((step, index) => (
              <div key={index} className="flex items-center">
                <span className="px-4 py-2 bg-gray-800 text-gray-200 rounded-lg text-sm font-medium border border-gray-700">
                  {step}
                </span>
                {index !== digitalEcosystemSteps.length - 1 && (
                  <ArrowRight className="w-5 h-5 text-[#b8860b] mx-2 hidden md:block" />
                )}
              </div>
            ))}
          </div>

          <Link to="/contact" className="inline-block px-8 py-4 bg-[#b8860b] text-white text-lg font-bold rounded-full shadow-lg hover:bg-white hover:text-gray-900 transition-all transform hover:scale-105">
            Digitalize My Business
          </Link>
        </motion.div>

        {/* Single Options Header */}
        <div className="text-center mb-10">
          <h3 className="text-2xl font-bold text-gray-900">Or Choose Single Services</h3>
          <div className="h-1 w-20 bg-[#b8860b] mx-auto mt-4 rounded"></div>
        </div>

        {/* 2-9. Single Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {singleServices.map((service, index) => (
            <motion.div 
              key={index}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-xl hover:border-[#b8860b]/30 transition-all flex flex-col h-full"
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1, duration: 0.6 }} viewport={{ once: true }}
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-[#fdfaf6] mb-4">
                <service.icon className="h-6 w-6 text-[#b8860b]" />
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">{service.title}</h4>
              <p className="text-xs text-gray-600 mb-4 font-medium">{service.description}</p>
              
              <ul className="space-y-1.5 mb-6 flex-grow">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-start text-xs text-gray-500">
                    <span className="w-1.5 h-1.5 bg-[#b8860b] rounded-full mr-2 mt-1 flex-shrink-0"></span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Link to="/contact" className="block text-center w-full px-4 py-2.5 bg-gray-50 text-gray-900 font-semibold text-xs rounded-lg border border-gray-200 hover:bg-[#b8860b] hover:text-white transition-all">
                {service.cta}
              </Link>
            </motion.div>
          ))}
        </div>

        {/* 10. Vision Reality Products */}
        <motion.div 
          className="bg-white rounded-3xl p-8 md:p-12 border border-gray-200 shadow-sm text-center"
          initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
        >
          <div className="flex justify-center mb-6">
            <Box className="w-12 h-12 text-[#b8860b]" />
          </div>
          <h3 className="text-3xl font-extrabold text-gray-900 mb-4">
            10. Vision Reality Products
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Ready-to-use digital solutions built by Vision Reality. Deploy powerful software instantly without the custom development wait time.
          </p>
          
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto mb-10">
            {products.map((product, index) => (
              <span key={index} className="px-5 py-2.5 bg-gray-50 text-gray-800 rounded-full text-sm font-semibold border border-gray-100">
                {product}
              </span>
            ))}
          </div>

          <Link to="/contact" className="inline-block px-8 py-3 bg-gray-900 text-white font-bold rounded-full shadow hover:bg-[#b8860b] transition-all">
            Explore Our Products
          </Link>
        </motion.div>

      </div>
    </section>
  );
}

export default Services;