import "./footer.css";

export default function Footer(){
  return (
    <footer className="vr-footer">
      <div className="container foot">
        <div className="col brand">
          <h4>Vision<span className="gold">Reality</span></h4>
          <p className="muted">Intelligent Web, Software & Growth.</p>
        </div>
       
        <div className="col">
          <h5>Contact</h5>
          <p className="muted">hello@visionreality.com</p>
          <p className="muted">+91 98765 43210</p>
        </div>
      </div>
      <div className="container tiny">
        © {new Date().getFullYear()} VisionReality. All rights reserved.
      </div>
    </footer>
  );
}
