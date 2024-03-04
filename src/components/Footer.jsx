
import { Facebook, Instagram, Twitter, Youtube,Linkedin, Whatsapp, Git } from "react-bootstrap-icons"


const Footer = () => {
    return(
        <div
          className="container-fluid mt-5 justify-content-center align-items-center " style={{backgroundColor:'rgba(227, 255, 136,255)'}}
        >
            <div className="w-50 d-flex justify-content-center flex-column align-items-start m-auto p-3">
          <div className="row">
            <div id="icon" className="col mb-3">
              <Facebook className="text-black-50 me-2"/>
              <Instagram className="text-black-50 me-2"/>
              <Twitter className="text-black-50 me-2"/>
              <Youtube className="text-black-50 me-2"/>
              <Linkedin className="text-black-50 me-2"/>
              <Whatsapp className="text-black-50 me-2"/>
              <Git  className="text-black-50 me-2"/>
            </div>
          </div>
          <div className="row d-flex flex-row">
            <div className="col col-xs-5">
              <ul className="list-unstyled">
                <li className="text-black-50">FAQ</li>
                <li className="text-black-50">Privacy Policy</li>
                <li className="text-black-50">Privacy</li>
                <li className="text-black-50">Cookie Privacy</li>
              </ul>
            </div>
            <div className="col col-xs-5">
              <ul className="list-unstyled">
                <li className="text-black-50">Copyright</li>
                <li className="text-black-50">Investor Relations</li>
                <li className="text-black-50">Legal Notices</li>
                
              </ul>
            </div>
            <div className="col col-xs-5">
              <ul className="list-unstyled">
                <li className="text-black-50">Help Center</li>
                <li className="text-black-50">Jobs</li>
             <li className="text-black-50">Cookie Preferences</li>
             
              </ul>
            </div>
            <div className="col col-xs-5">
              <ul className="list-unstyled">
                <li className="text-black-50">Gift Cards</li>
                <li className="text-black-50">Terms of Use</li>
                <li className="text-black-50">Corporate Information</li>
              </ul>
            </div>
            <div className="col col-xs-5">
              <ul className="list-unstyled">
                <li className="text-black-50"><a href="https://github.com/riccardodiba" target="_blank" rel="noopener noreferrer">Github</a>
                </li>
                <li className="text-black-50"><a href="https://www.linkedin.com/in/riccardo-di-bari-developer/" target="_blank"rel="noopener noreferrer">Linkedin</a> 
                 </li>
               
              </ul>
            </div>
          </div>
          <div className="row d-flex flex-column">
            <div className="col">
             
            </div>
            <div className="col">
              <p className="text-black-50">
                &copy;2024 Amici di Zampa 
              </p>
              
            </div>
          </div>
          </div>
        </div>
     
    )
}

export default Footer