import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container-fluid">
        <Row>
          <Col sm={6}>
            {currentYear} &copy;React Boilerplate by <a href="https://manoj-rai.vercel.app/" target="_blank">Manoj Rai</a>
          </Col>

          <Col sm={6}>
            <div className="text-sm-end footer-links d-none d-sm-block">
              <Link to="#">About Us</Link>
              <Link to="#">Help</Link>
              <Link to="#">Contact Us</Link>
            </div>
          </Col>
        </Row>
      </div>
    </footer>
  );
};

export default Footer;
