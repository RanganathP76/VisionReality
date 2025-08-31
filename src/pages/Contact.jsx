import { useState } from "react";
import { motion } from "framer-motion";
import "./contact.css";

export default function Contact() {
  const SCRIPT_URL =
    "https://script.google.com/macros/s/AKfycbyXpHQJB_7iY0Q9k7ZdleqCfmo-3EKENmbKjb3zc8V-GPoD1M30ZLsU-qAeslmAssZ-/exec";

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.target);

    try {
      await fetch(SCRIPT_URL, {
        method: "POST",
        body: formData,
      });

      alert("✅ Message sent successfully!");
      e.target.reset();
    } catch (err) {
      console.error(err);
      alert("❌ Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main>
      <section className="section">
        <div className="container grid grid-2">
          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="h1"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
            >
              Let's talk
            </motion.h1>
            <motion.p
              className="p-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.7 }}
            >
              Tell us about your project and goals. We’ll propose a clear roadmap.
            </motion.p>
            <motion.div
              className="hr"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.9, duration: 0.6 }}
            />
            <motion.p
              className="muted"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1 }}
            >
              <strong>Email:</strong> hello@visionreality.com
            </motion.p>
            <motion.p
              className="muted"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.3 }}
            >
              <strong>Phone:</strong> +91 98765 43210
            </motion.p>
          </motion.div>

          {/* Right Side - Form */}
          <motion.form
            className="card form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <label>
              Name
              <input name="name" placeholder="Your name" required />
            </label>
            <label>
              Email
              <input
                name="email"
                type="email"
                placeholder="you@example.com"
                required
              />
            </label>
            <label>
              What do you need?
              <select name="service" defaultValue="Web Design">
                <option>Web Design</option>
                <option>Development</option>
                <option>Digital Marketing</option>
                <option>Consultation</option>
              </select>
            </label>
            <label>
              Message
              <textarea name="message" rows="4" placeholder="Tell us a bit…" />
            </label>
            <motion.button
              className="btn btn-primary"
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </motion.button>
          </motion.form>
        </div>
      </section>
    </main>
  );
}
