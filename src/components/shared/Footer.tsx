import { Facebook, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer>
      <div>
        <p>
          Fluency is nothing more than mastering the 100 most important
          real-life conversations
        </p>
        <div>
          <Facebook />
          <Linkedin />
          <Twitter />
        </div>
      </div>
      <div>
        <h3>Speak up courses</h3>
        <ul>
          <li>Learn English</li>
          <li>Learn Turkish</li>
          <li>Learn French</li>
        </ul>
      </div>
      <nav>
        <h3>Products</h3>
        <ul>
          <li>Landing page</li>
          <li>About us</li>
          <li>Contact us</li>
        </ul>
      </nav>
      <div>
        <h3>Contact information </h3>
        
      </div>
    </footer>
  );
};

export default Footer;
