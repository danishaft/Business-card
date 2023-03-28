import { FaFacebookF } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
function Footer(){
    return (
     <footer className="footer">
      <a href="#" className="social twitter"><FaTwitter /></a>
      <a href="#" className="social facebook"><FaFacebookF /></a>
      <a href="#" className="social instagram"><FaInstagram /></a>
      <a href="#" className="social github"><FaGithub /></a>
     </footer>
    )
}

export default Footer