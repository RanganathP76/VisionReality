import { motion } from "framer-motion";

function Portfolio() {
  const projects = [
    {
      title: "🚗 Kalki Motors",
      tagline: "Multi-branded two-wheeler sales & doorstep service",
      image: "/images/kalki-motors.png", // place your image in public/images folder
      points: [
        "Developed a responsive website with modern UI/UX.",
        "Integrated service booking system with location tracking.",
        "SEO-optimized content for better visibility.",
        "Deployed on Vercel with scalable architecture."
      ],
      link: "https://kalkimotors.vercel.app"
    },
    {
      title: "📱 Doorstep Motor Service App",
      tagline: "On-demand bike & scooter service at your doorstep",
      image: "/images/doorstep-service.png",
      points: [
        "Built cross-platform mobile app using React Native.",
        "Live location tracking & service status updates.",
        "Integrated payment gateway & booking management.",
        "Customer-friendly dashboard with history & notifications."
      ],
      link: "https://visionreality.in/doorstep-service"
    },
    {
      title: "💼 Startup Growth Campaign",
      tagline: "Digital marketing & branding for emerging startups",
      image: "/images/startup-campaign.png",
      points: [
        "End-to-end digital marketing strategy (SEO, Ads, Social Media).",
        "Brand storytelling with engaging content.",
        "Analytics-driven campaigns to increase leads.",
        "Scaled multiple startups to 10x growth."
      ],
      link: "https://visionreality.in/startup-campaign"
    }
  ];

  return (
    <section className="py-20 bg-gray-50 text-gray-900">
      <div className="container mx-auto px-6 lg:px-16">
        {/* Heading */}
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-8"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Our <span className="text-accent">Portfolio</span>
        </motion.h2>

        <motion.p
          className="max-w-3xl mx-auto text-lg text-gray-600 text-center mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Here’s a showcase of our projects where we transformed creative ideas 
          into impactful digital solutions. Each project reflects our 
          commitment to innovation, quality, and growth.
        </motion.p>

        {/* Project List */}
        <div className="space-y-16">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="grid md:grid-cols-2 gap-10 items-center bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.3, duration: 1 }}
            >
              {/* Image */}
              <div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="rounded-xl shadow-md"
                />
              </div>

              {/* Details */}
              <div>
                <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4 italic">{project.tagline}</p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
                  {project.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-5 py-2 bg-indigo-600 text-white rounded-full shadow hover:bg-indigo-700 transition"
                >
                  View Project 🔗
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
