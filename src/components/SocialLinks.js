import { FaGithub, FaFacebook, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const SocialLinks = ()=> {
  return(
    <div className="d-flex gap-2 p-2 fs-3">
      <Link to="https://github.com/Brughyan" className="text-light">
        <FaGithub />
      </Link>
      <Link to="https://www.facebook.com/itsbrian1" className="text-light">
        <FaFacebook />
      </Link>
      <Link to="https://www.instagram.com/allaboutbrughyan/?igshid=OGQ5ZDc2ODk2ZA==&fbclid=IwAR2zt6HJucAGFh8JSgsmjrUBLE_Jf9OXGPCMti7L95-x38YWJ9Pp7LtFWNU" className="text-light">
        <FaInstagram />
      </Link>
    </div>
  );
};

export default SocialLinks;