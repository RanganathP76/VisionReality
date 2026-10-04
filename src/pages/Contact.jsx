import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";

export default function Contact() {
  // PASTE YOUR NEW DEPLOYMENT URL HERE
  const SCRIPT_URL =
    "https://script.google.com/macros/s/AKfycbwh6Uz30QupjxHM7wkYRIHcffvnH-unG9BYz5GyftXW-9ToGY0S7cEDRGjPZ4Bu94qk/exec";

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setIsSuccess(false);

    const formData = new FormData(e.target);

    try {
      await fetch(SCRIPT_URL, {
        method: "POST",
        body: formData,
        mode: "no-cors",
      });
      
      setIsSuccess(true);
      e.target.reset();
      
      setTimeout(() => setIsSuccess(false), 5000);
    } catch (err) {
      console.error(err);
      alert("❌ Something went wrong. Please check your internet connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#faf9f6] py-20 px-6 font-sans text-gray-900">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-sm tracking-widest uppercase text-[#b8860b] font-medium block mb-2">
            Get In Touch
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Let's Discuss Your <span className="text-[#b8860b]">Digital Future</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Whether you want to automate your business, build custom software, or hand over your entire digital ecosystem—we are ready to execute.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          
          {/* Left Side - Contact Info */}
          <motion.div
            className="flex-1 lg:py-8"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 h-full">
              <h3 className="text-2xl font-bold mb-8 text-gray-900">Contact Information</h3>
              
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-[#fdfaf6] rounded-xl flex items-center justify-center mr-5 flex-shrink-0">
                    <Mail className="w-6 h-6 text-[#b8860b]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-1">Email Us</h4>
                    <a href="mailto:visionreality4uofficial@gmail.com" className="text-lg font-medium hover:text-[#b8860b] transition-colors">
                      visionreality4uofficial@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-[#fdfaf6] rounded-xl flex items-center justify-center mr-5 flex-shrink-0">
                    <Phone className="w-6 h-6 text-[#b8860b]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-1">Call Us</h4>
                    <a href="tel:+917483388536" className="text-lg font-medium hover:text-[#b8860b] transition-colors">
                      +91 7483388536
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-[#fdfaf6] rounded-xl flex items-center justify-center mr-5 flex-shrink-0">
                    <MapPin className="w-6 h-6 text-[#b8860b]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-1">Location</h4>
                    <p className="text-lg font-medium text-gray-900">
                      Bengaluru, Karnataka, India
                    </p>
                  </div>
                </div>
              </div>

              {/* Decorative Element */}
              <div className="mt-12 p-6 bg-gray-900 rounded-2xl text-white">
                <p className="font-medium text-lg mb-2">Ready to scale?</p>
                <p className="text-gray-400 text-sm">Our team typically responds within 24 hours to schedule a strategy session.</p>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Form */}
          <motion.div
            className="flex-1 lg:w-3/5"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <form 
              className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-gray-100"
              onSubmit={handleSubmit}
            >
              {isSuccess && (
                <motion.div 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-8 p-4 bg-green-50 border border-green-200 rounded-xl flex items-center text-green-700"
                >
                  <CheckCircle2 className="w-5 h-5 mr-3 flex-shrink-0" />
                  <p className="font-medium">Message sent successfully! We will be in touch soon.</p>
                </motion.div>
              )}

              {/* Name Field (Full Width) */}
              <div className="mb-6">
                <label className="block text-sm font-bold text-gray-700 mb-2">Your Name</label>
                <input 
                  name="name" 
                  type="text"
                  placeholder="John Doe" 
                  required 
                  className="w-full px-5 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#b8860b]/50 focus:border-[#b8860b] transition-all"
                />
              </div>

              {/* Email & Phone Fields (Side by Side) */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Email Address</label>
                  <input
                    name="email"
                    type="email"
                    placeholder="john@example.com"
                    required
                    className="w-full px-5 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#b8860b]/50 focus:border-[#b8860b] transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Mobile Number</label>
                  <input
                    name="phone"
                    type="tel"
                    placeholder="+91 00000 00000"
                    required
                    className="w-full px-5 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#b8860b]/50 focus:border-[#b8860b] transition-all"
                  />
                </div>
              </div>

              {/* Service Selection Dropdown */}
              <div className="mb-6">
                <label className="block text-sm font-bold text-gray-700 mb-2">What are you looking for?</label>
                <div className="relative">
                  <select 
                    name="service" 
                    defaultValue="Digitalized Business (Complete Management)"
                    className="w-full px-5 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#b8860b]/50 focus:border-[#b8860b] transition-all appearance-none cursor-pointer"
                  >
                    <optgroup label="The Complete Package">
                      <option value="Digitalized Business (Complete Management)">Digitalized Business (Complete Management)</option>
                    </optgroup>
                    <optgroup label="Development & Products">
                      <option value="Custom Software / App Development">Custom Software / App Development</option>
                      <option value="Website / E-Commerce Build">Website / E-Commerce Build</option>
                      <option value="Vision Reality Ready-Made Products">Vision Reality Ready-Made Products</option>
                    </optgroup>
                    <optgroup label="Marketing & Growth">
                      <option value="Digital Marketing & Meta/Google Ads">Digital Marketing & Meta/Google Ads</option>
                      <option value="SEO & Google Presence">SEO & Google Presence</option>
                      <option value="Social Media Management">Social Media Management</option>
                    </optgroup>
                    <optgroup label="Technical Support">
                      <option value="Business Automation & Integrations">Business Automation & Integrations</option>
                      <option value="Website & Software Maintenance">Website & Software Maintenance</option>
                    </optgroup>
                  </select>
                  {/* Custom Dropdown Arrow */}
                  <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-gray-500">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" fillRule="evenodd"></path></svg>
                  </div>
                </div>
              </div>

              {/* Message Field */}
              <div className="mb-8">
                <label className="block text-sm font-bold text-gray-700 mb-2">Project Details</label>
                <textarea 
                  name="message" 
                  rows="5" 
                  placeholder="Tell us about your business goals and what you want to achieve..." 
                  className="w-full px-5 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#b8860b]/50 focus:border-[#b8860b] transition-all resize-none"
                  required
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center py-4 px-6 bg-gray-900 text-white font-bold rounded-xl shadow-lg hover:bg-[#b8860b] transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? (
                  "Sending Message..."
                ) : (
                  <>
                    Send Message
                    <Send className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>

        </div>
      </div>
    </main>
  );
}