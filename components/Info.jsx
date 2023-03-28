import Profile from "./assets/profilr-pic.png"
import { FaLinkedin } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";

function Info(){
  return (
    <section className="info-sec">
      <img src={Profile} alt="A photo of Laura Smith"/>
      <div className="text space">
        <p className="name">Laura Smith</p>
        <p className="role">Frontend Developer</p>
        <a className="web" href="#">laurasmith.website</a>
      </div>
      <div className="btn-grp space">
        <span className="btn email-btn"><FaEnvelope /> Email</span>
        <span className="btn linkedin-btn"><FaLinkedin /> LinkedIn</span>
      </div>
    </section>
  )
}

export default Info