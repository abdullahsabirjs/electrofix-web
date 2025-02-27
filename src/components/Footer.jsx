import "../styles/Footer.css"
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <h2 className="footer-logo">ElectroFix</h2>
        <p className="footer-text">
          Reliable Electrical & Solar Solutions for Your Home & Business.
        </p>

        <div className="footer-contact">
          <p>📍 Karachi, Pakistan</p>
          <p>📞 +92 312 3456789</p>
        </div>

        <p className="footer-copy">
          &copy; {new Date().getFullYear()} ElectroFix. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
