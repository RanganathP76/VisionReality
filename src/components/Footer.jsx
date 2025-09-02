import "./footer.css";

export default function Footer() {
  return (
    <footer className="vr-footer">
      <div className="container foot">
        <div className="col brand">
          <h4>
            Vision<span className="gold">Reality</span>
          </h4>
          <p className="muted">Intelligent Web, Software & Growth.</p>
        </div>

        <div className="col">
          <h5>Contact</h5>
          <p className="muted">visionreality4uofficial@gmail.com</p>
          <p className="muted">+91 80500 84991</p>

          {/* Social Icons */}
          <div className="social-icons" style={{ marginTop: "8px", display: "flex", gap: "12px" }}>
            <a href="https://www.instagram.com/vision_reality_4_u/?utm_source=ig_web_button_share_sheet" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://www.linkedin.com/company/108477525/admin/dashboard/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://www.facebook.com/profile.php?id=61579933083269" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="https://upwork.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-upwork"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="container tiny">
        © {new Date().getFullYear()} VisionReality. All rights reserved.
      </div>
    </footer>
  );
}

